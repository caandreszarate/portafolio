import { Request, Response } from 'express';
import authService from '../services/authService';

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ message: 'Todos los campos son requeridos' });
    }

    const result = await authService.register(email, password, name);
    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email y contraseña son requeridos' });
    }

    const result = await authService.login(email, password);
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};

export const refreshToken = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ message: 'Token de refresh requerido' });
    }

    const accessToken = await authService.refreshToken(refreshToken);
    return res.status(200).json({ accessToken });
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};

export const logout = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json({ message: 'Sesión cerrada exitosamente' });
};
