# Cómo Ver los Proyectos en el Portafolio

## Acceso al Portafolio

1. **Abre tu navegador** (Chrome, Firefox, Safari, etc.)
2. **Ingresa a la URL**: http://localhost:3000
3. **Navega a la sección "Proyectos"**

## Proyectos que se muestran

### 1. Plataforma SaaS de Gestión de Proyectos

- **Stack**: Next.js, React, Node.js, Express, PostgreSQL, Prisma ORM, JWT, TailwindCSS
- **Funcionalidades**: Registro, equipos, tableros, tareas, drag & drop, comentarios, roles, notificaciones

### 2. E-commerce Profesional Full Stack

- **Stack**: Next.js, React, Node.js, PostgreSQL, Prisma, Stripe
- **Funcionalidades**: Registro, catálogo, filtros, carrito, checkout, pagos, panel admin, inventario

### 3. DevConnect - Red Social para Desarrolladores

- **Stack**: Next.js, Node.js, PostgreSQL, Prisma, JWT
- **Funcionalidades**: Registro, perfiles, publicaciones, comentarios, likes, seguidores, feed

### 4. Dashboard de Analítica de Datos

- **Stack**: Next.js, Node.js, PostgreSQL, Prisma
- **Funcionalidades**: Panel métricas, gráficos, filtros fecha, exportación reportes, autenticación

## Estructura Visual de cada Proyecto

Cada tarjeta de proyecto muestra:

1. **Nombre del proyecto**
2. **Descripción**
3. **Lista de funcionalidades** (con viñetas)
4. **Stack tecnológico** (tags)
5. **Enlaces** (GitHub y Demo)

## Diseño

- **Estilo**: Minimalista Apple en blanco y negro
- **Diseño**: Responsive (adaptable a móviles y desktop)
- **Colores**: Blanco, negro y grises

## Servicios Ejecutando

- **Frontend (Página Web)**: http://localhost:3000
- **Backend (API)**: http://localhost:3020

## Si no ves los proyectos

1. Verifica que el frontend esté corriendo:

   ```bash
   lsof -i :3000
   ```

2. Reinicia el frontend si es necesario:

   ```bash
   cd /Users/carlosmartinez/Documents/portafolio/frontend
   npm start
   ```

3. Actualiza la página (Ctrl+F5 o Cmd+Shift+R)
