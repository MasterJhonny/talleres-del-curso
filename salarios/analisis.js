// function extract salary and sort
const arraySalSort = bolivia.map(({ salary }) => salary).sort((a, b) => a- b)

// function for calculating Media of salary
const medianaSalarios = (listaSort) => {
    const mitad = parseInt(listaSort.length/2)
    const mitad1 = listaSort[mitad] 
    const mitad2 = listaSort[mitad - 1]
    return (listaSort.length % 2 === 0) ? (mitad1 + mitad2)/2 : mitad1
}

// const de los salarios en general
const mediaGeneral = medianaSalarios(arraySalSort)

// function of top 10%
let spliceStart = (arraySalSort.length * 90)/ 100
let spliceCount = arraySalSort.length - spliceStart

const salaryTop10 = lista => {
    const listaClone = [...lista]
    return listaClone.splice(spliceStart, spliceCount)
}
const mediaSalaryTop = medianaSalarios(salaryTop10(arraySalSort))