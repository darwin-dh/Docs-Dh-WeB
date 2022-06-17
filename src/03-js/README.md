#  Javascript
#### Definición
JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript

## Variables en javascript
## Var
 var
La sentencia var declara una variable, opcionalmente inicializándola con un valor.
Nota no se recomienda usar remplazar por **let**

#### Ejemplo
```js
   var variable = 'dato'
   //esta variable puede ser modificada
   variable = 'Nuevo dato' 

```
[Mas información](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/var)
## Let
let
La instrucción let declara una variable de alcance local con ámbito de bloque(block scope), la cual, opcionalmente, puede ser inicializada con algún valor.

#### Ejemplo
```js
   let variable = 'dato'
   //esta variable puede ser modificada
   variable = 'Nuevo dato' 

```
[Mas información](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let)
## Const
**const** .
Las variables constantes presentan un ámbito de bloque (block scope) tal y como lo hacen las variables definidas usando la instrucción let, con la particularidad de que el valor de una constante no puede cambiarse a través de la reasignación. Las constantes no se pueden redeclarar..

#### Ejemplo
```js
   const variable = 'dato'
   //esta variable no se puede ser modificada
   variable = 'Nuevo dato' //error

```
[Mas información](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const)
## Template String (plantillas de cadenas)
Las plantillas literales son cadenas literales , es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.
[Mas información](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)
```js
    const nombre ="Jose"
    const apellido ="Hunter"
    //cadana normal
    console.log('first Name' + nombre + 'last name' + apellido)
    //template String
    console.log(`fist name ${nombre} last name ${apellido}`)
```
## Funciones
Las funciones son uno de los bloques de construcción fundamentales en JavaScript.
### Declaración de función
```js
    //function normal
    function nombreFuncion(){
        //cuerpo de la funcion
        console.log("first");
    }
    Ejercutar función
    nombreFuncion()
```
##  Función Flecha
Una expresión de función flecha es una alternativa compacta a una expresión de función
```js
    const nombreFuncion = ()=> console.log("first arrow")
    Ejercutar función
    nombreFuncion()
```
## Función Parametros
```js
    //function parameter
    const datos =(a,b,c)=>{
        console.log(a)
        console.log(b)
        console.log(c)
    }
    datos(3, 'nombre',true)

    //function suma
    const suma =(a,b,c)=>{
    return a+b+c
    }
    console.log(suma(1,2,4))
```
### Función Currying
Es una función que permite invocar una función dentro de una o mas funciones
```js
    const func1=(dato)=>{
        return dato
    }
    const func2 =(d)=>{
        console.log(d)
    }
    func2(func1('data'))
```
## Colecciones
Este capítulo presenta colecciones de datos ordenados por un valor de índice.
```js
//collection
const collection =[1,2,3,4,5,6,7,8,9,10]
console.log(collection)
```
## Objetos
Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.
```js
const Persona={
    id:01,
    nombre:'darwin',
    estado:false,
    datos:{
        id:002,
        ciudad:'quito'
    }
}
//insertar nueva propiedad
Persona.numero = '009999'
console.log(Persona.estado)
console.log(Persona.numero)
console.log(Persona.datos.ciudad)
```
## Object destructuring
La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.
[Mas información](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
```js
    const Persona={
        id:01,
        nombre:'darwin',
        estado:false,
        datos:{
            id:002,
            ciudad:'quito'
        }
    }
    //object destructuring
    const {nombre,id,datos} = Persona
    console.log(datos)
    //object destructuring chill
    const {ciudad} = Persona.datos
    console.log(ciudad)
```
## Fetch api
La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas
1. __Fetch__: (la ruta del recurso que quieres obtener) 
2. __Then__: Captura la respuesta de la petición

3. __Catch__
captura los errores
```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err))
```
## async await
La declaración de función async define una función asíncrona
[Mas información](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
```js
// async
    const obtenerUser = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const datos = await response.json()
            console.log("async", datos)
        } catch (err) {
            console.log(err)
        }

    }
    obtenerUser()
```
## Método map
El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

```js
    const data = [
        { nombre: "nam1", edad: 38 },
        { nombre: "nam2", edad: 18 },
        { nombre: "nam3", edad: 12 },
        { nombre: "nam4", edad: 55 },
        { nombre: "nam5", edad: 31 }
    ]
    //forEach
    data.forEach(element => {
        console.log('foreach',element)
    })
    //map
    data.map(element => {
        console.log("map",element.nombre)
    })

```