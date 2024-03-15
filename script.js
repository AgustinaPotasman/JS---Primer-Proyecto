
const btnPromedio = document.getElementById("promedio");
const btnNota = document.getElementById("NotaAlta");
const botones = document.getElementsByClassName("btn");
const matematica = document.getElementById("NotaMate");
const lengua = document.getElementById("NotaLengua");
const efsi = document.getElementById("NotaEfsi");


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
    }else{
        console.log(checkIniciar());
    }
}

btnNota.onclick = () => {
    if(checkIniciar()){
        NotaMayor();
    }
}

const NotaMayor = () => {
    let index = [];
    let materias = ["Matematica", "Lengua", "EFSI"]
    let notas = [matematica.value, lengua.value, efsi.value];
    if(notas.length > 0){
        let i=notas.length - 1;
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
            if(i < index.length -1){
                resultado.innerText += ", ";
            }                
        }
    }

}


const CalcPromedio = () => {
    let materias = document.getElementById("Notas").getElementsByTagName("input").length; 
    let notas = [matematica.value, lengua.value, efsi.value];
    let sumNotas = 0;
    notas.forEach(nota => sumNotas += parseInt(nota,10));
    let promedio = sumNotas / materias;
    let resultado =  document.getElementById("resultado");
    if(promedio >= 6){
        resultado.style.color = "green";
    }else{
        resultado.style.color = "red";
    }
    resultado.innerText = "Tu promedio es de: " + promedio;
}