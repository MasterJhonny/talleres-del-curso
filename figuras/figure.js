// encapcsulamiento den functiones de
// cuadrado
const perimeterCuadrado = (lado) => lado * 4
const areaCuadr = (lado) => lado**2

// triangulo
const perimeterTRiangual = (lado1, lado2, base) => lado1 + lado2 + base
const areaTRiangual = (base, altura) => (base * altura)/2

// circunferencia de
const PI = Math.PI
const diametro = (radio) => radio * 2 
const perimeterCirculo = (radio) => {
    return diametro(radio) * PI
}

const areaCirculo = (radio) => radio**2 * PI