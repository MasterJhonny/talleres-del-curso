// codigo del cuadrado
console.group('cuadrado')
const ladoCuadrado = 5
console.log(`Los lasso del cuadrado son de ${ladoCuadrado}cm.`)

const perimeterCuadrado = ladoCuadrado * 4
console.log(`El perometro del cuadrado es ${perimeterCuadrado}cm.`)

const areaCuadrado = ladoCuadrado**2
console.log(`El area del cuadrado es ${areaCuadrado}cm2`)
console.groupEnd()

// codigo del trinagulo
console.group('triangulo')
const ladoTrinagulo1 = 6
const ladoTrinagulo2 = 6
const baseTrinagulo = 4
const alturaTrinagulo = 5.5
console.log(`los lados del triangulo miden ${ladoTrinagulo1}, ${ladoTrinagulo2}, ${baseTrinagulo} ${alturaTrinagulo}`)
console.log(`LA altura del trinagulo es de ${alturaTrinagulo}`)
const perimeterTriangulo = ladoTrinagulo1 + ladoTrinagulo2 + baseTrinagulo
console.log(`El perimeter Triangulo es de ${perimeterTriangulo}`)

const areaTriangulo = (baseTrinagulo * alturaTrinagulo)/2
console.log(`El area del trinagulo es de ${areaTriangulo}cm2.`) 
console.groupEnd()

// codigo del trinagulo
console.group('cirulo')
// radio
const radioCirculo = 4
console.log(radioCirculo)

// diametro
const diametroCirculo = radioCirculo * 2
console.log(diametroCirculo)

// PI
// const PI = Math.PI
// console.log(PI)

// circunferencia
//const perimeterCirculo = diametroCirculo * PI
//console.log(perimeterCirculo)

// area
// const areaCirculo = radioCirculo**2 * PI 
// console.log(areaCirculo)
console.groupEnd()


// encapsulando en funciones
// cuadrado
// const perimetCuadrado = (lado) => lado * 4
// const areCuadrado = (lado) => lado**2

// Trigangulo
// const perimetTriangulo = (lado1, lado2, base) => lado1 + lado2 + base
// const areTriangulo = (base, altura) => (base * altura)/2

// Circunference
// const perimetCirculo = (radio) => {
//     const PI = Math.PI
//     let diametro = radio * 2
//     return diametro * PI
//} 

// const areCirculo = (radio) => {
//     const PI = Math.PI
//     return radio**2 * PI
// }


// encapcsulamiento den functiones de
// cuadrado
const perimetCuadrado = (lado) => lado * 4
const areaCuadr = (lado) => lado**2

// triangulo
const perimeterTRiangual = (lado1, lado2, base) => lado1 + lado2 + base
const areaTRiangual = (base, altura) => (base * altura)/2

// circunferencia de
const PI = Math.PI
const diametro = (radio) => radio * 2 
const perimCirculo = (radio) => {
    return diametro(radio) * PI
}

const areaCir = (radio) => radio**2 * PI

