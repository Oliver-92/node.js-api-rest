# Entrega-final - API de Productos

> Proyecto de ejemplo de una API REST básica con autenticación JWT y almacenamiento en Firebase (Firestore).

## Índice

- Descripción
- Estructura del proyecto
- Requisitos previos
- Instalación y ejecución
- Variables de entorno
- Endpoints disponibles
- Ejemplos de uso (curl)

## Descripción

API simple que expone endpoints para gestionar productos y autenticación mediante token JWT. Los datos de producto se almacenan en Firestore (Firebase). Este proyecto está escrito en Node.js con Express (ES Modules) y utiliza JWT para autenticación.

## Estructura del proyecto

- `index.js` - Punto de entrada principal (configuración de Express, middleware y rutas).
- `package.json` - Dependencias y scripts.
- `src/`
  - `controllers/` - Lógica de controladores para rutas (auth y products).
  - `data/` - Configuración de Firebase (`data.js`) y generación de token (`tokentest.js`).
  - `middleware/` - Autenticación basada en JWT.
  - `models/` - Acceso a Firestore (operaciones CRUD para `products`).
  - `routes/` - Rutas de la API (auth y products).
  - `services/` - Intermediarios entre controladores y modelos (lógica de negocio).

## Requisitos previos

- Node.js v16+ (preferible v18+)
- npm (incluido con Node)
- Cuenta y proyecto Firebase con Firestore configurado

## Instalación

```powershell
cd "Directorio del proyecto"
npm install
```

## Variables de entorno

Crea un archivo `.env` en la raiz del proyecto. El proyecto espera las siguientes variables:

- `FIREBASE_API_KEY` - API Key de Firebase
- `FIREBASE_AUTH_DOMAIN` - Dominio de autenticación Firebase
- `FIREBASE_STORAGE_BUCKET` - Storage bucket
- `FIREBASE_APP_ID` - Firebase app id
- `JWT_SECRET_KEY` - Clave secreta para firmar tokens JWT

Ejemplo `.env`:

```dotenv
FIREBASE_API_KEY=xxxxxxxxx
FIREBASE_AUTH_DOMAIN=project.firebaseapp.com
FIREBASE_STORAGE_BUCKET=project.appspot.com
FIREBASE_APP_ID=1:xxxxx:web:xxxx
JWT_SECRET_KEY=mi_super_secreto
```


## Script útil

- `npm start` — Ejecuta el servidor con `node index.js`

## Endpoints disponibles

Base path: `/api`

Autenticación:
- POST `/api/login`  
  - Body: `{ "email": "test@gmail.com", "password": "123456" }`  
  - Respuesta: `{ "token": "<JWT>" }`  
  - Genera un JWT válido por 1 hora. Rutas de producto están protegidas por JWT.

Productos (protegidos por `Authorization: Bearer <token>`):
- GET `/api/products` — Obtener todos los productos
- GET `/api/products/:id` — Obtener producto por `id`
- GET `/api/products/category/:category` — Filtrar por `category`
- POST `/api/products/create` — Crear producto  
  - Body: `{ "name": "Nombre", "price": 100, "category": "categoría", ... }`
- PUT `/api/products/:id` — Actualizar producto por `id`  
  - Body: campos a actualizar
- DELETE `/api/products/:id` — Eliminar producto por `id`

## Ejemplos (curl)

Login:

```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@gmail.com","password":"123456"}'
```

Crear producto (ejemplo):

```bash
curl -X POST http://localhost:3000/api/products/create \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <JWT>" \
  -d '{"title":"Nuevo Producto","price":99.99,"category":"general"}'
```
