import { Schema, model, Document } from 'mongoose';

export interface ISkill extends Document {
  name: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  userId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const skillSchema = new Schema<ISkill>(
  {
    name: {
      type: String,
      required: [true, 'Nombre de la habilidad es requerido'],
      trim: true,
      maxlength: [100, 'El nombre no puede exceder 100 caracteres'],
    },
    category: {
      type: String,
      required: [true, 'Categoría es requerida'],
      trim: true,
      maxlength: [50, 'La categoría no puede exceder 50 caracteres'],
    },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      required: [true, 'Nivel es requerido'],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Usuario es requerido'],
    },
  },
  {
    timestamps: true,
  }
);

const Skill = model<ISkill>('Skill', skillSchema);

export default Skill;
