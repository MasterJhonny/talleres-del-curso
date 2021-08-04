// declaration of const 
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const salida1 = document.getElementById('salida1')
const salida2 = document.getElementById('salida2')
const salida3 = document.getElementById('salida3')

const salida11 = document.getElementById('salida11')
const salida22 = document.getElementById('salida22')
const salida33 = document.getElementById('salida33')
// declaration from the array
let cadena = new Array()

// funtio aditional
// function for go number
let arr = new Array()

const goNumber = (id) => {
    let area = document.getElementById(id)
    if(area.value){
        arr.push(parseInt(area.value))
        salida11.innerText = `[${arr}]`
        console.log(arr)
        area.value = ""
        btn1.disabled = false
    } else {
        alert("No")
    }
}

// delete for Todo
const deleteTodo = (id) => {
    arr = new Array()
    salida1.innerText = ''
    salida11.innerText = ''
}
// function delete number
const deleteNumber = () => {
    if(arr.length != 0){
        arr.pop()
        salida11.innerText = `[${arr}]`
    } else {
        alert("No")
        salida11.innerText = ""
    }
}

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

// function for calculating Moda
const calcularModa = (lista) => {
    let valores = {}
    lista.forEach(e => {
        valores[e] = lista.filter(valor => valor === e).length
    })
    let array = Object.entries(valores).sort((a,b) => a[1] - b[1])
    return parseInt(array[array.length - 1].shift())
}

// event from click btn1
btn1.onclick = () => {
    const area = arr
    if(area.length != 0) {
        salida1.innerText = `El Promedio de los valores ingresados es: ${calcularPromedio(area)}`
    } else {
        alert('No')
        salida1.innerText = ""
        salida11.innerText = ""
    }
} 
// event from click btn2
btn2.onclick = () => {
    const area = document.getElementById('area2')
    if(area.value) {
        let lista = area.value.split(",")
        let listaF = lista.map(e => parseInt(e))
        salida2.innerText = `La Media de los valores ingresados es: ${calcularMedia(listaF)}`
    } else {
        alert('No')
    }
} 

// event from click btn3
btn3.onclick = () => {
    const area = document.getElementById('area3')
    if(area.value) {
        let lista = area.value.split(",")
        let listaF = lista.map(e => parseInt(e))
        salida3.innerText = `La Moda de los valores ingresados es: ${calcularModa(listaF)}`
    } else {
        alert('No')
    }
} 
