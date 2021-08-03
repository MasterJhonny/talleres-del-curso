// declaration of const 
const salida1 = document.getElementById('salida1')
const btn1 = document.getElementById('btn1')
const salida2 = document.getElementById('salida2')
const btn2 = document.getElementById('btn2')
let lista1 = [200, 100 ,500, 430]

// funtion for promenc
const calcularPromedio = (lista) => {
    const suma = lista.reduce((acc, valor) => acc += valor)
    return suma/lista.length
}

// function for calculation media
const calcularMedia = (lista) => {
    let listaOr = lista.sort((a, b) => a - b)
    let mediaIn = listaOr[Math.floor(listaOr.length/2)]
    let mediaPar = listaOr[Math.floor(listaOr.length/2) - 1]
    if(listaOr.length % 2 === 0) {
        return (mediaPar + mediaIn)/2
    } else {
        return mediaIn
    }
}

// function for calculating if number is par 
const esPar = (numero) => {
    if(numero % 2 === 0) {
        return true
    } else {
        return false
    }
}

// event from click
btn1.onclick = () => {
    const area = document.getElementById('area1')
    if(area.value) {
        let lista = area.value.split(",")
        let listaF = lista.map(e => parseInt(e))
        salida1.innerText = `El Promedio de los valores ingresados es: ${calcularPromedio(listaF)}`
    } else {
        alert('No')
    }
} 
// event from click
btn2.onclick = () => {
    const area = document.getElementById('area2')
    if(area.value) {
        let lista = area.value.split(",")
        let listaF = lista.map(e => parseInt(e))
        salida2.innerText = `La media de los valores ingresados es: ${calcularMedia(listaF)}`
    } else {
        alert('No')
    }
} 
