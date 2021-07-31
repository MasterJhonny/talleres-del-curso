const btn = document.getElementById('btn')
const salida = document.getElementById('salida')
const descuent = 18

const precioConDesc = (precio, descuent) => {
    return (precio * (100 - descuent)) / 100
}

btn.onclick = () => {
    let precio = document.getElementById('precio')
    let valor = document.getElementById('valor')
    let descuent = document.getElementById('descuento')
    if(precio.value && descuent.value){
        salida.innerText = `El precio con descuento es ${precioConDesc(parseInt(precio.value), parseInt(descuent.value))} ${valor.value}.`
    } else {
        salida.innerText = 'Llene todos los campos!'
    }
}


