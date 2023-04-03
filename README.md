# Data Lovers

## Índice

* [1. Definición del producto](#1-definición-del-producto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Prototipo de baja fidelidad](#3-prototipo-de-baja-fidelidad)
* [4. Diseño de la Interfaz de Usuario](#4-diseño-de-la-Interfaz-de-Usuario)
* [5. Tests de usabilidad](#5-tests-de-usabilidad)

***

## 1. Definición del producto

La página web recopila la información básica de cada Pokémon, además de las estadísticas que ayudaran a cada jugador en la toma de decisiones para el juego. Se encontrará principalmente información esencial de cada Pokémon, tanto de la primera como la segunda generación (251 Pokémon).
Al ingresar a la página principal se puede visualizar un menú donde se encuentran dos opciones (Home y Stats Pokemon) junto con el logo del juego, además de un menú secundario, el cual sirve para el filtrado por tipo o generación, asimismo de poder ordenar la información de forma ascendente, descendente, de mayor a menor y de menor a mayor.
En home se encuentra la información básica de cada Pokémon, como lo es el número, la imagen, el tipo y la generación, mientras que en Stats Pokémon se encuentra las estadísticas de cada Pokémon, como lo son: la base de ataque, defensa, resistencia, puntos de combate, puntos de salud y porcentaje de encuentros, este último hace referencia al porcentaje en la que aparece un Pokémon frente al Pokémon con mayor posibilidades de encuentro.


![pokemon-data-to-ui](https://user-images.githubusercontent.com/12631491/218505816-c6d11758-9de4-428f-affb-2a56ea4d68c4.png)

## 2. Historias de usuario
* [HU1.] 
Yo como usuario quiero ver una lista completa de Pokémon en la página principal.
* [HU2.]  
Yo como usuario quiero filtrar el Pokémon por pueblos y por tipo.
* [HU3.] 
Yo como usuario quiero ordenar de manera descendente, ascendente y por número mayor a menor y de menor a mayor.
* [HU4.] 
Yo como usuario quiero buscar el Pokémon por nombre.
* [HU5.]
Yo como usuario quiero ver la información completa del Pokémon filtrado, al tocar la imagen.


En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que descubras que tu usuario
necesita.

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y hacer algún cálculo agregado**. Con cálculo agregado
nos referimos a distintos cálculos que puedes hacer con la data para mostrar
información aún más relevante para los usuarios (promedio, el valor máximo
o mínimo, etc).

Esta vez te proponemos una serie de datos de diferentes _temáticas_ para que
explores y decidas con qué temática te interesa trabajar. Hemos elegido
específicamente estos sets de datos porque creemos que se adecúan bien a esta
etapa de tu aprendizaje.

Una vez que definas tu área de interés, buscar entender quién es tu usuario
y qué necesita saber o ver exactamente; luego podrás construir la interfaz que
le ayude a interactuar y entender mejor esos datos.

Estos son datos que te proponemos:

* [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 251 Pokémon de la región de Kanto
  y Johto, junto con sus respectivas estadísticas usadas en el juego
  [Pokémon GO](http://pokemongolive.com).
  - [Investigación con jugadores de Pokémon Go](src/data/pokemon/README.md)

* [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de campeones en una liga del
  juego League of Legends (LoL).
  - [Investigación con jugadores de LoL](src/data/lol/README.md)

* [Rick and Morty](src/data/rickandmorty/rickandmorty.json).
  Este set nos proporciona la lista de los personajes de la serie Rick and
  Morty. [API Rick and Morty](https://rickandmortyapi.com).
  - [Investigación con seguidores de Rick and Morty](src/data/rickandmorty/README.md)

* [Juegos Olímpicos de Río de Janeiro](src/data/athletes/athletes.json).
  Este set nos proporciona la lista de los atletas que ganaron medallas en las
  olímpiadas de Río de Janeiro.
  - [Investigación con interesados en juegos olímpicos de Río de Janeiro](src/data/athletes/README.md)

* [Studio Ghibli](src/data/ghibli/ghibli.json).
  En este set encontrarás una lista de las animaciones y sus personajes del
  [Studio Ghibli](https://ghiblicollection.com/).
  - [Investigación con seguidores de las animaciones del Studio Ghibli](src/data/ghibli/README.md)

* [Harry Potter](src/data/harrypotter/harry.json).
  En este set encontrarás una lista de los personajes,libros pociones
  y hechizos de toda la saga de
  [Harry Potter](https://harrypotter.fandom.com).
  - [Investigación con seguidoras de Harry Potter](src/data/harrypotter/README.md)

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

## 3. Prototipo de baja fidelidad
* [1.Pagina principal]
   ![Baja Fidelidad Pg1](Img/Prototipo%20de%20baja%20fidelidad%201-3.jpeg)
* [2.Pagina Pokedex]
   2.1 Pagina Pokedex
   ![Baja Fidelidad Pg2](Img/Prototipo%20de%20baja%20fidelidad%202-3.jpeg)
   2.2 Pagina Pokedex por Pokémon
  ![Baja Fidelidad Pg3](Img/Prototipo%20de%20baja%20fidelidad%203-3.jpeg)
* Link Figma de prototipo baja fidelidad: [Figma baja fidelidad](https://www.figma.com/file/Y67UUAZMNFkhOfAnAiwzv2/Prototipo-baja-fidelidad-(Pokemon)?t=QIhCz0UNkgrg8QMo-0)

## 4. Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

* Link Figma de prototipo alta fidelidad: [Figma alta fidelidad](https://www.figma.com/file/dWaBoVgg9WwTnCZDYm3WgZ/Prototipo-alta-fidelidad-(Pokemon)?node-id=0-1&t=ai5mnZTjA4YR2bzw-0)
* Link Zeplin:[Zeplin alta fidelidad](https://app.zeplin.io/project/642a85ecbf80762361886fde/screen/642a85fc10ced4244dff93d5)
## 5. Tests de usabilidad
* 1.El color que se encuentra en el menú no concuerda con los colores de Pokémon y el logo se ve pequeño.
* 2.La transparencia que está en la carta cuando se pasa el mouse, esta oscura y no deja ver bien la información y esta se pierde, además el fondo de cada Pokémon también está oscuro y hay características de ciertos pokemones que no se alcanzan apreciar.
* 3.Cuando se pasa el mouse por alguna carta de algún Pokémon aparece la mano como si al oprimir o al hacer clic llevaría a más información, y al hacer clic no lleva a ningún lado.
* 4.El pie de página se vería mejor si fuera de los mismos tonos del encabezado.
* 5.Los colores que están utilizando en la tabla deberían cambiarlos, bien sea a rojo más fuerte, azul oscuro o un amarillo.
* 6.Las imágenes de cada Pokémon en la tabla,  sean un poco más grandes para apreciarlos mejor
Página antes de los cambios.
![Test de usabilidad 1](Img/Test%20Usabilidad%201.png)
![Test de usabilidad 2](Img/Test%20Usabilidad%202.png)
![Test de usabilidad 3](Img/Test%20Usabilidad%204.png)
![Test de usabilidad 4](Img/Test%20Usabilidad%203.png)
Página después de los cambios

