---
title: Tema 2 - Lenguajes de Marcado
---

## 1. Introducción

<span style="background-color: #8e44ad; border-radius: 8px; padding: 4px; color: white;">Los lenguajes de marcado son sistemas de codificación utilizados para estructurar y presentar información. Son fundamentales en la informática y el desarrollo web, permitiendo definir la estructura de documentos y datos.</span>

## 2. Origen de los lenguajes de marcado generales: SGML y XML

### SGML (Standard Generalized Markup Language)

<span style="border: 2px solid #e74c3c; border-radius: 8px; padding: 4px; color: white;">SGML (Standard Generalized Markup Language)</span>

- **Historia**: Creado en la década de 1980, SGML es un estándar para definir lenguajes de marcado.
- **Propósito**: Facilitar la gestión y el intercambio de información compleja.
- **Ejemplo de SGML**:
  ```sgml
  <!DOCTYPE doc [
  <!ELEMENT doc (title, body)>
  <!ELEMENT title (#PCDATA)>
  <!ELEMENT body (#PCDATA)>
  ]>
  <doc>
    <title>Ejemplo de SGML</title>
    <body>Este es un cuerpo de SGML.</body>
  </doc>
  ```

### XML (eXtensible Markup Language)

<span style="border: 2px solid #e74c3c; border-radius: 8px; padding: 4px; color: white;">XML (eXtensible Markup Language)</span>

- **Historia**: XML fue desarrollado en la década de 1990 como una simplificación de SGML.
- **Propósito**: Facilitar la interoperabilidad y el intercambio de datos en la web.
- **Ejemplo de XML**:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <documento>
    <titulo>Ejemplo de XML</titulo>
    <cuerpo>Este es un cuerpo de XML.</cuerpo>
  </documento>
  ```

## 3. Características generales de los lenguajes de marcado

### Sintaxis y estructura

- <span style="border: 2px solid #e74c3c; border-radius: 8px; padding: 4px; color: white;">**Etiquetas y atributos**</span>: Definen los elementos y sus propiedades.
  ```xml
  <persona nombre="Juan" edad="30">
    <direccion>123 Calle Falsa</direccion>
  </persona>
  ```
- <span style="border: 2px solid #e74c3c; border-radius: 8px; padding: 4px; color: white;">**Elementos anidados**</span>: Permiten estructurar la información jerárquicamente.
  ```xml
  <libro>
    <titulo>XML Simplificado</titulo>
    <autor>Juan Perez</autor>
  </libro>
  ```

### Portabilidad y compatibilidad

- <span style="background-color: #f1c40f; border-radius: 8px; padding: 4px; color: black;">**Interoperabilidad entre sistemas**</span>: XML se puede usar en diferentes plataformas y aplicaciones.
- <span style="background-color: #f1c40f; border-radius: 8px; padding: 4px; color: black;">**Estándares y validaciones**</span>: Aseguran la consistencia y precisión de los datos.

## 4. Estructura general de un documento con lenguaje de marcado

### Componentes básicos

- <span style="border: 2px solid #3498db; border-radius: 8px; padding: 4px; color: white;">**Declaración**</span>: Indica la versión y codificación del documento.
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  ```
- <span style="border: 2px solid #3498db; border-radius: 8px; padding: 4px; color: white;">**Elementos raíz**</span>: El elemento principal que contiene todos los demás elementos.
  ```xml
  <libro>
    <!-- Contenido del libro -->
  </libro>
  ```
- <span style="border: 2px solid #3498db; border-radius: 8px; padding: 4px; color: white;">**Elementos y subelementos**</span>: Componentes que estructuran la información.
  ```xml
  <libro>
    <titulo>XML Avanzado</titulo>
    <autor>Maria Lopez</autor>
  </libro>
  ```

### Buenas prácticas de estructuración

- **Indentación y legibilidad**: Facilita la lectura y el mantenimiento del código.
- **Comentarios y documentación interna**: Ayuda a comprender la estructura y el propósito del código.
  ```xml
  <!-- Este es un comentario -->
  ```

## 5. Documentos válidos y bien formados. Esquemas

### Definición de documentos válidos

- <span style="border: 2px solid #2ecc71; border-radius: 8px; padding: 4px; color: white;">**Validación contra esquemas**</span>: Asegura que el documento cumple con una estructura específica.

### Documentos bien formados

- <span style="border: 2px solid #2ecc71; border-radius: 8px; padding: 4px; color: white;">**Reglas de formación correcta**</span>: Cada etiqueta debe cerrarse adecuadamente y debe haber un único elemento raíz.
  ```xml
  <noticia>
    <titulo>Noticias de hoy</titulo>
    <contenido>El contenido de la noticia va aquí.</contenido>
  </noticia>
  ```

### Tipos de esquemas

- **DTD (Document Type Definition)**: Define la estructura de un documento XML.
  ```xml
  <!DOCTYPE noticia [
  <!ELEMENT noticia (titulo, contenido)>
  <!ELEMENT titulo (#PCDATA)>
  <!ELEMENT contenido (#PCDATA)>
  ]>
  ```
- **XSD (XML Schema Definition)**: Define la estructura y los tipos de datos de un documento XML.
  ```xml
  <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="noticia">
      <xs:complexType>
        <xs:sequence>
          <xs:element name="titulo" type="xs:string"/>
          <xs:element name="contenido" type="xs:string"/>
        </xs:sequence>
      </xs:complexType>
    </xs:element>
  </xs:schema>
  ```

## 6. Resumen

Repaso de los puntos clave:

- <span style="border: 2px solid #9b59b6; border-radius: 8px; padding: 4px; color: white;">**Importancia de los lenguajes de marcado**</span>: Facilitan la estructuración y el intercambio de información.
- <span style="border: 2px solid #9b59b6; border-radius: 8px; padding: 4px; color: white;">**Evolución y características de SGML y XML**</span>: XML es una simplificación de SGML que ha mejorado la interoperabilidad.
- <span style="border: 2px solid #9b59b6; border-radius: 8px; padding: 4px; color: white;">**Elementos esenciales de un documento bien estructurado**</span>: Declaración, elementos raíz, y subelementos.
- <span style="border: 2px solid #9b59b6; border-radius: 8px; padding: 4px; color: white;">**Validación y conformidad con esquemas**</span>: Asegura que los documentos cumplen con una estructura y reglas específicas.

[>> Tema 3: Lenguajes de marcado para presentación de pagainas Web](../modulo1/tema3#1-introducción/).

##
