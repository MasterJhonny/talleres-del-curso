let lista1 = [1,3,1,2,3,1,3,2,1,1,4]



// for(let i = 0; i < lista.length; i++){
//     suma = suma + lista[i]
// }


// lista.forEach(valor => suma += valor) 
// console.log(suma)


const calcularPromedio = (lista) => {
    const suma = lista.reduce((acc, valor) => acc += valor)
    return suma/lista.length
}

let listaObjet = {}

lista1.map(element => {
    if(listaObjet[element]) {
        listaObjet[element] += 1
    } else {
        listaObjet[element] = 1
    }
})

// function for calculating if number is par 
const esPar = (numero) => {
    if(numero % 2 === 0) {
        return true
    } else {
        return false
    }
}

// function for calculating Moda
const calularModa = (lista) => {
    let valores = {}
    lista.forEach(e => {
        valores[e] = lista.filter(valor => valor === e).length
    })
    let array = Object.entries(valores).sort((a,b) => a[1] - b[1])
    return parseInt(array[array.length - 1].shift())
}

// function for calculating Moda de otra manera

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}
