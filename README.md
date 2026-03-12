# Portafolio Backend - Carlos Andres Martinez

API Backend para portafolio personal de desarrollador backend nivel medio. Construido con Node.js, TypeScript y MongoDB.

## Stack Tecnológico

- **TypeScript**: Lenguaje principal
- **Node.js**: Runtime environment
- **Express**: Framework web
- **MongoDB**: Base de datos NoSQL
- **JWT**: Autenticación
- **Swagger**: Documentación API
- **Docker**: Contenerización

## Características

- Autenticación JWT con refresh tokens
- CRUD de usuarios, proyectos y habilidades
- Documentación API con Swagger
- Validación de datos y seguridad
- Testing con Jest y Supertest
- Docker y Docker Compose

## Requisitos Previos

- Node.js 20+
- MongoDB 7.0+
- Docker (opcional)

## Ejecución Rápida

### 1. Clonar el repositorio

```bash
git clone <repository-url>
cd portafolio-backend
```

### 2. Instalar dependencias

```bash
npm install
cd frontend && npm install && cd ..
```

### 3. Configurar variables de entorno

```bash
cp .env.example .env
# Editar .env con tus configuraciones
```

### 4. Iniciar la aplicación

```bash
# Backend (API) - Puerto 3020
npm run dev

# Frontend (Web) - Puerto 3000 (en otra terminal)
cd frontend && npm start
```

## Servicios Ejecutando

- **Página Web**: http://localhost:3000
- **API Backend**: http://localhost:3020
- **Documentación API**: http://localhost:3020/api-docs
- **Health Check**: http://localhost:3020/health

## API Endpoints

### Autenticación

- `POST /api/v1/auth/register` - Registro de usuario
- `POST /api/v1/auth/login` - Login de usuario
- `POST /api/v1/auth/refresh` - Refresh token
- `POST /api/v1/auth/logout` - Logout

### Usuarios

- `GET /api/v1/users/me` - Perfil propio
- `PUT /api/v1/users/me` - Actualizar perfil
- `DELETE /api/v1/users/me` - Eliminar cuenta
- `GET /api/v1/users` - Listar usuarios (admin)

### Proyectos

- `GET /api/v1/projects` - Listar proyectos
- `POST /api/v1/projects` - Crear proyecto
- `GET /api/v1/projects/:id` - Ver proyecto
- `PUT /api/v1/projects/:id` - Actualizar proyecto
- `DELETE /api/v1/projects/:id` - Eliminar proyecto

### Habilidades

- `GET /api/v1/skills` - Listar habilidades
- `POST /api/v1/skills` - Crear habilidad
- `GET /api/v1/skills/:id` - Ver habilidad
- `PUT /api/v1/skills/:id` - Actualizar habilidad
- `DELETE /api/v1/skills/:id` - Eliminar habilidad

## Proyectos Destacados

### 1. Plataforma SaaS de Gestión de Proyectos

- **Stack**: Next.js, React, Node.js, Express, PostgreSQL, Prisma ORM, JWT, TailwindCSS
- **Funcionalidades**: Registro/login, equipos, tableros, tareas, drag & drop, comentarios, roles, notificaciones

### 2. E-commerce Profesional Full Stack

- **Stack**: Next.js, React, Node.js, PostgreSQL, Prisma, Stripe
- **Funcionalidades**: Registro usuarios, catálogo, filtros, carrito, checkout, pagos Stripe, panel admin, inventario

### 3. DevConnect - Red Social para Desarrolladores

- **Stack**: Next.js, Node.js, PostgreSQL, Prisma, JWT
- **Funcionalidades**: Registro, perfiles, publicaciones, comentarios, likes, seguidores, feed

### 4. Dashboard de Analítica de Datos

- **Stack**: Next.js, Node.js, PostgreSQL, Prisma
- **Funcionalidades**: Panel métricas, gráficos interactivos, filtros fecha, exportación reportes, autenticación

### 5. Sistema de Reservas Online

- **Stack**: Next.js, Node.js, PostgreSQL, Prisma
- **Funcionalidades**: Registro usuarios, calendario, reserva horarios, disponibilidad, cancelación, panel administrador

### 6. Plataforma de Cursos Online

- **Stack**: Next.js, Node.js, PostgreSQL, Prisma
- **Funcionalidades**: Registro/login, catálogo cursos, lecciones video, progreso estudiante, evaluaciones, panel instructor

## Documentación API

La documentación interactiva está disponible en:

```
http://localhost:3000/api-docs
```

## Testing

```bash
# Ejecutar todos los tests
npm test

# Tests con cobertura
npm run test:coverage

# Tests en modo watch
npm run test:watch
```

## Linting y Formato

```bash
# Verificar código
npm run lint

# Corregir automáticamente
npm run lint:fix

# Formatear código
npm run format
```

## Docker

### Build y run con Docker Compose

```bash
docker-compose up -d
```

### Detener servicios

```bash
docker-compose down
```

### Ver logs

```bash
docker-compose logs -f app
```

## Estructura del Proyecto

```
src/
├── config/           # Configuración
├── controllers/      # Controladores
├── middleware/       # Middleware
├── models/           # Modelos Mongoose
├── routes/           # Rutas
├── services/         # Lógica de negocio
├── utils/            # Utilidades
├── validators/       # Validadores
└── app.ts            # Punto de entrada
```

## Variables de Entorno

```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portafolio
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
```

## Contribución

1. Fork el repositorio
2. Crear una rama feature (`git checkout -b feature/NuevaFuncionalidad`)
3. Realizar cambios
4. Commit (`git commit -m 'Add: Nueva funcionalidad'`)
5. Push a la rama (`git push origin feature/NuevaFuncionalidad`)
6. Crear Pull Request

## Licencia

MIT

## Contacto

Carlos Andres Martinez

- Email: carlos@example.com
- GitHub: [tu-usuario-github]
