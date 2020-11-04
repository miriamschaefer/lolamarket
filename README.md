# Frontend Code Test - Lola Market

## Objetivo

El principal objetivo de esta prueba técnica consiste en renderizar un menú colapsable dados unos datos que provienen de la [api][https://api.comprea.com/v7/]

- Renderización de categorías y subcategorías de cada tienda.
- Especificación visual.
- Implementación de React Router.

## Uy, el primer reto de verdad...

Mi primer acercamiento al ejercicio fue conseguir traer los datos de la API para poder pintarlos posteriormente. A pesar de haber tratado con APIS anteriormente, era la primera vez que trabajaba con la validación de un token. Para ello, realicé varias llamadas encadenadas para ir consiguiendo dados datos (token, tiendas disponibles en determinado código postal, categorías de dicha tienda...) e irlos pasando poco a poco a la URL en cada nueva llamada. Siendo sincera, probablemente para mí este haya sido el mayor reto de esta prueba técnica.

A partir de ahí, cree una estructura de componentes sencilla para renderizar cada elemento y pasarle así los datos necesarios a cada uno:

- App.js
- Menu.js
  - MenuHeader.js
  - Submenu.js
- Store.js
- Loader.js
