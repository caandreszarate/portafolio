import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User';
import config from '../config';

interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
  accessToken: string;
  refreshToken: string;
}

class AuthService {
  async register(
    email: string,
    password: string,
    name: string
  ): Promise<AuthResponse> {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('El email ya está registrado');
    }

    const user = new User({ email, password, name });
    await user.save();

    return this.generateTokens(user);
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error('Credenciales inválidas');
    }

    return this.generateTokens(user);
  }

  async refreshToken(refreshToken: string): Promise<string> {
    try {
      const decoded = jwt.verify(refreshToken, config.jwtRefreshSecret) as {
        id: string;
      };
      const user = await User.findById(decoded.id);

      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      const accessToken = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        config.jwtAccessSecret,
        { expiresIn: '15m' }
      );

      return accessToken;
    } catch (error) {
      throw new Error('Token de refresh inválido');
    }
  }

  private generateTokens(user: IUser): AuthResponse {
    const accessToken = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      config.jwtAccessSecret,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign({ id: user.id }, config.jwtRefreshSecret, {
      expiresIn: '7d',
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      accessToken,
      refreshToken,
    };
  }
}

export default new AuthService();
