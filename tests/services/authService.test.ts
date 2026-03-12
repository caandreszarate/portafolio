import authService from '../../src/services/authService';
import User from '../../src/models/User';
import mongoose from 'mongoose';

describe('AuthService', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/test-portafolio');
  });

  afterAll(async () => {
    await User.deleteMany({});
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe('register', () => {
    it('should register a new user', async () => {
      const result = await authService.register('test@example.com', 'Password123!', 'Test User');
      
      expect(result.user.email).toBe('test@example.com');
      expect(result.user.name).toBe('Test User');
      expect(result.accessToken).toBeDefined();
      expect(result.refreshToken).toBeDefined();
    });

    it('should throw error if email already exists', async () => {
      await authService.register('test@example.com', 'Password123!', 'Test User');
      
      await expect(
        authService.register('test@example.com', 'Password123!', 'Another User')
      ).rejects.toThrow('El email ya está registrado');
    });
  });

  describe('login', () => {
    it('should login with valid credentials', async () => {
      await authService.register('test@example.com', 'Password123!', 'Test User');
      const result = await authService.login('test@example.com', 'Password123!');
      
      expect(result.user.email).toBe('test@example.com');
      expect(result.accessToken).toBeDefined();
    });

    it('should throw error with invalid email', async () => {
      await expect(
        authService.login('nonexistent@example.com', 'Password123!')
      ).rejects.toThrow('Credenciales inválidas');
    });

    it('should throw error with invalid password', async () => {
      await authService.register('test@example.com', 'Password123!', 'Test User');
      
      await expect(
        authService.login('test@example.com', 'WrongPassword!')
      ).rejects.toThrow('Credenciales inválidas');
    });
  });

  describe('refreshToken', () => {
    it('should generate new access token with valid refresh token', async () => {
      const result = await authService.register('test@example.com', 'Password123!', 'Test User');
      const newAccessToken = await authService.refreshToken(result.refreshToken);
      
      expect(newAccessToken).toBeDefined();
    });

    it('should throw error with invalid refresh token', async () => {
      await expect(
        authService.refreshToken('invalid-token')
      ).rejects.toThrow('Token de refresh inválido');
    });
  });
});
