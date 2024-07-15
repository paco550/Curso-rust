---
title: Introducción al Curso
description: Guia basica para aprender rust
---

## Introducción al Curso

**Objetivo del Curso:**
Este curso tiene como objetivo enseñarte Rust desde lo más básico hasta construir aplicaciones avanzadas. Rust es un lenguaje de programación de sistemas enfocado en la seguridad y el rendimiento.

## Instalación

**Instalación de Rust:**
Para instalar Rust, utiliza `rustup`, el instalador de Rust:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Truco Mnemotécnico:

###### RUSTup - Rápido Utilizador de Software con Trust

Después de instalar Rust, asegúrate de que está correctamente instalado:

```bash
rustc --version
```

<Activity>
<script>
    <h3>Verifica la instalación de Rust</h3>
    <p>Ejecuta el siguiente comando en tu terminal:</p>
    <code>rustc --version</code>
    <p>¿Aparece la versión de Rust correctamente?</p>
    <button on:click={() => checkAnswer('rustc --version')}>Verificar</button>
    <p id="feedback"></p>
    <script>
        function checkAnswer(command) {
            if (command === 'rustc --version') {
                document.getElementById('feedback').textContent = '¡Correcto! Rust está instalado.';
                document.getElementById('feedback').style.color = 'green';
            } else {
                document.getElementById('feedback').textContent = 'Incorrecto. Intenta de nuevo.';
                document.getElementById('feedback').style.color = 'red';
            }
                                                        
    </script>
</Activity>


[Responde aquí](./01_introduccion/actividades/03_configuracion_entorno_actividad.md)

---

[>> Siguiente: ¿Qué es Rust?](./01_introduccion/01_que_es_rust.md)
