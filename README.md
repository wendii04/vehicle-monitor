# ¿Vehicle Monitor Dashboard 🚗

## Sobre el proyecto

Este proyecto fue desarrollado como solución para una prueba técnica de Design Engineer (UX/UI).

La idea era construir una aplicación que permitiera monitorear vehículos desde una interfaz simple, clara y fácil de usar. Más allá de mostrar datos en una pantalla, el objetivo fue diseñar una experiencia que funcionara bien en situaciones reales de monitoreo, donde la rapidez para encontrar información y la legibilidad son fundamentales.

La aplicación permite seleccionar vehículos, visualizar su ubicación en un mapa y consultar información relevante como estado de conexión, velocidad y última actualización.

----------------------------------------------------------

## ¿Qué incluye la aplicación?

### Lista de vehículos

El usuario puede seleccionar un vehículo desde una lista lateral para consultar su información.

La selección se actualiza inmediatamente en el resto de la interfaz, manteniendo siempre visible cuál es el vehículo activo.

### Mapa interactivo

La ubicación del vehículo seleccionado se muestra en un mapa utilizando Leaflet.

Cada vez que cambia el vehículo, el marcador y la información asociada se actualizan automáticamente.

### Tarjeta de estado

La información principal del vehículo se presenta en una tarjeta diseñada para facilitar la lectura rápida.

Actualmente muestra:

* Nombre del vehículo.
* Estado de conexión.
* Velocidad.
* Última actualización.

---------------------------------------------------------

## Modo oscuro

Pensando en usuarios que podrían pasar largas jornadas frente a la herramienta, se implementó un sistema de tema claro y oscuro.

El objetivo no fue únicamente cambiar colores, sino mantener una buena legibilidad y contraste en ambos modos.

---------------------------------------------------------

## Estados de carga

Uno de los aspectos más importantes de la prueba era el manejo de estados de transición.

Para evitar pantallas vacías o cambios bruscos en la interfaz, se implementó un Skeleton Loading que mantiene la estructura visual mientras la aplicación carga la información.

Esto ayuda a que la experiencia se sienta más fluida y profesional.

----------------------------------------------------------

## Manejo de errores

También se implementó un Error State dedicado.

Si ocurre un problema durante la carga de información, el usuario recibe un mensaje claro junto con una acción para reintentar el proceso.

La intención fue evitar situaciones donde la aplicación simplemente quede en blanco o muestre errores técnicos difíciles de entender.

----------------------------------------------------------

## Accesibilidad

Se realizaron varias mejoras para que la aplicación sea más accesible:

* Navegación mediante teclado.
* Indicadores visuales de foco.
* Uso de atributos `aria-label`.
* Uso de regiones `aria-live`.
* Estructura semántica para la información del vehículo.

La idea fue asegurar que la interfaz pueda ser utilizada por más personas y cumplir buenas prácticas de accesibilidad.

---------------------------------------------------------

## Tecnologías utilizadas

* React
* Vite
* Tailwind CSS
* Leaflet
* React Leaflet
* Git y GitHub
* Vercel

----------------------------------------------------------

## Cómo ejecutar el proyecto

Clonar el repositorio:

```bash
git clone https://github.com/wendii04/vehicle-monitor.git
```

Ingresar al directorio:

```bash
cd vehicle-monitor
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

Generar versión de producción:

```bash
npm run build
```

----------------------------------------------------------

## Decisiones de diseño

Durante el desarrollo intenté priorizar tres aspectos:

**Claridad visual:** que la información importante fuera fácil de encontrar.

**Resiliencia:** que la aplicación respondiera correctamente ante tiempos de carga o errores.

**Accesibilidad:** que los componentes fueran navegables y comprensibles para diferentes tipos de usuarios.

----------------------------------------------------------

## Próximos pasos

Como mejora futura, la aplicación está preparada para integrar datos reales desde la API de Traccar, permitiendo actualizar la ubicación y el estado de los vehículos en tiempo real.

También sería interesante incorporar animaciones suaves para el movimiento del marcador, indicadores más avanzados de estado y métricas adicionales para el monitoreo de flotas.

----------------------------------------------------------

## Autora

Wendy Puello

Prueba Técnica — Design Engineer (UX/UI)
