# Frontend Code Test - Lola Market 💻

## Objetivo

El principal objetivo de esta prueba técnica consiste en renderizar un menú colapsable dados unos datos que provienen de la [api](https://api.comprea.com/v7/).

- Renderización de categorías y subcategorías de cada tienda.
- Especificación visual.
- Implementación de React Router.

## Uy, el primer reto de verdad...

Mi primer acercamiento al ejercicio fue conseguir traer los datos de la API para poder pintarlos posteriormente. A pesar de haber tratado con APIS anteriormente, era la primera vez que trabajaba con la validación de un token. Para ello, realicé varias llamadas encadenadas para ir consiguiendo dados datos (token, tiendas disponibles en determinado código postal, categorías de dicha tienda...) e irlos pasando poco a poco a la URL en cada nueva llamada. Siendo sincera, probablemente para mí este haya sido el mayor reto de esta prueba técnica ya que tuve que entender varios conceptos con los que realmente no había trabajado demasiado, como por ejemplo, el flujo de paso de parámetros en las llamadas.

A partir de ahí, cree una estructura de componentes sencilla para renderizar cada elemento y pasarle así los datos necesarios a cada uno:

- App.js
- Menu.js
  - MenuHeader.js
  - Submenu.js
- Store.js
- Loader.js

## Segundo reto: gestión de la asincronía ⏲

Una vez renderizados los elementos necesarios del menú empecé a lidiar con los problemas que vienen dados por la asincronía de la llegada de los datos a cada componente. Para ello, y para gestionar estas excepciones opté por el uso de condicionales `if/else`, donde se renderiza el componente `Loader` mientras los datos llegan, evitando así la excepción y que la página colapse 💥

## Tareas pendientes 📝

En la rama DEV podéis observar en código comentado la manera en la que empecé estas tareas:

- Implementación de React Router. Aunque instalado y comenzada la estructura, faltaría pasarle a la URL todos los id necesarios para la url `/tienda/{{ market }}/{{ category }}/{{ sub_category }}`. Para ello hubiese buscado en los props de la ruta el id por medio de `props.match.params`.
- Aparición de las flechas chevron sólo cuando el usuario hace hover sobre la lista. Comencé a implementar esta característica, pero por cuestión de tiempo no pude terminarla, así que para que la usabilidad y diseño del menú manteniesen cierta armonía y lógica, decidí que las flechas se mostrasen siempre y girasen cuando el usuario hiciese click sobre ellas. En la rama dev podéis ver como creé un estado `isShown` para que en el event `onMouseEnter` esto fuese **true** y se renderizase la imagen, pero sólo conseguí que lo hiciese en todos los elementos a la vez y no sólo en el elemento sobre el que el usuario estaba haciendo hover 😅. Mi planteamiento es hacer algo similar a los colapsables, con el id del elemento seleccionado compararlo con el `i` del elemento. Seguiré trabajando en ello.
- Implementación del check ✔ cuando el usuario clicka sobre una sección.
- Implementar animaciones para que el menú se abriese de manera más fluida.

### Por si interesa...

Y aunque no tiene importancia, programé esto mientras escuchaba en bucle el disco Allah-Lahs del grupo Allah-Lahs 🎵
