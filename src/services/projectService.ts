import Project, { IProject } from '../models/Project';

interface ProjectFilters {
  page?: number;
  limit?: number;
  technology?: string;
  sortBy?: string;
}

class ProjectService {
  async getProjects(filters: ProjectFilters = {}): Promise<{
    projects: IProject[];
    total: number;
    page: number;
    limit: number;
  }> {
    const { page = 1, limit = 10, technology, sortBy = 'createdAt' } = filters;
    const skip = (page - 1) * limit;

    const query: any = {};
    if (technology) {
      query.technologies = technology;
    }

    const projects = await Project.find(query)
      .sort({ [sortBy]: -1 })
      .skip(skip)
      .limit(limit)
      .populate('userId', 'name email');

    const total = await Project.countDocuments(query);

    return {
      projects,
      total,
      page,
      limit,
    };
  }

  async getProjectById(id: string): Promise<IProject | null> {
    return Project.findById(id).populate('userId', 'name email');
  }

  async createProject(
    projectData: Partial<IProject>,
    userId: string
  ): Promise<IProject> {
    const project = new Project({
      ...projectData,
      userId,
    });

    await project.save();
    return project.populate('userId', 'name email');
  }

  async updateProject(
    id: string,
    projectData: Partial<IProject>,
    userId: string
  ): Promise<IProject | null> {
    const project = await Project.findById(id);
    if (!project) {
      throw new Error('Proyecto no encontrado');
    }

    if (project.userId.toString() !== userId) {
      throw new Error('No tienes permiso para editar este proyecto');
    }

    Object.assign(project, projectData);
    await project.save();

    return Project.findById(id).populate('userId', 'name email');
  }

  async deleteProject(id: string, userId: string): Promise<void> {
    const project = await Project.findById(id);
    if (!project) {
      throw new Error('Proyecto no encontrado');
    }

    if (project.userId.toString() !== userId) {
      throw new Error('No tienes permiso para eliminar este proyecto');
    }

    await Project.findByIdAndDelete(id);
  }
}

export default new ProjectService();
