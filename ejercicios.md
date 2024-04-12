# Ejercicios de HTML

### Ejercicio 1: Crea un archivo `blog.html` y coloca el siguiente contenido con las etiquetas que conocemos hasta el momento:
  - Un título principal centrado sobre el tema del blog
  - Un párrafo descriptivo de la temática del blog
  - Otro título de la sección de artículos
    - En esta sección, es decir, debajo del título de los "Posts" colocamos al menos una futura entrada:
      - Título, por ejemplo "Mi primer post"
      - Una imagen del post
      - Una pequeña explicación de lo que va el post (máximo 2-3 líneas)

```
  Mi blog sobre Programación

  En este blog, vamos a aprender cómo funciona la programación de sistemas informáticos.

  Posts

  Mi Primer Post
  <img>
  Descripción

```

### Ejercicio 2: Crea un `post.html` para hacer una página de artículo de este blog con estos elementos:
  - Título principal
  - Imagen del post
  - Párrafo introductorio
  - Títulos de las secciones del post (de 3 a 5).

```
    Aprender HTML

    <img>
    
En este post vamos a aprender qué es HTML y las principales etiquetas del lenguaje.

    Qué es HTML

    Cómo se crea un archivo HTML

    Etc.

```

**Nota:** Añadimos ejemplo de cómo se puede navegar con `<a>` entre unos pocos archivos.

Claro, aquí te presento tres enunciados de ejercicios que se centran en temas adicionales como el uso de colores CSS, estilización de enlaces y la implementación de un favicon:

### Ejercicio 3: Estilización de Enlaces CSS

Crea o edita un archivo HTML llamado `index.html` o `blog.html` que contenga una página principal con al menos tres secciones:

- Una sección de encabezado con un título principal centrado.
- Una sección de contenido con tres párrafos sobre un tema de interés.
- Una sección de enlaces, donde cada enlace (`<a>`) lleve a una página diferente.

Estiliza los enlaces (`<a>`) utilizando CSS para que:
- Cambien de color (`#007bff`) al pasar el mouse sobre ellos.
- Tengan un fondo (`background-color`) ligero cuando estén en estado activo.

**Bonus:** Coloca navegación entre las secciones con enlaces.

### Ejercicio 4: Implementación de Favicon

Añade un favicon a tu página principal `index.html` de tu sitio web:
- Descarga un archivo de icono (`favicon.ico`) o utiliza una imagen de tamaño adecuado.
- Agrega el favicon al documento HTML utilizando la etiqueta `<link>` dentro del `<head>`.

```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

Verifica que el favicon se muestra correctamente en la pestaña del navegador al cargar la página.

### Ejercicio 5: Uso de Colores CSS

Crea un archivo `styles.css` en el mismo directorio que tus archivos HTML del blog para agregar estilos CSS específicos a tus elementos.

En tu archivo HTML principal (blog.html), enlaza tu archivo de estilos CSS utilizando la etiqueta <link> en la sección <head>. Luego, dentro de este archivo CSS, aplica estilos a las secciones de entradas de blog (post-preview) para resaltarlas con diferentes colores de fondo y estilos de texto.

Asegúrate de que cada entrada de blog (<div class="post-preview">) tenga un color de fondo único y apliques estilos adecuados a los enlaces (<a>) dentro de cada entrada para mejorar la legibilidad y la interactividad del usuario al navegar por tu blog.

Este ejercicio te permitirá practicar el uso de CSS para personalizar la apariencia de las entradas de un blog, aplicando diferentes colores y estilos a cada una para mejorar la presentación y experiencia de usuario.