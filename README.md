# Technical Test - Multi-Project Repository

Este repositorio contiene 3 proyectos independientes para una prueba técnica:

## 📁 Estructura del Proyecto

```
tecnical-test/
├── tt-angular/          # Frontend Angular
├── tt-nextjs/           # Frontend Next.js
├── tt-node-server/      # Backend Node.js
└── README.md
```

## 🚀 Proyectos

### 1. Angular Frontend (`tt-angular`)
- **Framework**: Angular 18.1.0
- **Styling**: TailwindCSS 3.4.3
- **Testing**: Jasmine + Karma
- **Puerto por defecto**: 4200

**Scripts disponibles:**
```bash
cd tt-angular
pnpm start        # Inicia el servidor de desarrollo
pnpm run build    # Construye la aplicación para producción
pnpm test         # Ejecuta las pruebas unitarias
```

### 2. Next.js Frontend (`tt-nextjs`)
- **Framework**: Next.js 15.5.4 con Turbopack
- **React**: 19.1.0
- **Styling**: TailwindCSS 4.0
- **TypeScript**: Incluido
- **Puerto por defecto**: 3000

**Scripts disponibles:**
```bash
cd tt-nextjs
pnpm run dev      # Inicia el servidor de desarrollo con Turbopack
pnpm run build    # Construye la aplicación para producción
pnpm start        # Inicia la aplicación en modo producción
pnpm run lint     # Ejecuta ESLint
```

### 3. Node.js Server (`tt-node-server`)
- **Runtime**: Node.js con ES Modules
- **Framework**: Express 4.18.2
- **Base de datos**: MongoDB con Mongoose 8.18.3
- **Utilidades**: CORS, dotenv
- **Puerto por defecto**: Configurado en variables de entorno

**Scripts disponibles:**
```bash
cd tt-node-server
pnpm start        # Inicia el servidor en modo producción
pnpm run dev      # Inicia el servidor con nodemon (desarrollo)
pnpm run seed     # Ejecuta el script de semillas para la base de datos
```

## 📥 Clonar el Repositorio

Este repositorio usa **Git Submodules** para los proyectos Angular y Next.js. Para clonar todo el código correctamente:

### Opción 1: Clonar con submodules (recomendado)
```bash
git clone --recurse-submodules https://github.com/fernando24j/tecnical-test.git
```

### Opción 2: Si ya clonaste sin submodules
```bash
git clone https://github.com/fernando24j/tecnical-test.git
cd tecnical-test
git submodule init
git submodule update
```

## 🛠️ Instalación

Para instalar las dependencias de todos los proyectos:

```bash
# Angular
cd tt-angular && pnpm install

# Next.js
cd tt-nextjs && pnpm install

# Node.js Server
cd tt-node-server && pnpm install
```

## 🔧 Configuración

1. **Servidor Node.js**: Configura las variables de entorno en el archivo `.env`
2. **Base de datos**: Asegúrate de tener MongoDB ejecutándose
3. **Puertos**: Verifica que los puertos por defecto estén disponibles

## 📝 Notas

- Cada proyecto mantiene sus propias dependencias en sus respectivos `node_modules`
- Los archivos `.env` están incluidos en el repositorio para facilitar la configuración
- Todos los proyectos utilizan pnpm como package manager