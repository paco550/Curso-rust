---
title: Tema 4 - Hojas de Estilo
---

## 1 Introducción

<span style="background-color: #8e44ad; border-radius: 8px; padding: 4px; color: white;">Las hojas de estilo (CSS) se utilizan para definir la presentación y el diseño de un documento HTML.</span>

## 2. Elementos y estructura de una hoja de estilos

<span style="border: 2px solid #e74c3c; border-radius: 8px; padding: 4px; color: white;">La estructura básica de una hoja de estilo, incluyendo selectores, propiedades y valores.</span>

- **Selectores**: Determinan a qué elementos se aplican los estilos.
  ```css
  p {
    color: blue;
  }
  ```
- **Propiedades y valores**: Definen los estilos específicos.
  ```css
  p {
    font-size: 16px;
    margin: 10px;
  }
  ```

## 3. Diseño de estilos para diferentes dispositivos

<span style="border: 2px solid #3498db; border-radius: 8px; padding: 4px; color: white;">Adaptación de los estilos para diferentes tamaños de pantalla y dispositivos.</span>

- **Media queries**: Permiten aplicar estilos específicos para distintos dispositivos.
  ```css
  @media (max-width: 600px) {
    body {
      background-color: lightblue;
    }
  }
  ```

## 4. Tipos de hojas de estilos: estáticas y dinámicas. Las pseudo-clases

<span style="border: 2px solid #2ecc71; border-radius: 8px; padding: 4px; color: white;">Tipos de hojas de estilo y el uso de pseudo-clases para aplicar estilos en estados específicos.</span>

- **Hojas de estilo estáticas**: Se aplican de manera constante.
  ```html
  <link rel="stylesheet" href="styles.css" />
  ```
- **Hojas de estilo dinámicas**: Cambian en función de la interacción del usuario.
- **Pseudo-clases**: Aplican estilos en estados específicos.
  ```css
  a:hover {
    color: red;
  }
  ```

## 5. Buenas prácticas en el uso de hojas de estilo

<span style="border: 2px solid #f1c40f; border-radius: 8px; padding: 4px; color: black;">Recomendaciones para escribir y mantener hojas de estilo efectivas y organizadas.</span>

- **Organización y modularidad**: Dividir estilos en archivos separados.
- **Uso de clases y IDs**: Aplicar estilos de manera específica.
  ```css
  .button {
    background-color: green;
  }
  ```
- **Consistencia y mantenibilidad**: Usar convenciones de nombres y comentarios.

## 6. Resumen

<span style="border: 2px solid #e74c3c; border-radius: 8px; padding: 4px; color: white;">Recapitulación de los puntos clave discutidos en el tema.</span>

- **Introducción a las hojas de estilo (CSS)**.
- **Estructura básica de una hoja de estilo**.
- **Diseño adaptativo para diferentes dispositivos**.
- **Tipos de hojas de estilo y uso de pseudo-clases**.
- **Buenas prácticas para escribir y mantener CSS**.

##

[>> Tema 5 - Arquitecturas de aplicaciones web](tema5#arquitecturas-de-aplicaciones-web/).

</br>

##
