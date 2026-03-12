# Especificaciones: Portafolio Backend Carlos Andres Martinez

## Módulos
1. **Autenticación**: Registro, login, JWT, refresh token
2. **Usuarios**: CRUD propio, listado admin
3. **Proyectos**: CRUD completo con paginación
4. **Habilidades**: CRUD con categorías y niveles

## Endpoints
```
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/refresh
POST   /api/v1/auth/logout
GET    /api/v1/users/me
PUT    /api/v1/users/me
DELETE /api/v1/users/me
GET    /api/v1/users
GET    /api/v1/projects
POST   /api/v1/projects
GET    /api/v1/projects/:id
PUT    /api/v1/projects/:id
DELETE /api/v1/projects/:id
GET    /api/v1/skills
POST   /api/v1/skills
GET    /api/v1/skills/:id
PUT    /api/v1/skills/:id
DELETE /api/v1/skills/:id
```

## Tecnologías
- Node.js v20+, TypeScript v5+
- Express v4+, MongoDB v6+
- JWT, Swagger/OpenAPI
- Jest + Supertest

## Requisitos
- Seguridad: validación, rate limiting, CORS
- Calidad: TypeScript estricto, ESLint, Prettier
- Testing: Cobertura >80%
- Documentación: API docs automática
