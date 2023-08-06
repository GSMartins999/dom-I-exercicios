const frutas = ["laranja", "limão", "uva"]

//questão 1

const adicionarFrutas1 = document.getElementById("fruta-1")
adicionarFrutas1.innerHTML = frutas[0]


const adicionarFrutas2 = document.getElementById("fruta-2")
adicionarFrutas2.innerHTML = frutas[1]


const adicionarFrutas3 = document.getElementById("fruta-3")
adicionarFrutas3.innerHTML = frutas[2]


const adicionarFrutas4 = document.getElementById("fruta-4")
adicionarFrutas4.innerHTML = frutas[4]


//questão 2 - h0tão

const exemplo = document.getElementById("nomeFruta")

const adicionandoFrutas =()=>{
    console.log(exemplo.value);
}



//questao 3 - adicionando a fruta 4

const adicionando = document.getElementById("fruta-4");

const substituindo =()=>{
    adicionando.innerHTML = exemplo.value
}