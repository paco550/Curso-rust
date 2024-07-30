---
title: Tema 3 - HTML y XHTML
---

## 1. Introducción

<span style="background-color: #8e44ad; border-radius: 8px; padding: 4px; color: white;">HTML (HyperText Markup Language) y XHTML (eXtensible HyperText Markup Language) son lenguajes de marcado utilizados para crear y estructurar páginas web.</span>

## 2. Historia de HTML y XHTML. Diferencias entre versiones

<span style="border: 2px solid #e74c3c; border-radius: 8px; padding: 4px; color: white;">La evolución de HTML desde su creación en 1991 hasta las versiones más recientes, y cómo XHTML se deriva de HTML y XML para mejorar la estructura y la compatibilidad.</span>

- **HTML 1.0**: Introducción del primer estándar.
- **HTML 2.0 a HTML 4.01**: Mejoras sucesivas en el lenguaje.
- **XHTML 1.0**: Transición a un estándar basado en XML.
- **HTML5**: Versión actual con soporte multimedia y gráficos mejorados.

## 3. Estructura de un documento

<span style="border: 2px solid #e74c3c; border-radius: 8px; padding: 4px; color: white;">La estructura básica de un documento HTML o XHTML, incluyendo las etiquetas esenciales.</span>

- **Declaración DOCTYPE**: Indica la versión del lenguaje.
  ```html
  <!DOCTYPE html>
  ```
- **Elemento `<html>`**: Raíz del documento.
  ```html
  <html>
    <!-- Contenido del documento -->
  </html>
  ```
- **Elemento `<head>`**: Contiene metadatos y enlaces a recursos externos.
  ```html
  <head>
    <title>Título del Documento</title>
  </head>
  ```
- **Elemento `<body>`**: Contiene el contenido visible de la página.
  ```html
  <body>
    <h1>Encabezado</h1>
    <p>Párrafo de texto.</p>
  </body>
  ```

## 4. Color

<span style="border: 2px solid #3498db; border-radius: 8px; padding: 4px; color: white;">Uso de colores en HTML para el diseño visual.</span>

- **Atributo `style`**: Define estilos en línea.
  ```html
  <p style="color: red;">Texto en rojo.</p>
  ```
- **Hojas de estilo CSS**: Define estilos para múltiples elementos.
  ```html
  <style>
    body {
      background-color: #f0f0f0;
    }
  </style>
  ```

## 5. Texto

<span style="border: 2px solid #3498db; border-radius: 8px; padding: 4px; color: white;">Formateo y presentación de texto en HTML.</span>

- **Encabezados**: De `<h1>` a `<h6>` para títulos y subtítulos.
  ```html
  <h1>Encabezado Principal</h1>
  ```
- **Párrafos**: Elemento `<p>` para bloques de texto.
  ```html
  <p>Este es un párrafo.</p>
  ```
- **Formato**: Uso de etiquetas como `<strong>`, `<em>`, `<br>` y `<span>`.

## 6. Enlaces de hipertexto

<span style="border: 2px solid #2ecc71; border-radius: 8px; padding: 4px; color: white;">Creación de enlaces a otras páginas o recursos.</span>

- **Elemento `<a>`**: Definición de un enlace.
  ```html
  <a href="https://www.example.com">Enlace a Example</a>
  ```

## 7. Imágenes

<span style="border: 2px solid #2ecc71; border-radius: 8px; padding: 4px; color: white;">Incorporación de imágenes en una página web.</span>

- **Elemento `<img>`**: Inserción de imágenes.
  ```html
  <img src="imagen.jpg" alt="Descripción de la imagen" />
  ```

## 8. Listas

<span style="border: 2px solid #f1c40f; border-radius: 8px; padding: 4px;">Creación de listas ordenadas y no ordenadas.</span>

- **Listas no ordenadas**: Uso de `<ul>` y `<li>`.
  ```html
  <ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
  </ul>
  ```
- **Listas ordenadas**: Uso de `<ol>` y `<li>`.
  ```html
  <ol>
    <li>Primero</li>
    <li>Segundo</li>
  </ol>
  ```

## 9. Tablas

<span style="border: 2px solid #f1c40f; border-radius: 8px; padding: 4px;">Definición y uso de tablas para estructurar datos.</span>

- **Elementos de tabla**: `<table>`, `<tr>`, `<th>`, `<td>`.
  ```html
  <table>
    <tr>
      <th>Encabezado 1</th>
      <th>Encabezado 2</th>
    </tr>
    <tr>
      <td>Dato 1</td>
      <td>Dato 2</td>
    </tr>
  </table>
  ```

## 10. Marcos (frames)

<span style="border: 2px solid #9b59b6; border-radius: 8px; padding: 4px; color: white;">Uso de marcos para dividir la pantalla en varias secciones (obsoleto en HTML5).</span>

- **Elemento `<iframe>`**: Incrustación de un documento dentro de otro.
  ```html
  <iframe src="pagina.html" width="300" height="200"></iframe>
  ```

## 11. Formularios

<span style="border: 2px solid #9b59b6; border-radius: 8px; padding: 4px; color: white;">Creación de formularios para la entrada de datos del usuario.</span>

- **Elementos de formulario**: `<form>`, `<input>`, `<label>`, `<textarea>`, `<button>`.
  ```html
  <form action="/submit" method="post">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" />
    <button type="submit">Enviar</button>
  </form>
  ```

## 12. Elementos específicos para tecnologías móviles

<span style="border: 2px solid #e67e22; border-radius: 8px; padding: 4px; color: white;">Optimización de páginas web para dispositivos móviles.</span>

- **Meta viewport**: Configuración de la vista en dispositivos móviles.
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```

## 13. Elementos en desuso (deprecated)

<span style="border: 2px solid #e67e22; border-radius: 8px; padding: 4px; color: white;">Elementos obsoletos que ya no se recomiendan para su uso en HTML moderno.</span>

- **Ejemplos**: `<font>`, `<center>`, `<marquee>`.

## 14. Resumen

<span style="border: 2px solid #e74c3c; border-radius: 8px; padding: 4px; color: white;">Recapitulación de los puntos clave discutidos en el tema.</span>

- **Evolución y diferencias de HTML y XHTML**.
- **Estructura básica y componentes de un documento HTML/XHTML**.
- **Uso de colores, texto, enlaces, imágenes, listas, tablas, marcos, formularios, y optimización para móviles**.
- **Conocimiento de elementos obsoletos y mejores prácticas actuales**.

[ >> Tema 4 - Hojas de Estilo](../modulo1/tema4#elementos-y-estructura-de-una-hoja-de-estilos/).

##
