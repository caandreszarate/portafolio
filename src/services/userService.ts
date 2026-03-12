import User, { IUser } from '../models/User';

class UserService {
  async getProfile(userId: string): Promise<IUser | null> {
    return User.findById(userId).select('-password');
  }

  async updateProfile(
    userId: string,
    updateData: Partial<IUser>
  ): Promise<IUser | null> {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    if (updateData.email && updateData.email !== user.email) {
      const existingUser = await User.findOne({ email: updateData.email });
      if (existingUser) {
        throw new Error('El email ya está registrado');
      }
    }

    Object.assign(user, updateData);
    await user.save();

    return User.findById(userId).select('-password');
  }

  async deleteAccount(userId: string): Promise<void> {
    const result = await User.findByIdAndDelete(userId);
    if (!result) {
      throw new Error('Usuario no encontrado');
    }
  }

  async listUsers(): Promise<IUser[]> {
    return User.find().select('-password');
  }
}

export default new UserService();
