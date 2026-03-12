import Skill, { ISkill } from '../models/Skill';

interface SkillFilters {
  category?: string;
  level?: string;
}

class SkillService {
  async getSkills(filters: SkillFilters = {}): Promise<ISkill[]> {
    const query: any = {};
    if (filters.category) {
      query.category = filters.category;
    }
    if (filters.level) {
      query.level = filters.level;
    }

    return Skill.find(query).populate('userId', 'name email');
  }

  async getSkillById(id: string): Promise<ISkill | null> {
    return Skill.findById(id).populate('userId', 'name email');
  }

  async createSkill(
    skillData: Partial<ISkill>,
    userId: string
  ): Promise<ISkill> {
    const skill = new Skill({
      ...skillData,
      userId,
    });

    await skill.save();
    return skill.populate('userId', 'name email');
  }

  async updateSkill(
    id: string,
    skillData: Partial<ISkill>,
    userId: string
  ): Promise<ISkill | null> {
    const skill = await Skill.findById(id);
    if (!skill) {
      throw new Error('Habilidad no encontrada');
    }

    if (skill.userId.toString() !== userId) {
      throw new Error('No tienes permiso para editar esta habilidad');
    }

    Object.assign(skill, skillData);
    await skill.save();

    return Skill.findById(id).populate('userId', 'name email');
  }

  async deleteSkill(id: string, userId: string): Promise<void> {
    const skill = await Skill.findById(id);
    if (!skill) {
      throw new Error('Habilidad no encontrada');
    }

    if (skill.userId.toString() !== userId) {
      throw new Error('No tienes permiso para eliminar esta habilidad');
    }

    await Skill.findByIdAndDelete(id);
  }
}

export default new SkillService();
