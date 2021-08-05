// declaration of const 
const salida1 = document.getElementById('salida1')
const salida2 = document.getElementById('salida2')
const salida3 = document.getElementById('salida3')
// salidas for operation
const salida11 = document.getElementById('salida11')
const salida22 = document.getElementById('salida22')
const salida33 = document.getElementById('salida33')
// const from form for evets keword
const form1 = document.getElementById('form1')
const form2 = document.getElementById('form2')
const form3 = document.getElementById('form3')
// const from btn go number
const btnI1 = document.getElementById('btnI1')
const btnI2 = document.getElementById('btnI2')
const btnI3 = document.getElementById('btnI3')
// cont from btn delete number
const btnB1 = document.getElementById('btnB1')
const btnB2 = document.getElementById('btnB2')
const btnB3 = document.getElementById('btnB3')

// object for events de teclado
const TECLA = {
    ENTER: 13,
    DELETE: 8,
    SPACE: 32
}

// declaration from the array
let array1 = new Array()
let array2 = new Array()
let array3 = new Array()

// function for go number
const goNumber = (idArea, salidaP, idBtn, cadena) => {
    let area = document.getElementById(idArea)
    let salida = document.getElementById(salidaP)
    let btn = document.getElementById(idBtn)
    if(area.value){
        cadena.push(parseInt(area.value))
        salida.innerText = `[${cadena}]`
        area.value = ""
        btn.disabled = false
    } else {
        alert("No")
    }
}

// function from delete for Todo
// btn delete one
const deleteTodo1 = () => {
    array1 = new Array()
    salida1.innerText = ''
    salida11.innerText = ''
}
// btn delete two
const deleteTodo2 = () => {
    array2 = new Array()
    salida2.innerText = ''
    salida22.innerText = ''
}
// btn delete three
const deleteTodo3 = () => {
    array3 = new Array()
    salida3.innerText = ''
    salida33.innerText = ''
}

// function delete number
const deleteNumber = (cadena, salidaP) => {
    let salida = document.getElementById(salidaP)
    if(cadena.length != 0){
        cadena.pop()
        salida.innerText = `[${cadena}]`
    } else {
        alert("No")
        salida.innerText = ""
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

// function from click btn from promenc
const calPro = () => {
    if(array1.length != 0) {
        salida1.innerText = `El Promedio de los valores ingresados es: ${calcularPromedio(array1)}`
    } else {
        alert('No')
        salida1.innerText = ""
        salida11.innerText = ""
    }
} 
// function from click btn from Media
const calMe = () => {
    if(array2.length != 0) {
        salida2.innerText = `La Media de los valores ingresados es: ${calcularMedia(array2)}`
    } else {
        alert('No')
        salida2.innerText = ""
        salida22.innerText = ""
    }
} 

// function from click btn from Moda
const calMo = () => {
    if(array3.length != 0) {
        salida3.innerText = `La Moda de los valores ingresados es: ${calcularModa(array3)}`
    } else {
        alert('No')
        salida3.innerText = ""
        salida33.innerText = ""
    }
} 
// events from keword
// frist from
form1.addEventListener('keydown', (e) => {
    if(e.keyCode === TECLA.ENTER) {
        goNumber('area1', 'salida11', 'btn1', array1)
    } else if(e.keyCode === TECLA.DELETE){
        deleteNumber(array1, 'salida11')
    } else if(e.keyCode === TECLA.SPACE){
        calPro()
    }
})
// second form
form2.addEventListener('keydown', (e) => {
    if(e.keyCode === TECLA.ENTER) {
        goNumber('area2', 'salida22', 'btn2', array2)
    } else if(e.keyCode === TECLA.DELETE){
        deleteNumber(array2, 'salida22')
    } else if(e.keyCode === TECLA.SPACE){
        calMe()
    }
})
// three form
form3.addEventListener('keydown', (e) => {
    if(e.keyCode === TECLA.ENTER) {
        goNumber('area3', 'salida33', 'btn3', array3)
    } else if(e.keyCode === TECLA.DELETE){
        deleteNumber(array3, 'salida33')
    } else if(e.keyCode === TECLA.SPACE){
        calMo()
    }
})

// event from click
btnI1.onclick = (e) => {
    let input = e.target.dataset.input
    let salida = e.target.dataset.salida
    let btn = e.target.dataset.btn
    let array = array1
    goNumber(input, salida, btn, array)
}
// eveny to from2
btnI2.onclick = (e) => {
    let input = e.target.dataset.input
    let salida = e.target.dataset.salida
    let btn = e.target.dataset.btn
    let array = array2
    goNumber(input, salida, btn, array)
}
// eveny to from3
btnI3.onclick = (e) => {
    let input = e.target.dataset.input
    let salida = e.target.dataset.salida
    let btn = e.target.dataset.btn
    let array = array3
    goNumber(input, salida, btn, array)
}

// event de btn delete 
// btn delete 1
btnB1.onclick = (e) => {
    let array = array1
    let salida = e.target.dataset.salida
    deleteNumber(array, salida)
}
// btn delete 1
btnB2.onclick = (e) => {
    let array = array2
    let salida = e.target.dataset.salida
    deleteNumber(array, salida)
}
// btn delete 1
btnB3.onclick = (e) => {
    let array = array3
    let salida = e.target.dataset.salida
    deleteNumber(array, salida)
}