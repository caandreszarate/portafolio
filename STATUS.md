# Estado del Proyecto Portafolio Backend - Carlos Andres Martinez

## Servicios Ejecutando

### Backend (API)

- **URL**: http://localhost:3020
- **Status**: ✅ CORRIENDO
- **Proceso**: 54257
- **Endpoint Health**: http://localhost:3020/health
- **Documentación API**: http://localhost:3020/api-docs

### Frontend (Página Web)

- **URL**: http://localhost:3000
- **Status**: ✅ CORRIENDO
- **Proceso**: 56823
- **API Backend**: http://localhost:3020

## Cómo Acceder

### Para ver la página web del portafolio:

1. Abre tu navegador
2. Ve a: **http://localhost:3000**

### Para ver la documentación de la API:

1. Abre tu navegador
2. Ve a: **http://localhost:3020/api-docs**

## Estructura del Proyecto

```
portafolio/
├── backend/           # API (Node.js + Express) - Puerto 3020
├── frontend/          # Interfaz web (React) - Puerto 3000
├── idea.md            # Concepto del portafolio
├── prompt.md          # Especificaciones
├── spec.md            # Requisitos técnicos
├── roadmap.md         # Plan de desarrollo
├── TODO.md            # Lista de tareas
└── README.md          # Documentación
```

## Comandos Útiles

### Iniciar servicios:

```bash
# Backend (puerto 3020)
npm run dev

# Frontend (puerto 3000)
cd frontend && npm start
```

### Detener servicios:

```bash
pkill -f "ts-node-dev"
pkill -f "react-scripts"
```

### Ver logs:

```bash
tail -f /tmp/backend.log
tail -f /tmp/frontend.log
```

## Notas

- El backend y el frontend están configurados para usar puertos diferentes para evitar conflictos
- La API del backend está configurada para usar CORS y aceptar solicitudes del frontend
- La documentación API está disponible en Swagger UI
- El portafolio es minimalista y profesional, diseñado para Carlos Andres Martinez
