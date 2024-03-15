
const btnPromedio = document.getElementById("promedio");
const btnNota = document.getElementById("NotaAlta");
const botones = document.getElementsByClassName("btn");
const matematica = document.getElementById("NotaMate");
const lengua = document.getElementById("NotaLengua");
const efsi = document.getElementById("NotaEfsi");
const gif = document.getElementById("gif");

let gifGood = "https://giphy.com/embed/YRhUem7n2UaF9EK2PH";
let gifBad = "https://giphy.com/embed/xULW8AoMS81FypIOLC";
let gifMaso = "https://giphy.com/embed/0sgkfvoaCONHNN0pLs";
let gifMuyMal = "https://giphy.com/embed/XxqF3LzsPPLPZKzJkQ";
let gifPerfect = "https://giphy.com/embed/KB7Moe2Oj0BXeDjvDp";
let gifVeryGood = "https://giphy.com/embed/hiIbwkor1bsRTsJ63J";
let gifGoodEnough = "https://giphy.com/embed/3o72FcJmLzIdYJdmDe";

const checkInput = (inputVal) => {
    if(parseInt((inputVal.value), 10) <= 0 || parseInt((inputVal.value), 10) >= 11 || isNaN(inputVal.value) == true){
        inputVal.style.color = "red";
    }else{
        inputVal.style.color = "green";
    }
}

matematica.onkeyup = () => {
    checkInput(matematica);
}

lengua.onkeyup = () => {
    checkInput(lengua);
}

efsi.onkeyup = () => {
    checkInput(efsi);
}

const checkIniciar = () => {
    let materias = [matematica, lengua, efsi];
    let emptyString = false;
    let notAllowedString = false;
    materias.forEach(materia => {
        if(materia.value.length == 0){
            emptyString = true;
        }
        if(materia.style.color == "red"){
            notAllowedString = true;
        }
    })
    if(emptyString == true || notAllowedString == true){
        alert("Todos los campos deben estar rellenos correctamente.");
        return false;
    }else{
        return true;
    }

}

btnPromedio.onclick = () => {
    if(checkIniciar()){
        CalcPromedio();
    }
}

btnNota.onclick = () => {
    if(checkIniciar()){
        NotaMayor();
    }
}


const CalcPromedio = () => {
    let materias = document.getElementById("Notas").getElementsByTagName("input").length; 
    let notas = [matematica.value, lengua.value, efsi.value];
    let sumNotas = 0;
    notas.forEach(nota => sumNotas += parseInt(nota,10));
    let promedio = sumNotas / materias;
    promedio = promedio.toFixed(2);
    let resultado =  document.getElementById("resultado");
    if(promedio >= 6){
        resultado.style.color = "green";
        gif.src = gifGood;
    }else{
        resultado.style.color = "red";
        gif.src = gifBad;
    }
    resultado.innerText = "Tu promedio es de: " + promedio;
}

const NotaMayor = () => {
    let index = [];
    let materias = ["Matemática", "Lengua", "EFSI"]
    let notas = [matematica.value, lengua.value, efsi.value];
    let i = notas.length - 1;
    let target = Math.max(...notas);
    while(i != -1){
        if(notas[i] == target){
            index.push(i);
        }
        i--;
    }
    let resultado =  document.getElementById("resultado");
    resultado.style.color = "blue";
    if(index.length > 1){
        resultado.innerText = "Materias con mayor nota: ";
    }else{
        resultado.innerText = "Materia con mayor nota: ";
    }

    for (let i = 0; i < index.length; i++) {
        resultado.innerText += (" " + materias[i]);
        if(i < index.length - 2){
            resultado.innerText += ", ";
        } else if(i < index.length - 1)    {
            resultado.innerText += " y ";
        }           
    }
    if(notas[index] >= 8){
        let gifs = [gifGood, gifPerfect];
        gif.src = gifs[(Math.floor(Math.random() * gifs.length))];
    }else if(notas[index] >= 6 && notas[index] < 8){
        let gifs = [gifVeryGood,gifGoodEnough];
        gif.src = gifs[(Math.floor(Math.random() * gifs.length))];
    }else{
        let gifs = [gifBad,gifMaso,gifMuyMal];
        gif.src = gifs[(Math.floor(Math.random() * gifs.length))];
    }
}

