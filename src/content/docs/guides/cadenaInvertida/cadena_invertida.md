---
title: Cadena Invertida (JS)
description: Mini retos de programación
---

## <span style="didplay: inline-block; padding: 10px; border: 2px solid red; border-radius: 10px; color; red;" >Paso 1 </span>

#### Crear la funcion de inversión de cadena en JavaScript

```js
function invertirCadena(cadena) {
  // Convertimos la cadena en un array de caracteres
  let arrayDeCaracteres = cadena.split('');

  // Invertimos el array de caracteres
  let arrayInvertido = arrayDeCaracteres.reverse();

  // Convertimos el array invertido de nuevo en una cadena
  let cadenaInvertida = arrayInvertido.join('');

  // Devolvemos la cadena invertida
  return cadenaInvertida;
}
```

### Explicación de codigo

- `cadena.split('')`: Convertimos la cadena en un arrray de caracteres. El metodo `split('')` divide la cadena, creando un array donde cada elemento es un caracter de la original.

- `arrayDeCaracteres.reverse()`: Invertimos el array usando el metodo `reverse()`: que invierte el orden de los elementos.

- `arrayInvertido.join('')`: Convertimos el array invertido de nuevo en una cadena utilizando el metodo `join('')` que une los elementos en una cadena.

- `return cadenaInvertida`: Devolvemos la cadena invertida.
