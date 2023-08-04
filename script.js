const frutas = ["laranja", "limão", "uva"]

for(let i = 0; i < frutas.length; i++){
    const fruta = frutas[i]
    const adicionando = document.getElementById(`fruta-${i + 1}`)
    adicionando.innerHTML = fruta;
}


// questao 2

const exemplo = document.getElementById("nomeFruta")

const adicionandoFrutas =()=>{
    console.log(exemplo.value);
}



//questao 3

const adicionando = document.getElementById("fruta-4");

const substituindo =()=>{
    adicionando.innerHTML = exemplo.value
}