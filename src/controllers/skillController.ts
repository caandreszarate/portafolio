import { Request, Response } from 'express';
import skillService from '../services/skillService';
import { AuthRequest } from '../middleware/auth';

export const getSkills = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { category, level } = req.query;

    const filters = {
      category: category as string,
      level: level as string,
    };

    const skills = await skillService.getSkills(filters);
    return res.status(200).json(skills);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSkillById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const skill = await skillService.getSkillById(req.params.id);

    if (!skill) {
      return res.status(404).json({ message: 'Habilidad no encontrada' });
    }

    return res.status(200).json(skill);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createSkill = async (
  req: AuthRequest,
  res: Response
): Promise<Response> => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    const skill = await skillService.createSkill(req.body, req.user.id);
    return res.status(201).json(skill);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateSkill = async (
  req: AuthRequest,
  res: Response
): Promise<Response> => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    const skill = await skillService.updateSkill(
      req.params.id,
      req.body,
      req.user.id
    );
    return res.status(200).json(skill);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteSkill = async (
  req: AuthRequest,
  res: Response
): Promise<Response> => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    await skillService.deleteSkill(req.params.id, req.user.id);
    return res
      .status(200)
      .json({ message: 'Habilidad eliminada exitosamente' });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
