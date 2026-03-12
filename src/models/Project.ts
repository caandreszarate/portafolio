import { Schema, model, Document } from 'mongoose';

export interface IProject extends Document {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
  image?: string;
  userId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>(
  {
    name: {
      type: String,
      required: [true, 'Nombre del proyecto es requerido'],
      trim: true,
      maxlength: [200, 'El nombre no puede exceder 200 caracteres'],
    },
    description: {
      type: String,
      required: [true, 'Descripción es requerida'],
      trim: true,
      maxlength: [1000, 'La descripción no puede exceder 1000 caracteres'],
    },
    technologies: [
      {
        type: String,
        trim: true,
        maxlength: [50, 'La tecnología no puede exceder 50 caracteres'],
      },
    ],
    url: {
      type: String,
      trim: true,
      match: [/^https?:\/\/.+/, 'URL inválida'],
    },
    github: {
      type: String,
      trim: true,
      match: [/^https?:\/\/.+/, 'URL de GitHub inválida'],
    },
    image: {
      type: String,
      trim: true,
      match: [/^https?:\/\/.+/, 'URL de imagen inválida'],
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

const Project = model<IProject>('Project', projectSchema);

export default Project;
