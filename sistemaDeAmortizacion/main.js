// const se salida
const salida = document.getElementById('salida');
const salidaT = document.getElementById('salidaT');

const totalC = document.getElementById('totalC')
const totalI = document.getElementById('totalI')
const totalA = document.getElementById('totalA')
const totalS = document.getElementById('totalS')

// code input
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

// functrion de range interes
const valueInteres = (valor) => {
    input1.innerText = valor
    input1.style.left = ((valor/2*10)-29) + '%'
}
// functrion de range tiempo
const valueTiempo = (valor) => {
    input2.innerText = valor
    input2.style.left = ((valor*10)-11) + '%'
}
// caluculo de renta con valor actual helps
const rentaConVA = (valorAct, tasa, tiempo) => (valorAct)/((1 - (1 + tasa)**(-tiempo))/tasa)
// function for calculating el interested helps
const interes = (valorAct, tasa, tiempo = 1) => valorAct * tasa * tiempo

// declaration de cuadro
let cuadro = new Array()

// function cuadro generation
const generateCuadro = (capital, tasa, tiempo, cuota) => {
    let amortizacion = 0
    let saldo = capital
    let I = interes(saldo, tasa)
    for(let i = 0; i <= tiempo; i++) {
        if(i === 0) {
            cuadro.push({periodo: i, cuotaSemestral: 0, interes: 0, amortizacion: 0, saldo: saldo})
            I = interes(saldo, tasa)
        } else {
            amortizacion = cuota - I
            saldo = saldo - amortizacion
            cuadro.push({periodo: i, cuotaSemestral: cuota, interes: I, amortizacion: amortizacion, saldo: saldo})
            I = interes(saldo, tasa)
        }
    }
}

// function event 
const calcularCuadro = () => {
    salida.innerText = ''
    cuadro = new Array()
    const capital = document.getElementById('capital');
    const tasa = document.getElementById('tasa');
    const tiempo = document.getElementById('tiempo');
    if(capital.value){
        let renta = rentaConVA(parseInt(capital.value), parseInt(tasa.value)/100, parseInt(tiempo.value) * 12)
        salidaT.innerHTML = `<span><b>Cuadrado de Amortización de Capital</b></span><span>La Cuota Mensual es de: ${renta.toFixed(2)} $</span>`
        generateCuadro(parseInt(capital.value), parseInt(tasa.value)/100, parseInt(tiempo.value) * 12, renta)
        cuadro.forEach(({ periodo, cuotaSemestral, interes, amortizacion, saldo }) => {
            salida.innerHTML += `<p>${periodo}</p><p>${cuotaSemestral.toFixed(2)}</p><p>${interes.toFixed(2)}</p><p>${amortizacion.toFixed(2)}</p><p>${saldo.toFixed(2)}</p>`
        })
        totalC.innerText = (cuadro.reduce((suma, {cuotaSemestral}) => suma += cuotaSemestral, 0)).toFixed(2)
        totalI.innerText = (cuadro.reduce((suma, {interes}) => suma += interes, 0)).toFixed(2)
        totalA.innerText = (cuadro.reduce((suma, {amortizacion}) => suma += amortizacion, 0)).toFixed(2)
        totalS.innerText = (cuadro.reduce((suma, {saldo}) => suma += saldo, 0)).toFixed(2)
    } else {
        alert("Ingrese al valor del monto en $")
    }
}
