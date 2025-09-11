# Comparación de Métodos de Fetch

Una aplicación Next.js que demuestra las diferencias entre dos enfoques para obtener datos en React: **useEffect tradicional** vs **SWR**.

![Demo](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/refs/heads/master/comparacion-swr-vs-usestate-useeffect-data-fetching.gif)

## 🚀 Características

- **Comparación visual** de dos métodos de fetch
- **useEffect + useState**: Control manual del estado
- **SWR**: Caché automático y revalidación inteligente
- **UI moderna** con paleta de colores ecológica
- **Responsive design** optimizado para móviles
- **Código limpio** con CSS separado de componentes

## 🛠️ Tecnologías

- **Next.js 14** - Framework de React
- **SWR** - Data fetching con caché
- **CSS puro** - Sin frameworks CSS
- **React Hooks** - useState, useEffect

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🎯 Uso

1. Ejecuta `npm run dev`
2. Abre [http://localhost:3000](http://localhost:3000)
3. Compara ambos métodos de fetch en tiempo real

## 📁 Estructura

```
src/
├── app/
│   ├── styles/globals.css  # Estilos globales
│   ├── layout.js           # Layout principal
│   └── page.js             # Página principal
└── components/
    ├── GetUser.js          # Componente useEffect
    └── GetUserSWR.js       # Componente SWR
```

## 🔍 Diferencias Clave

| useEffect       | SWR                  |
| --------------- | -------------------- |
| Control manual  | Caché automático     |
| Re-fetch manual | Revalidación en foco |
| Más código      | Menos boilerplate    |
| Sin caché       | Caché inteligente    |

## 🎨 Paleta de Colores

- **Verde**: `#2d5a27` (useEffect)
- **Marrón**: `#8b4513` (SWR)
- **Modo oscuro** compatible
