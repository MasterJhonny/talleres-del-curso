// declaracion de constant
// const from cuadrado
const btnPc = document.getElementById('btnPc')
const btnAc = document.getElementById('btnAc')
const salidaC = document.getElementById('salidaC')

// const from triangulo
const btnPt = document.getElementById('btnPt')
const btnAt = document.getElementById('btnAt')
const salidaT = document.getElementById('salidaT')

// const from circulos
const btnPr = document.getElementById('btnPr')
const btnAr = document.getElementById('btnAr')
const salidaR = document.getElementById('salidaR')

// encapcsulamiento den functiones de
// cuadrado
const perimeterCuadrado = (lado) => lado * 4
const areaCuadrado = (lado) => lado**2

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

// event from click
// get perimeter cuadrado
btnPc.onclick = () => {
    let lado = document.getElementById('ladoC')
    const medida = document.getElementById('medidasC')
    if(lado.value){
        salidaC.innerText = `Perimeter: ${perimeterCuadrado(parseInt(lado.value))} ${medida.value}.`
    } else {
        salidaC.innerText = `Ingrese al valor!`
    }
}
// get area cuadrado
btnAc.onclick = () => {
    let lado = document.getElementById('ladoC')
    const medida = document.getElementById('medidasC')
    if(lado.value){
        salidaC.innerText = `Area: ${areaCuadrado(parseInt(lado.value))} ${medida.value}.`
    } else {
        salidaC.innerText = `Ingrese al valor!`
    }
}
// get perimeter Triangulo
btnPt.onclick = () => {
    let lado1 = document.getElementById('lado1')
    let lado2 = document.getElementById('lado2')
    let base = document.getElementById('base')
    const medida = document.getElementById('medidasT')
    if(lado1.value && lado2.value && base.value) {
        salidaT.innerText = `Perimeter: ${perimeterTRiangual(parseInt(lado1.value), parseInt(lado2.value), parseInt(base.value))} ${medida.value}.`
    } else {
        salidaT.innerText = `Ingresa los campos required!`
    }
}
// get area Triangulo
btnAt.onclick = () => {
    let base = document.getElementById('base')
    let altura = document.getElementById('altura')

    const medida = document.getElementById('medidasT')
    if(base.value && altura.value) {
        salidaT.innerText = `Area: ${areaTRiangual(parseInt(base.value), parseInt(altura.value))} ${medida.value}.`
    } else {
        salidaT.innerText = `Ingresa los campos required!`
    }
}
// get Perimeter circunferencia
btnPr.onclick = () => {
    let radio = document.getElementById('radio')
    let medida = document.getElementById('medidasR')
    if(radio.value){
        salidaR.innerText = `Perimeter: ${(perimeterCirculo(parseInt(radio.value))).toFixed(2)} ${medida.value}.`
    } else {
        salidaR.innerText = `Ingresa el valor del Radio!`
    }
}
// get area circunferencia
btnAr.onclick = () => {
    let radio = document.getElementById('radio')
    let medida = document.getElementById('medidasR')
    if(radio.value){
        salidaR.innerText = `Area: ${(areaCirculo(parseInt(radio.value))).toFixed(2)} ${medida.value}.`
    } else {
        salidaR.innerText = `Ingresa el valor del Radio!`
    }
}
