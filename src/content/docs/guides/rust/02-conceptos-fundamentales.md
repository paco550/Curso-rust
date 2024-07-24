---
title: Conceptos Fundamentales
---

## Variables, Inmutabilidad y Constantes

En Rust, las variables son inmutables por defecto, lo que significa que no puedes cambiar su valor una vez asignado. Si deseas que una variable sea mutable, debes usar la palabra clave mut. Además, Rust permite definir constantes con const, las cuales deben tener un tipo explícito y su valor no puede cambiar.

```rs
fn main() {
    let x = 5; // x es inmutable, no se puede cambiar su valor una vez asignado
    let mut y = 10; // y es mutable, se puede cambiar su valor más adelante
    const MAX_POINTS: u32 = 100_000; // constante, su valor no puede cambiar y se debe declarar con tipo
}
```

Variables y Mutabilidad: En Rust, las variables son inmutables por defecto. Si necesitas cambiar el valor de una variable, debes declararla como mutable usando mut.

Constantes: Se declaran usando const y siempre deben tener un tipo explícito. Su valor no puede cambiar una vez asignado.

## Funciones

Las funciones en Rust se definen con la palabra clave fn, seguida del nombre de la función y los parámetros. El tipo de retorno se especifica después de la flecha ->. En este ejemplo, suma es una función que toma dos enteros como parámetros y retorna su suma.

```rs
fn main() {
    println!("El resultado es: {}", suma(5, 3)); // llama a la función suma y muestra el resultado
}

fn suma(a: i32, b: i32) -> i32 {
    a + b // retorna la suma de a y b
}
```

Se definen con fn y pueden tomar parámetros y retornar valores. El tipo de retorno se especifica después de la flecha ->.

## Structs

Los structs en Rust permiten agrupar varios valores en una única estructura. En este ejemplo, Usuario es un struct con dos campos: nombre y edad. Luego, se crea una instancia de Usuario y se imprimen sus valores.

```rs
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

Permiten agrupar datos relacionados en una única estructura. Los structs son útiles para organizar y manipular datos de manera más estructurada.

## Flujos de Control

### if-else

Declaración de Variables:

Se declara una variable inmutable numero y se le asigna el valor 7.

Estructura if-else:

La estructura if evalúa si la condición numero < 5 es verdadera.
Si la condición es verdadera, se ejecuta el bloque de código dentro del if y se imprime "Menor que 5".
Si la condición es falsa, se ejecuta el bloque de código dentro del else y se imprime "Mayor o igual a 5".

El uso de if-else permite tomar decisiones en el flujo del programa basado en condiciones booleanas. Este ejemplo muestra cómo evaluar una condición y ejecutar diferentes bloques de código en función del resultado de esa evaluación.

```rs
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

##
