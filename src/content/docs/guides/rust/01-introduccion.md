---
title: Introducción al Curso
description: Guia basica para aprender rust
---

## Objetivo del Curso

Este curso tiene como objetivo enseñarte Rust desde lo más básico hasta construir aplicaciones avanzadas. Rust es un lenguaje de programación de sistemas enfocado en la seguridad y el rendimiento.

## Instalación

Para instalar Rust, utiliza `rustup`, el instalador de Rust:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

**Después de instalar Rust, asegúrate de que está correctamente instalado:**

```bash
rustc --version
```

## Selección del IDE

### Configuración de Visual Studio Code para Rust

Instala la extensión "rust-analyzer" en VSCode.
Configura el debugger siguiendo la documentación oficial de VSCode y Rust <a href="https://code.visualstudio.com/docs/languages/rust" target="_blank">documentación oficial de VSCode y Rust</a>.

## Tu Primer Hello World

### Código de Ejemplo

```rs
fn main() {
    // Esta línea imprime "Hello, world!" en la consola
    println!("Hello, world!");
}
```

## Cargo: Gestor de Paquetes y Build System de Rust

### Iniciar un Proyecto con Cargo

Cargo es la herramienta de Rust para gestionar proyectos.

```bash
cargo new hello_cargo
cd hello_cargo
cargo build
cargo run
```