### Ejercicio 7: Diseño Responsive con Media Queries

**Nota:** te puedes basar en la estructura presentada en [layout.html](layout.html) para el responsive.

Ejemplo de media query con breakpoint desde 500px de ancho o inferior:
```css
@media(max-width:500px;){
  h1 { ... }
}
```

Agrega media queries en tu archivo `styles.css` para hacer que la página blog.html sea responsive. Debes asegurarte de que el contenido se visualice correctamente en dispositivos de diferentes tamaños:

Configura un breakpoint para pantallas menores de `768px`, donde las columnas de contenido se apilen en lugar de estar lado a lado.
Asegúrate de que el texto sea legible y las imágenes se escalen adecuadamente en dispositivos móviles.

### Ejercicio 8: Menú de Navegación Responsive

Implementa un *menú de navegación* que sea responsive y se adapte a dispositivos móviles en blog.html:

El menú debería mostrarse como una barra horizontal en pantallas grandes.
En pantallas más pequeñas, el menú debería transformarse en un menú hamburguesa que los usuarios puedan expandir y colapsar.

**Nota:** se puede hacer con `flex` o con media queries.

PC:
```
link 1    link 2    link 3
```

móvil:
```
link 1
link 2
link 3
```

### Ejercicio 9: Imágenes Flexibles
Modifica las imágenes de tus posts en `blog.html` para que sean flexibles y responsivas:

Utiliza propiedades CSS como max-width y height auto para asegurar que las imágenes se ajusten al ancho de la pantalla sin distorsionarse.
Asegúrate de que las imágenes no excedan el ancho de la pantalla en dispositivos móviles.

**Nota:** se puede hacer con media queries.

### Ejercicio 10: Columnas Flexibles para Artículos
En `blog.html`, utiliza Flexbox para organizar los artículos en columnas que se adapten al tamaño de la pantalla:

En pantallas de escritorio, los artículos deben mostrarse en dos o tres columnas.

En dispositivos móviles, los artículos deben mostrarse en una sola columna para facilitar la lectura.

Juego que explica como funciona flex:
- Rana flex: https://flexboxfroggy.com/#es
- Flexbox en W3Schools: https://www.w3schools.com/css/css3_flexbox.asp

Ejemplo:
```css
  #container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap; /* coloca los elementos en col si no hay expacio en fila */
    border:1px solid black;
    padding: 10px;
  }
  #container div {
    width: 100px;
    height: 50px;
    margin: 10px;
    background-color: aliceblue;
    border: 3px dashed blue;
  }
  p {
    text-align: center;
  }
```
```html
  <div id="container">
    <div><p>1</p></div>
    <div><p>2</p></div>
    <div><p>3</p></div>
  </div>  
```

Ejemplo de como quedan estos divs con flex en [flex.html](flex.html).