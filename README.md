# 🌦️ Ionic Weather App

Aplicación del tiempo desarrollada con **Ionic** y **Angular v20**, siguiendo principios de **Atomic Design** y diseño estilo iOS.

## 📋 Requisitos Previos

Asegúrate de tener instalado:

- Node.js (v18+)
- Ionic CLI: `npm install -g @ionic/cli`

## 🚀 Instalación y Ejecución

1. **Clonar el repositorio**:

   ```bash
   git clone <url-del-repo>
   cd weather-app
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno**:
   - Abre `src/environments/environment.ts`.
   - Coloca tu API Key de OpenWeather en `openWeatherApiKey`.

4. **Ejecutar en Web**:

   ```bash
   ionic serve
   ```

5. **Ejecutar en Android**:
   ```bash
   ionic build
   npx cap add android
   npx cap run android
   ```

## 🏗️ Arquitectura y Diseño

### Atomic Design

La estructura de componentes se encuentra en `src/app/design`:

- **Atoms**: Iconos, textos simples (`weather-icon`, `app-text`).
- **Molecules**: Elementos compuestos (`daily-forecast-item`).
- **Organisms**: Bloques funcionales complejos (`current-weather`, `forecast-list`, `search-form`).

### Stack Tecnológico

- **Framework**: Ionic + Angular v20 (Standalone Components).
- **Estilos**: SCSS + Bootstrap Grid + Ionic Utilities.
- **Estado**: Angular Signal Store (`signal()`, `computed()`).
- **Datos**: OpenWeather API (Current + 5 Day Forecast).
- **Internacionalización**: `@ngx-translate` (Español/Inglés).
- **Geolocalización**: Capacitor Geolocation.

## 📱 Funcionalidades

- **Búsqueda por Ciudad**: Formulario reactivo con validación.
- **Geolocalización**: Detección automática de ubicación.
- **Predicción 5 Días**: Visualización detallada por tramos (API estándar 3h).
- **Multi-idioma**: Soporte inicial para ES/EN.

## 🎨 Notas de Diseño

El diseño imita la estética de iOS con fondo oscuro, tipografías limpias y alto contraste. Se han utilizado iconos de OpenWeather de alta resolución.
