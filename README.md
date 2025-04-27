# 🍕 Pizza App - Gestión de Pizzas con React y Vite

## 📌 Descripción

Este proyecto es una aplicación de demostración construida con **React** y **Vite**, enfocada en mostrar el uso de **componentes**, **estados** y **props**. Simula un sistema de gestión de pizzas, donde puedes ver una lista de pizzas y agregar nuevas a través de un formulario modal. Los datos de las pizzas se simulan a través de un archivo **`db.js`** que se importa en el proyecto.

## 🌍 Puedes ver la aplicación en el siguiente enlace
👉 [Ver la aplicación en línea](https://pizza-react-05b3b2.netlify.app/)

## 🛠️ Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para la construcción de interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para proyectos modernos de frontend.
- **Bootstrap**: Framework CSS para la maquetación y estilos.
- **JavaScript (ES6+)**: Lenguaje de programación utilizado.
- **CSS**: Estilos utilizados para la maquetación.


## 🔧 Instalación

1. **Clona este repositorio**:
   ```bash
   https://github.com/JeffersonD-art/ComponentesFrontend-React-GA7-220501096-AA4-EV03.git
   ```

2. **Instala las dependencias**:
   ```bash
   cd ComponentesFrontend-React-GA7-220501096-AA4-EV03
   pnpm install
   ```

3. **Inicia la aplicación**:
   ```bash
   pnpm run dev
   ```

4. La aplicación se abrirá en `http://localhost:5173` por defecto.

## ⚙️ Funcionalidades

- **Lista de Pizzas**: Muestra una lista de pizzas disponibles con su nombre, imagen, descripción y precio.
- **Agregar Pizza**: Un modal permite agregar nuevas pizzas a la lista. Al llenar el formulario con el nombre, imagen, descripción y precio de la pizza, la nueva pizza se agrega a la lista.
- **Simulación de Datos**: Los datos de las pizzas se simulan a través de un archivo **`db.js`**, que se importa en el proyecto.
  
### Modal para agregar pizza
- El formulario se activa al hacer clic en el botón "Agregar Pizza".
- Los datos ingresados en el modal se almacenan en el estado del componente y se actualiza la lista de pizzas al enviar el formulario.

## 🧩 Estructura de `db.js`

El archivo **`db.js`** contiene un array simulado de pizzas que se importa en el proyecto. Aquí un ejemplo de cómo se ve la estructura de los datos:

```js
const pizzas = [
  {
    id: 1,
    name: 'Margherita',
    image: 'pizzas/pizzas-1-310x260.png',
    description: 'Clásica pizza italiana con salsa de tomate, mozzarella fresca y hojas de albahaca.',
    price: 149,
  },
  {
    id: 2,
    name: 'Pepperoni',
    image: 'pizzas/pizzas-2-310x260.png',
    description: 'Deliciosa pizza cubierta de abundantes rodajas de pepperoni crujiente y queso derretido.',
    price: 179,
  },
  // Otras pizzas
];

export default pizzas;
```

## 👨‍💻 Autor

**Jefferson David Cano**
