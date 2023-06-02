# Data Lovers

## Índice

* [1. Definición del producto](#1-definición-del-producto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Prototipo de baja fidelidad](#3-prototipo-de-baja-fidelidad)
* [4. Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)](#4-diseño-de-la-interfaz-de-Usuario-(prototipo-de-alta-fidelidad))
* [5. Tests de usabilidad](#5-tests-de-usabilidad)
* [6. Tecnologías usadas](#6-tecnologias-usadas)

***

## 1. Definición del producto

La página web recopila la información básica de cada Pokémon, además de las estadísticas que ayudaran a cada jugador en la toma de decisiones para el juego. Se encontrará principalmente información esencial de cada Pokémon, tanto de la primera como la segunda generación (251 Pokémon).
Al ingresar a la página principal se puede visualizar un menú donde se encuentran dos opciones (Home y Stats Pokemon) junto con el logo del juego, además de un menú secundario, el cual sirve para el filtrado por tipo o generación, asimismo de poder ordenar la información de forma ascendente, descendente, de mayor a menor y de menor a mayor.
En home se encuentra la información básica de cada Pokémon, como lo es el número, la imagen, el tipo y la generación, mientras que en Stats Pokémon se encuentra las estadísticas de cada Pokémon, como lo son: la base de ataque, defensa, resistencia, puntos de combate, puntos de salud y porcentaje de encuentros, este último hace referencia al porcentaje en la que aparece un Pokémon frente al Pokémon con mayor posibilidades de encuentro.


![pokemon-data-to-ui](Img/Proyecto%20Pokemon%201%20(Final).png)

## 2. Historias de usuario
* [HU1.] 
Yo como usuario quiero ver una lista completa de Pokémon en la página principal.
  * Criterios de aceptación
    - Mostrar los pokemones con imagen, nombre, número y tipo
    - Mostrar la lista de pokemones en columnas
    - Poner margen a cada cuadro de cada pokemon
  * Definición de terminado
    - Página esta adelantada visualmente con la ubicación de los pokemones
    - La ubicación de los cuadros de Pokémon se encuentre debajo de la búsqueda y filtro
* [HU2.]  
Yo como usuario quiero filtrar el Pokémon por debilidades, resistencia, pueblos y por tipo.
  * Criterios de aceptación
    - Ubicar los filtros como lista desplegable.
    - Filtre por tipo
    - Filtre por generación
    - La lista de filtros debe estar ubicada debajo del cuadro búsqueda
  * Definición de terminado
    - El filtro debe traer el tipo o la generación seleccionado
    - Que las funciones de filtrado pasen el test
* [HU3.] 
Yo como usuario quiero ordenar de manera descendente, ascendente y por número mayor a menor y de menor a mayor.
  * Criterios de aceptación
    - En una lista desplegable poner los ordenados necesarios (A-Z o Z-A)
    - Ubicar el listado en la parte izquierda de la pantalla
    - Organizar diseño del listado
  * Definición de terminado
    - La función de organizar alfabéticamente debe funcionar
    - Que las funciones de filtrado pasen el test

* [HU4.] 
Yo como usuario quiero buscar el Pokémon por nombre.
  * Criterios de aceptación
    - Visualizar el buscador en la página principal debajo del título
    - Buscador debe traer el Pokémon buscado mostrando su imagen, nombre y número
  * Definición de terminado
    - Debe pasar los test
    - Que el buscador, durante la búsqueda vaya descartando los pokemones por nombre según información dada al buscador
* [HU5.]
Yo como usuario quiero ver la información completa del Pokémon filtrado, al tocar la imagen.
  * Criterios de aceptación
    - Recargar la pantalla mostrando un recuadro con toda la información
    - Que en la información esté la imagen, nombre, número, tipo, habilidades, debilidades,generación.
    - Boton para llevar al inicio
    - Imagen al lado izquierdo y al lado derecho la información
  * Definición de terminado
    - Que se visualice toda la información de la tarjeta Pokémon

## 3. Prototipo de baja fidelidad
* [1.Pagina principal]
   ![Baja Fidelidad Pg1](Img/Prototipo%20de%20baja%20fidelidad%201-3.jpeg)
* [2.Pagina Pokedex]
   - 2.1 Pagina Pokedex
   ![Baja Fidelidad Pg2](Img/Prototipo%20de%20baja%20fidelidad%202-3.jpeg)
   - 2.2 Pagina Pokedex por Pokémon
  ![Baja Fidelidad Pg3](Img/Prototipo%20de%20baja%20fidelidad%203-3.jpeg)
* Link Figma de prototipo baja fidelidad: [Figma baja fidelidad](https://www.figma.com/file/Y67UUAZMNFkhOfAnAiwzv2/Prototipo-baja-fidelidad-(Pokemon)?t=QIhCz0UNkgrg8QMo-0)

## 4. Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)
* Pagina Principal
![Pg.Principal](Img/Prototipo%20de%20alta%20fidelidad%201-4.jpeg.png)
 -Link Figma de prototipo alta fidelidad: [Figma alta fidelidad](https://www.figma.com/file/dWaBoVgg9WwTnCZDYm3WgZ/Prototipo-alta-fidelidad-(Pokemon)?node-id=0-1&t=ai5mnZTjA4YR2bzw-0)
* Link Zeplin:[Zeplin alta fidelidad](https://app.zeplin.io/project/642a85ecbf80762361886fde/screen/642a85fc10ced4244dff93d5)
## 5. Tests de usabilidad
* 1.El color que se encuentra en el menú no concuerda con los colores de Pokémon y el logo se ve pequeño.
* 2.La transparencia que está en la carta cuando se pasa el mouse, esta oscura y no deja ver bien la información y esta se pierde, además el fondo de cada Pokémon también está oscuro y hay características de ciertos pokemones que no se alcanzan apreciar.
* 3.Cuando se pasa el mouse por alguna carta de algún Pokémon aparece la mano como si al oprimir o al hacer clic llevaría a más información, y al hacer clic no lleva a ningún lado.
* 4.El pie de página se vería mejor si fuera de los mismos tonos del encabezado.
* 5.Los colores que están utilizando en la tabla deberían cambiarlos, bien sea a rojo más fuerte, azul oscuro o un amarillo.
* 6.Las imágenes de cada Pokémon en la tabla,  sean un poco más grandes para apreciarlos mejor
*  Página antes y después de los cambios.
![Test de usabilidad 1](Img/Comparacion%201.png)
![Test de usabilidad 2](Img/Comparacion%202.png)
## 6. Tecnologías usadas
 ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
 ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
 ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
 ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
 ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
 ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
 ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
 ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
 ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
