# Sistema de Gestión de Ventas, Clientes y Productos de una Farmacia

## Descripción del Sistema

Este sistema permite la gestión integral de una farmacia, incluyendo ventas, clientes y productos. Está desarrollado en **React** y **TypeScript**, y está diseñado para:

- Registrar operaciones de ventas.
- Calcular automáticamente costos e impuestos.
- Consultar históricos de ventas.
- Agilizar los procesos de búsqueda, listado y guardado de datos.

El sistema está pensado para ser fácil de usar, con una interfaz intuitiva, componentes reutilizables y separación de responsabilidades según distintos roles de usuario.

## Tabla de Contenidos

- [Características Principales](#características-principales)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso del Sistema](#uso-del-sistema)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características Principales

- Crear, editar y eliminar clientes y productos.
- Registrar ventas con cálculo automático de totales e impuestos.
- Visualizar y buscar información histórica de manera eficiente.
- Interfaz responsiva y adaptada a distintos dispositivos.
- Listados y reportes para análisis (opcional según implementación).

## Tecnologías Utilizadas

- **Frontend:** React, TypeScript, SCSS
- **Gestión de Estado:** useState, useContext o Redux
- **Control de Versiones:** Git

## Requisitos

Antes de instalar y ejecutar el sistema, asegúrate de tener:

- Node.js >= 18.x
- npm o yarn
- Git
- (Opcional) Base de datos si tu proyecto usa backend

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/noeYF/JS_Avanzado.git
cd JS_Avanzado
npm install
npm start
```

## Uso del Sistema

1. Abre tu navegador en http://localhost:3000 (o el puerto que indique la consola al iniciar)
2. Ingresa con tu cuenta; si no tienes una, crea una nueva con el rol correspondiente.
3. Navega entre las secciones de Clientes, Productos y Ventas.
4. Usa las funcionalidades de búsqueda, listado y registro de datos según tu rol.

## Estructura-del-proyecto

/JS_Avanzado
│
├── /db
├── /public
├── /src
│ ├── /assets # Recursos como imágenes o iconos
│ ├── /components # Componentes React reutilizables
│ ├── /hook # Custom hooks
│ ├── /layouts # Layouts del sistema
│ ├── /models # Interfaces y tipos
│ ├── /pages # Páginas principales
│ ├── /services # Servicios de API o lógica de negocio
│ ├── /styles # Archivos SCSS o CSS
│ ├── /utils # Funciones auxiliares
│ ├── App.tsx
│ └── index.tsx
├── package.json
├── README.md
└── tsconfig.json

## Contribuciones

1. Jair Alexander Porras Palpa
2. Acosta Ticona Yazid Juan
3. Mayta Orozco Carlos Andres
4. Yallico Flores Noe Benjamin
5. Diego Martin Torres Mamani

## Licencia

Este proyecto es un **trabajo universitario** realizado por los estudiantes indicados en la sección de contribuciones, con fines **académicos y educativos**.  
No está destinado a uso comercial. Puedes usarlo y estudiarlo, pero **no puedes venderlo ni distribuirlo sin permiso de los autores**.
