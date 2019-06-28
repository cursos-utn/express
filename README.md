# Proyecto básico en Express

Este proyecto es un servidor mínimo en NodeJS para servir tanto contenido estático como contenido dinámico.

## Correr el proyecto

```
node app.js
```

Luego se puede abrir un navegador e ir a ```http://localhost``` para acceder al servidor.

## Contenido

Dentro de la carpeta public se encuentra el contenido estático (es decir, html, css, imagenes, etc). Para acceder al contenido desde el navegador se debe ingresar directamente el nombre del archivo estático que se desee.

Por ejemplo, existe el archivo prueba.html dentro de public. Para acceder al mismo se debe ingresar en el navegador

``` http://localhost/prueba.html```

Todo el contenido estático se pude utilizar sin incorporar en la URL el nombre de la carpeta en la cual se encuentra.