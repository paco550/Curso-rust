---
title: Tema 6 - Navegadores web
---

## 1. Introducción

<span style="background-color: #8e44ad; border-radius: 8px; padding: 4px; color: white;">Introducción a los navegadores web, su importancia y evolución a lo largo del tiempo.</span>

## 2. Arquitectura de un navegador

<span style="border: 2px solid #e74c3c; border-radius: 8px; padding: 4px; color: white;">Descripción de los componentes internos de un navegador y cómo funcionan juntos.</span>

- **Componentes principales**: Interfaz de usuario, motor de renderizado, motor de JavaScript, red, almacenamiento de datos.
  ```plaintext
  Interfaz de usuario <-> Motor de renderizado <-> Motor de JavaScript
                    <-> Red <-> Almacenamiento de datos
  ```

## 3. Navegadores de uso común. Comparativa

<span style="border: 2px solid #3498db; border-radius: 8px; padding: 4px; color: white;">Comparación entre los navegadores web más utilizados, destacando sus características y diferencias.</span>

- **Navegadores populares**: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera.
  ```plaintext
  Comparativa:
  - Chrome: Rapidez y extensiones.
  - Firefox: Seguridad y privacidad.
  - Edge: Integración con Windows.
  - Safari: Optimizaciones para macOS.
  - Opera: Funcionalidades adicionales como VPN.
  ```

## 4. Seguridad en navegadores

<span style="border: 2px solid #2ecc71; border-radius: 8px; padding: 4px; color: white;">Medidas de seguridad implementadas en los navegadores para proteger a los usuarios y sus datos.</span>

- **Características de seguridad**: Navegación segura, bloqueo de contenido malicioso, gestión de contraseñas.
  ```plaintext
  - Navegación segura: Protección contra sitios web maliciosos.
  - Bloqueo de contenido: Prevención de scripts peligrosos.
  - Gestión de contraseñas: Almacenamiento seguro de credenciales.
  ```

## 5. Integración de aplicaciones en navegadores. Adaptadores (plugins)

<span style="border: 2px solid #f1c40f; border-radius: 8px; padding: 4px; color: black;">Cómo se integran las aplicaciones en los navegadores mediante plugins y otras tecnologías.</span>

- **Plugins y extensiones**: Ampliación de funcionalidades del navegador.
  ```javascript
  // Ejemplo de extensión simple en JavaScript
  chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({ url: "https://www.example.com" });
  });
  ```

## 6. Resumen

<span style="border: 2px solid #e74c3c; border-radius: 8px; padding: 4px; color: white;">Recapitulación de los puntos clave del capítulo.</span>

- **Importancia y evolución de los navegadores web**.
- **Arquitectura interna de los navegadores**.
- **Comparativa de navegadores populares**.
- **Medidas de seguridad en los navegadores**.
- **Integración de aplicaciones mediante plugins**.

## 7. Ejercicios de repaso y autoevaluación

<span style="background-color: #8e44ad; border-radius: 8px; padding: 4px; color: white;">Ejercicios prácticos y preguntas para autoevaluar la comprensión del capítulo.</span>

- **Ejercicio 1**: Describir la arquitectura de un navegador web.
- **Ejercicio 2**: Comparar dos navegadores web en términos de velocidad y seguridad.
- **Pregunta 1**: ¿Qué medidas de seguridad implementan los navegadores para proteger a los usuarios?

##

</br>
