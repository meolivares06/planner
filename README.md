## Crear el proyecto
ng new planner

## Agregar Angular Material
ng add @angular/material

## Extra: fuente roboto y material icons offline
npm install material-design-icons-iconfont
npm install roboto-npm-webfont

Agrega las fuentes primero y luego los iconos
#### styles.css
@import '~roboto-npm-webfont/full/style.css';

$material-design-icons-font-directory-path: '~material-design-icons-iconfont/dist/fonts/';
@import '~material-design-icons-iconfont/src/material-design-icons';

## A continuacion seguimos la guia de instalacion de la pagina oficial
https://storybook.js.org/docs/guides/guide-angular/

Notese que esta la forma automatica y la manual. La primera en lo personal siempre me falla.
Sera por mi mala conexión :(.

## Al terminar la configuracion tenedremos Storybook funcionando y una historia de un botón.
