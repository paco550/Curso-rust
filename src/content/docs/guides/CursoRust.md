---
title: Curso Rust
description: Guia basica para aprender rust
---

# Curso Completo de Rust

## Índice del Curso

1. [Introducción al Curso](#introducción-al-curso)
2. [Instalación](#instalación)
3. [Tu Primer Hello World](#tu-primer-hello-world)
4. [Cargo: Gestor de Paquetes y Build System de Rust](#cargo-gestor-de-paquetes-y-build-system-de-rust)
5. [Selección del IDE](#selección-del-ide)
6. [Conceptos Fundamentales](#conceptos-fundamentales)
7. [Flujos de Control](#flujos-de-control)
8. [Collections](#collections)
9. [Concepto de Ownership en Rust](#concepto-de-ownership-en-rust)
10. [Smart Pointers: Mucho Más que Referencias](#smart-pointers-mucho-más-que-referencias)
11. [Manejo de Errores](#manejo-de-errores)
12. [Linters: Mejora tu Código](#linters-mejora-tu-código)
13. [Primera Aplicación Rust](#primera-aplicación-rust)
14. [Concurrencia y Paralelismo](#concurrencia-y-paralelismo)
15. [Programación Async](#programación-async)
16. [Segunda Aplicación Rust](#segunda-aplicación-rust)
17. [Construyendo una API de Twitter](#construyendo-una-api-de-twitter)
18. [WebAssembly: Construye Apps para la Web con Rust](#webassembly-construye-apps-para-la-web-con-rust)
19. [Contenido Adicional](#contenido-adicional)

## Introducción al Curso

**Objetivo del Curso:**
Este curso tiene como objetivo enseñarte Rust desde lo más básico hasta construir aplicaciones avanzadas. Rust es un lenguaje de programación de sistemas enfocado en la seguridad y el rendimiento.

## Instalación

**Instalación de Rust:**
Para instalar Rust, utiliza `rustup`, el instalador de Rust:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

**Después de instalar Rust, asegúrate de que está correctamente instalado:**

```bash
rustc --version
```

## Tu Primer Hello World

**Código de Ejemplo:**

```bash
fn main() {
    // Esta línea imprime "Hello, world!" en la consola
    println!("Hello, world!");
}
```

## Cargo: Gestor de Paquetes y Build System de Rust

**Iniciar un Proyecto con Cargo:**
Cargo es la herramienta de Rust para gestionar proyectos.

```bash
cargo new hello_cargo
cd hello_cargo
cargo build
cargo run
```

## Selección del IDE

**Configuración de Visual Studio Code para Rust:**

Instala la extensión "rust-analyzer" en VSCode.
Configura el debugger siguiendo la documentación oficial de VSCode y Rust <a href="https://code.visualstudio.com/docs/languages/rust" target="_blank">documentación oficial de VSCode y Rust</a>.

## Conceptos Fundamentales

**Variables, Inmutabilidad y Constantes:**

En Rust, las variables son inmutables por defecto, lo que significa que no puedes cambiar su valor una vez asignado. Si deseas que una variable sea mutable, debes usar la palabra clave mut. Además, Rust permite definir constantes con const, las cuales deben tener un tipo explícito y su valor no puede cambiar.

```bash
fn main() {
    let x = 5; // x es inmutable, no se puede cambiar su valor una vez asignado
    let mut y = 10; // y es mutable, se puede cambiar su valor más adelante
    const MAX_POINTS: u32 = 100_000; // constante, su valor no puede cambiar y se debe declarar con tipo
}
```

**Funciones**

Las funciones en Rust se definen con la palabra clave fn, seguida del nombre de la función y los parámetros. El tipo de retorno se especifica después de la flecha ->. En este ejemplo, suma es una función que toma dos enteros como parámetros y retorna su suma.

```bash
fn main() {
    println!("El resultado es: {}", suma(5, 3)); // llama a la función suma y muestra el resultado
}

fn suma(a: i32, b: i32) -> i32 {
    a + b // retorna la suma de a y b
}
```

**Structs**

Los structs en Rust permiten agrupar varios valores en una única estructura. En este ejemplo, Usuario es un struct con dos campos: nombre y edad. Luego, se crea una instancia de Usuario y se imprimen sus valores.

```bash
// Definición del struct Usuario
// Un struct es una colección de múltiples datos agrupados bajo un mismo nombre
struct Usuario {
    nombre: String, // campo nombre de tipo String
    edad: u32,      // campo edad de tipo u32 (entero sin signo de 32 bits)
}

fn main() {
    // Creación de una instancia del struct Usuario
    let usuario = Usuario {
        nombre: String::from("Alice"), // inicializa el campo nombre con el valor "Alice"
        edad: 30,                      // inicializa el campo edad con el valor 30
    };

    // Imprime los detalles del usuario en la consola
    println!("Usuario: {}, Edad: {}", usuario.nombre, usuario.edad); // imprime los detalles del usuario
}
```

**Explicación**

Variables y Mutabilidad: En Rust, las variables son inmutables por defecto. Si necesitas cambiar el valor de una variable, debes declararla como mutable usando mut.

Constantes: Se declaran usando const y siempre deben tener un tipo explícito. Su valor no puede cambiar una vez asignado.

Funciones: Se definen con fn y pueden tomar parámetros y retornar valores. El tipo de retorno se especifica después de la flecha ->.

Structs: Permiten agrupar datos relacionados en una única estructura. Los structs son útiles para organizar y manipular datos de manera más estructurada.

## Flujos de Control

**if-else:**

Declaración de Variables:

Se declara una variable inmutable numero y se le asigna el valor 7.

Estructura if-else:

La estructura if evalúa si la condición numero < 5 es verdadera.
Si la condición es verdadera, se ejecuta el bloque de código dentro del if y se imprime "Menor que 5".
Si la condición es falsa, se ejecuta el bloque de código dentro del else y se imprime "Mayor o igual a 5".

El uso de if-else permite tomar decisiones en el flujo del programa basado en condiciones booleanas. Este ejemplo muestra cómo evaluar una condición y ejecutar diferentes bloques de código en función del resultado de esa evaluación.

```bash
fn main() {
    let numero = 7; // Se declara una variable inmutable llamada numero y se le asigna el valor 7

    // Inicio de la estructura if-else
    if numero < 5 {
        // Si la condición numero < 5 es verdadera, se ejecuta este bloque
        println!("Menor que 5");
    } else {
        // Si la condición numero < 5 es falsa, se ejecuta este bloque
        println!("Mayor o igual a 5");
    }
}
```
