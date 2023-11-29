const tarjeta = document.getElementById("inputTarjeta")
const fecha = document.getElementById("inputFecha") //llamar la ids de el html
const cW = document.getElementById("inputcW")

const mascaraNumero="####-####-####-####"//definir que el usuario no puede dijitar mas de estos caracteres
const mascaraFecha="##/##"//defini el tamaño de caracters en la fecha
const mascaracW="###"//defnir el tamaño del cW

let tarjetaNumero=[];//guardar en arreglos los numero dijtados en estos
let fechaNumero=[];
let cwNumero=[];

tarjeta.addEventListener("keydown",(e)=>{ //cuando presione una tecla se va a guardar en (e)
    if(e.key==="Tab"){//al darle tab no retorne nada
        return
    }
    e.preventDefault()//impedir que no se refresque la pantalla ni poder ingresar carcateres que no son los pedidos como letras
    ingresoDatos(mascaraNumero,e.key,tarjetaNumero)//guarda el caracter que uno dijite
    tarjeta.value=tarjetaNumero.join("")//lo que ingrese va para el arreglo TarjetaNumero
})

fecha.addEventListener("keydown",(e)=>{
    if(e.key==="Tab"){//al darle tab no retorne nada
        return
    }
    e.preventDefault()
    ingresoDatos(mascaraFecha,e.key,fechaNumero)//guarda el caracter que uno dijite
    fecha.value=fechaNumero.join("")//lo que ingrese va para el arreglo FechaNumero
})

cW.addEventListener("keydown",(e)=>{
    if(e.key==="Tab"){//al darle tab no retorne nada
        return
    }
    e.preventDefault()
    ingresoDatos(mascaracW,e.key,cwNumero)//guarda el caracter que uno dijite
    cW.value=cwNumero.join("")//lo que ingrese va para el arreglo cwNumero
})

function ingresoDatos(mascara,key,arreglo){//contiene las mascaras,keys y los arreglos
    let numeros=["0","1","2","3","4","5","6","7","8","9"];//numeros solo puede contener estos caracteres
    if(key==="Backspace" && arreglo.length > 0 ){//si el usuario esta presionando la tecla backSpace(tecla para borrar)
        arreglo.pop()//borar lo ultimo dijitado con el pop
        return//si ya no hay nada que borrar no hace nada mas
    }

    if(numeros.includes(key) && arreglo.length +1 <= mascara.length){//si la tecla presionada esta dentro de numeros lo mando para el arreglo y el arreglo es inferior a las mascara
        if(mascara[arreglo.length]==="-"|| mascara[arreglo.length]==="/"){//si encuentra (-) o (/) lo pone  
            arreglo.push(mascara[arreglo.length],key)//haga push al arreglo
        }
        else{
            arreglo.push(key)//si no llego a la longitud requerida mandele lo que tengaz|
        }
    }
}


