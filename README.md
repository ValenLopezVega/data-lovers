# Data Lovers

## índice 

* [1. Preámbulo](#1-preámbulo)
* [2. Definición del producto](#2-definición-del-producto)
* [3. Descripción del producto](#3-descripción-del-producto)
* [4. Historias de usuario](#4-historias-de-usuario) 
* [5. Diseño de la interfaz de usuario](#5-diseño-de-la-interfaz-de-usuario)
* [6. Test de usabilidad](#6-test-de-usabilidad) 

***

## 1. Preámbulo

Studio Ghibli es un estudio de animación japonés, conocido por sus largometrajes animados como Mi vecino Totoro, El viaje de Chihiro o El castillo ambulante, entre otros grandes éxitos.

Las animaciones tienen gran acogida a nivel mundial y algunas han recibido varias nominaciones y premios. De todo este fandom hay un grupo que desea poder interactuar y ver la información de las animaciones y sus personajes.

<p align="center">
<img src="https://cdn.worldvectorlogo.com/logos/studio-ghibli-logo.svg" width="250px" height="150px">
</p>

## 2. Definición del producto

Después de definir nuestra área de interés creamos un diseño de baja y alta fidelidad que permita presentar las peliculas y sus caracteristicas. Posteriormente se busco definir quienes serían los usuarios interesados y para asegurar que la página responda a sus necesidades (lo que necesite saber o ver) se realizaron entrevistas a potenciales usuarios. Así mismo se diseño la página de tal forma que pueda cumplir con el propósito de mostrar la información de diferentes formas, entre ellas filtrarla, ordenarla y calcular datos.   

<p align="center">
<img src="https://ghibli-park.jp/site/img/index/kuro02.svg" width="100px" height="100px">
</p>

## 3. Descripción del producto

Esta página web de películas de Studio Ghibli es un proyecto de Vanilla Javascript, HTML semántico y CSS que muestra una colección de películas de Studio Ghibli. La página carga todas las películas desde una data proporcionada y al seleccionar una película, muestra detalles adicionales sobre la pelicula y sus personajes.

Características:
  - Lista de todas las películas de Studio Ghibli en la página principal
  - Filtra las películas por año y productor
  - Ordena las películas de A-Z, por año y puntaje
  - Al seleccionar una película, se muestra información detallada en una segunda página
  - La información detallada incluye el título, año de lanzamiento, director, productor, puntaje  y una sinopsis breve
  - La información detallada también incluye una lista de personajes, su nombre, edad y genero

Tecnologías utilizadas:
  - HTML Semántico
  - CSS
  - Vanilla JavaScript
  - Git
  - Jest 

Público objetivo:

La página web está dirigida a un público amplio, que incluye tanto a niños como a adultos. Aunque algunas de las películas pueden parecer más adecuadas para un público joven, la mayoría de las obras de Studio Ghibli contienen elementos que pueden ser disfrutados por todas las edades.

Requerimientos para utilizar la página web:

  - Un dispositivo con conexión a internet: esto puede ser un  computador, tablet o celular
  - Un navegador web: Google Chrome, Mozilla Firefox, Safari o Microsoft Edge
  - La dirección URL de la página web
    
Como utilizar la página web

  - Acceda a la página web: <p>Esta es <a href="https://jackelinegs.github.io/DEV005-data-lovers/src/" title="Página web"> Página web</a></p>
  - Explorar el contenido: una vez que haya accedido a la página web, puede explorar su contenido y buscar información sobre las películas


## 4. Historias de usuario

Antes de comenzar a desarrollar la página web, se realizó una encuesta a un grupo de futuros usuarios con la finalidad de saber sobre el tipo de información que quisieran encontrar en una página web de un sitio de películas y de qué forma les gustaría, en cuanto a funcionalidad, que fuera la página.

Se recopilaron las siguientes Historias de Usuario:

### Historia de usuario 1 
Quiero : Que la página sea responsiva. 
Para : Poder revisarlo en diferentes dispositivos. 
Beneficios : Poder acceder a la información de manera cómoda.

- [ ] **Criterios de aceptación**

### Historia de usuario 2
Quiero : Visualizar la descripción de la película (titulo, año de estreno, score).
Para : Saber si la película puede ser de mi agrado.
Beneficios : Tener mayor facilidad para escoger una película.

- [ ] **Criterios de aceptación**
Mostrar información detallada de la película.

### Historia de usuario 3
Quiero : Quiero que la página tenga una opción de ordenar las películas (alfabeticamente y score) y filtrar (productor y año).
Para : Que sea más fácil encontrar alguna película.
Beneficios : Comodidad para el usuario.

- [ ] **Criterios de aceptación**
Las cards se ordenen alfabéticamente o por año.

### Historia de usuario 4
Quiero que al seleccionar una tarjeta se me muestre una segunda pantalla donde se muestra descripción completa y personajes.
Para : Saber si la película puede ser de mi agrado.
Beneficios : Tener mayor facilidad para escoger una película.

- [ ] **Criterios de aceptación**
Mostrar información detallada de la película.

### Historia de usuario 5
Quiero : Que las películas muestren la cantidad de personajes humanos y no humanos y cantidad por género. 
Para : Saber más sobre los personajes de la película .
Beneficios : Conocer más fácilmente sobre los personajes de las películas. 

- [ ] **Criterios de aceptación**
Se muestre cantidad de personajes segun su especie y cantidad por género.

Posteriormente se solicitaron test de usabilidad a algunos usuarios para corroborar el correcto funcionamiento de la página.

## 4. Diseño de la interfaz de usuario

  ### Diseños de baja fidelidad

  ![Diseño de baja fidelidad 1](/diseños/diseño_baja_fidelidad/baja_fidelidad_uno.PNG)

  ![Diseño de baja fidelidad 2](/diseños/diseño_baja_fidelidad/baja_fidelidad_dos.PNG)

  ![Diseño en celular](/diseños/diseño_baja_fidelidad/baja_fidelidad_celular.PNG)

  ### Diseños de alta fidelidad

  ![Diseño de alta fidelidad, primera página web](/diseños/diseño_alta_fidelidad/pagina1_web.png)

  ![Diseño de alta fidelidad, segunda página web](/diseños/diseño_alta_fidelidad/pagina2_web.png)

  ![Diseño de alta fidelidad, primera página celular](/diseños/diseño_alta_fidelidad/pagina1_iphone.png)

  ![Diseño de alta fidelidad, segunda página celular](/diseños/diseño_alta_fidelidad/pagina2_iphone.png)

  
## 5. Test de usabilidad

Se realizaron test de usabilidad para saber la opinion de usuarios sobre el uso de la página, obteniendo los siguientes resultados:

  - Se nos solicitó que se pudiera volver a la página principal a través del logo principal.

  - Se nos solicito que se corrija el diseño de la página para que sea responsivo en dispositivos con diferentes tamaños y que el logo principal sea más pequeño. También se nos pidió que la forma en que se entrega la descripción de la película se adapte de otra forma, ya que no les permitía leerlo facilmente.

  - Se nos solicitó que en el diseño movil el menú se viera ordenado de forma apilada.

  - Se nos solicitó que los titulos de las descripciones resalten, por lo tanto se las colocó en negrita.
