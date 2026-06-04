# Vehicle Monitor Dashboard 🚗

## Sobre el proyecto

Este proyecto fue desarrollado como parte de una prueba técnica para el rol de Design Engineer (UX/UI).

El objetivo era crear una herramienta que permitiera monitorear vehículos de forma simple, clara e intuitiva. Más allá de mostrar información en pantalla, quise construir una experiencia que ayudara a encontrar rápidamente lo importante y que se sintiera fluida incluso en situaciones de monitoreo continuo.

La aplicación permite seleccionar vehículos, visualizar su ubicación en un mapa interactivo y consultar información relevante como su estado de conexión, velocidad y última actualización.

---

## ¿Qué incluye la aplicación?

### Lista de vehículos

El usuario puede seleccionar un vehículo desde una lista lateral para consultar su información.

La selección se actualiza inmediatamente en el resto de la interfaz, manteniendo siempre visible cuál es el vehículo activo.

### Mapa interactivo

La ubicación del vehículo seleccionado se muestra en un mapa utilizando Leaflet.

Cada vez que cambia el vehículo, el marcador y la información asociada se actualizan automáticamente para mantener la información sincronizada.

### Tarjeta de estado

La información principal del vehículo se presenta en una tarjeta diseñada para facilitar una lectura rápida y clara.

Actualmente muestra:

* Nombre del vehículo.
* Estado de conexión.
* Velocidad.
* Última actualización.

---

## Modo oscuro

Como este tipo de herramientas suelen utilizarse durante largos periodos de tiempo, incorporé un modo claro y oscuro para mejorar la comodidad visual y adaptarse a diferentes condiciones de uso.

El objetivo no fue únicamente cambiar colores, sino mantener una buena legibilidad, contraste y consistencia visual en ambos modos.

---

## Estados de carga

Uno de los aspectos que más cuidé fue la experiencia durante la carga de información.

En lugar de mostrar espacios vacíos o cambios bruscos en la interfaz, implementé un Skeleton Loading que mantiene la estructura visual mientras los datos se cargan.

Esto ayuda a que la experiencia se sienta más estable, fluida y profesional.

---

## Manejo de errores

También implementé un Error State dedicado para los escenarios donde la información no pueda cargarse correctamente.

En estos casos, el usuario recibe un mensaje claro acompañado de una acción para reintentar el proceso.

La intención fue evitar situaciones donde la aplicación simplemente quede en blanco o muestre errores difíciles de interpretar.

---

## Accesibilidad

La accesibilidad fue un aspecto importante durante el desarrollo.

Se incorporaron diferentes mejoras para facilitar la navegación y la interacción con la aplicación:

* Navegación mediante teclado.
* Indicadores visuales de foco.
* Uso de atributos `aria-label`.
* Uso de regiones `aria-live`.
* Estructura semántica para la información del vehículo.

La intención fue construir una interfaz que pudiera ser utilizada por más personas y que siguiera buenas prácticas de accesibilidad web.

---

## Tecnologías utilizadas

* React
* JavaScript (ES6+)
* Vite
* Tailwind CSS
* Leaflet
* React Leaflet
* Git y GitHub
* Vercel

---

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

---

## Decisiones de diseño

Durante el desarrollo intenté priorizar tres aspectos principales:

**Claridad visual:** que la información más importante fuera fácil de encontrar y entender.

**Resiliencia:** que la aplicación respondiera correctamente ante tiempos de carga, errores o escenarios inesperados.

**Accesibilidad:** que los componentes fueran navegables, comprensibles y utilizables por diferentes tipos de usuarios.

---

## Retos y aprendizajes

Uno de los mayores retos fue pensar la aplicación más allá de los datos y enfocarme en cómo debía comportarse en distintos escenarios.

Por eso dediqué especial atención a los estados de carga, error y selección de vehículos, buscando que la experiencia se mantuviera clara y consistente en todo momento.

También realicé una exploración inicial de integración con Traccar para trabajar con datos reales. Aunque la autenticación fue exitosa, el entorno de demostración presentó restricciones de autorización al consultar dispositivos desde el frontend.

Ante esta situación decidí mantener una capa de datos simulados para asegurar una experiencia estable y funcional durante la evaluación.

Este proceso me permitió reforzar la importancia de construir interfaces resilientes y preparadas para responder correctamente incluso cuando existen limitaciones externas.

---

## Próximos pasos

Como mejora futura, la aplicación está preparada para integrar datos reales desde la API de Traccar, permitiendo actualizar la ubicación y el estado de los vehículos en tiempo real.

También sería interesante incorporar animaciones suaves para el movimiento del marcador, indicadores más avanzados de estado, métricas adicionales para el monitoreo de flotas y una experiencia más completa basada en datos reales.

---

## Uso de Inteligencia Artificial

Durante el desarrollo utilicé herramientas de Inteligencia Artificial como apoyo para investigar alternativas técnicas, resolver dudas puntuales y acelerar algunas tareas de implementación.

La IA me ayudó especialmente en temas relacionados con React, Leaflet, accesibilidad, estados de carga, manejo de errores y exploración de la integración con Traccar.

Sin embargo, todas las decisiones relacionadas con diseño, experiencia de usuario, accesibilidad, estructura de la aplicación y validación final del código fueron tomadas y revisadas por mí.

La IA fue utilizada como una herramienta de apoyo dentro del proceso, no como un reemplazo del criterio de diseño ni de las decisiones técnicas del proyecto.

---

## Autora

Wendy Puello

Desarrollado como parte de la prueba técnica para el rol de Design Engineer (UX/UI).
