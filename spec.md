# Especificaciones Técnicas - Carlos Andres Martinez

## Arquitectura
```
Cliente → API → Middleware → Services → Models → MongoDB
```

## Módulos y Endpoints

### 1. Autenticación
- `POST /api/v1/auth/register` - Registro
- `POST /api/v1/auth/login` - Login
- `POST /api/v1/auth/refresh` - Refresh token
- `POST /api/v1/auth/logout` - Logout

### 2. Usuarios
- `GET /api/v1/users/me` - Perfil propio
- `PUT /api/v1/users/me` - Actualizar perfil
- `DELETE /api/v1/users/me` - Eliminar cuenta
- `GET /api/v1/users` - Listar (admin)

### 3. Proyectos
- `GET /api/v1/projects` - Listar (paginado)
- `POST /api/v1/projects` - Crear
- `GET /api/v1/projects/:id` - Ver
- `PUT /api/v1/projects/:id` - Actualizar
- `DELETE /api/v1/projects/:id` - Eliminar

### 4. Habilidades
- `GET /api/v1/skills` - Listar
- `POST /api/v1/skills` - Crear
- `GET /api/v1/skills/:id` - Ver
- `PUT /api/v1/skills/:id` - Actualizar
- `DELETE /api/v1/skills/:id` - Eliminar

## Modelos

### User
```typescript
{
  email: string (unique),
  password: string (hashed),
  name: string,
  role: 'user' | 'admin'
}
```

### Project
```typescript
{
  name: string,
  description: string,
  technologies: string[],
  url?: string,
  github?: string,
  image?: string,
  userId: ObjectId
}
```

### Skill
```typescript
{
  name: string,
  category: string,
  level: 'beginner' | 'intermediate' | 'advanced',
  userId: ObjectId
}
```

## Seguridad
- JWT con access (15m) y refresh (7d)
- Rate limiting: 100 req/min por IP
- Validación de entrada en todos los endpoints
- CORS configurado

## Tecnologías
- Node.js v20+, TypeScript v5+
- Express v4+, MongoDB v6+
- JWT, Swagger/OpenAPI
- Jest + Supertest (testing)
- ESLint + Prettier (calidad)
