# API Catálogo de Productos

API REST desarrollada con NestJS y MongoDB para gestionar un catálogo de productos con autenticación JWT.

## 🚀 Características

- **CRUD completo** para productos
- **Autenticación JWT** con registro e inicio de sesión
- **Validaciones robustas** con class-validator
- **Documentación automática** con Swagger/OpenAPI
- **Paginación y filtros** en listado de productos
- **Búsqueda** por nombre y descripción
- **Gestión de categorías**
- **Código limpio y bien estructurado**

## 🛠️ Tecnologías

- **NestJS** - Framework de Node.js
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticación con tokens
- **Swagger** - Documentación de API
- **TypeScript** - Tipado estático
- **Class-validator** - Validación de datos

## 📁 Estructura del Proyecto

```
src/
├── main.ts                    # Punto de entrada
├── app.module.ts             # Módulo principal
├── config/                   # Configuraciones
├── auth/                     # Autenticación JWT
├── users/                    # Gestión de usuarios
├── products/                 # CRUD de productos
└── scripts/                  # Scripts auxiliares
```

## 🔧 Instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd producto-catalog-api
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
# Editar .env con tus configuraciones
```

4. **Iniciar MongoDB**
```bash
# Con Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest

# O instalar MongoDB localmente
```

5. **Poblar base de datos (opcional)**
```bash
npm run seed
```

6. **Ejecutar la aplicación**
```bash
# Desarrollo
npm run start:dev

# Producción
npm run build
npm run start:prod
```

## 📖 Documentación de la API

Una vez ejecutando la aplicación, visita:
- **Swagger UI**: http://localhost:3000/api/docs
- **JSON Schema**: http://localhost:3000/api/docs-json

## 🔐 Autenticación

### Registro de Usuario
```bash
POST /auth/register
Content-Type: application/json

{
  "email": "usuario@example.com",
  "password": "password123",
  "nombre": "Juan Pérez"
}
```

### Inicio de Sesión
```bash
POST /auth/login
Content-Type: application/json

{
  "email": "usuario@example.com",
  "password": "password123"
}
```

### Usar Token
```bash
Authorization: Bearer <tu-jwt-token>
```

## 📦 Endpoints de Productos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/products` | Listar productos (con paginación y filtros) |
| GET | `/products/:id` | Obtener producto por ID |
| POST | `/products` | Crear nuevo producto |
| PATCH | `/products/:id` | Actualizar producto |
| DELETE | `/products/:id` | Eliminar producto |
| GET | `/products/categories` | Obtener categorías disponibles |

### Ejemplos de Uso

**Crear Producto:**
```bash
POST /products
Authorization: Bearer <token>
Content-Type: application/json

{
  "nombre": "iPhone 15 Pro",
  "descripcion": "Smartphone Apple última generación",
  "precio": 1199.99,
  "categoria": "Electrónicos"
}
```

**Listar con Filtros:**
```bash
GET /products?page=1&limit=10&categoria=Electrónicos&search=iPhone
```

## ✅ Validaciones Implementadas

### Productos
- **nombre**: Requerido, máximo 100 caracteres
- **descripcion**: Opcional, máximo 500 caracteres
- **precio**: Requerido, debe ser mayor que 0, máximo 2 decimales
- **categoria**: Requerido, máximo 50 caracteres

### Usuarios
- **email**: Formato de email válido, único
- **password**: Mínimo 6 caracteres
- **nombre**: Máximo 100 caracteres

## 🔒 Seguridad

- **Hash de contraseñas** con bcrypt (12 rounds)
- **Tokens JWT** con expiración de 1 hora
- **Validación de entrada** en todos los endpoints
- **Guards de autenticación** en rutas protegidas
- **Sanitización de datos** automática

## 🧪 Testing

```bash
# Tests unitarios
npm run test

# Tests con cobertura
npm run test:cov

# Tests e2e
npm run test:e2e
```

## 🐳 Docker (Opcional)

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:prod"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - MONGODB_URI=mongodb://mongo:27017/productos_db
    depends_on:
      - mongo

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

## 📝 Variables de Entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `MONGODB_URI` | URL de conexión a MongoDB | `mongodb://localhost:27017/productos_db` |
| `JWT_SECRET` | Clave secreta para JWT | (cambiar en producción) |
| `NODE_ENV` | Entorno de ejecución | `development` |
| `PORT` | Puerto del servidor | `3000` |

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🎯 Próximas Mejoras

- [ ] Tests unitarios y e2e
- [ ] Rate limiting
- [ ] Logs estructurados
- [ ] Caching con Redis
- [ ] Upload de imágenes
- [ ] Notificaciones en tiempo real
- [ ] Métricas y monitoreo

## 👨‍💻 Autor

Desarrollado como prueba técnica de Full Stack Developer.