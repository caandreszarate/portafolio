import { Request, Response } from 'express';
import projectService from '../services/projectService';
import { AuthRequest } from '../middleware/auth';

export const getProjects = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { page, limit, technology, sortBy } = req.query;

    const filters = {
      page: page ? parseInt(page as string) : undefined,
      limit: limit ? parseInt(limit as string) : undefined,
      technology: technology as string,
      sortBy: sortBy as string,
    };

    const result = await projectService.getProjects(filters);
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProjectById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const project = await projectService.getProjectById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }

    return res.status(200).json(project);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProject = async (
  req: AuthRequest,
  res: Response
): Promise<Response> => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    const project = await projectService.createProject(req.body, req.user.id);
    return res.status(201).json(project);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateProject = async (
  req: AuthRequest,
  res: Response
): Promise<Response> => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    const project = await projectService.updateProject(
      req.params.id,
      req.body,
      req.user.id
    );
    return res.status(200).json(project);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteProject = async (
  req: AuthRequest,
  res: Response
): Promise<Response> => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    await projectService.deleteProject(req.params.id, req.user.id);
    return res.status(200).json({ message: 'Proyecto eliminado exitosamente' });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
