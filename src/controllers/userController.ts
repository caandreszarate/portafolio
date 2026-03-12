import { Response } from 'express';
import userService from '../services/userService';
import { AuthRequest } from '../middleware/auth';

export const getProfile = async (
  req: AuthRequest,
  res: Response
): Promise<Response> => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    const user = await userService.getProfile(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    return res.status(200).json(user);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProfile = async (
  req: AuthRequest,
  res: Response
): Promise<Response> => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    const { email, name } = req.body;
    const user = await userService.updateProfile(req.user.id, { email, name });

    return res.status(200).json(user);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteAccount = async (
  req: AuthRequest,
  res: Response
): Promise<Response> => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    await userService.deleteAccount(req.user.id);
    return res.status(200).json({ message: 'Cuenta eliminada exitosamente' });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const listUsers = async (
  req: AuthRequest,
  res: Response
): Promise<Response> => {
  try {
    if (!req.user || req.user.role !== 'admin') {
      return res
        .status(403)
        .json({ message: 'No tienes permisos para listar usuarios' });
    }

    const users = await userService.listUsers();
    return res.status(200).json(users);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
