let lista1 = [100, 200, 300, 500]



// for(let i = 0; i < lista.length; i++){
//     suma = suma + lista[i]
// }


// lista.forEach(valor => suma += valor) 
// console.log(suma)


const calcularPromedio = (lista) => {
    const suma = lista.reduce((acc, valor) => acc += valor)
    return suma/lista.length
}
