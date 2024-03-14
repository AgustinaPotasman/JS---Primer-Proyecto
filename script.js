
const CalcPromedio = () => {
    let materias = document.getElementById("Notas").getElementsByTagName("input").length; 
    let notas = incializar();
    if(notas.length > 0){
        let sumNotas = 0;
        notas.forEach(nota => Number(nota) += sumNotas);
        let promedio = sumNotas / materias;
        let resultado =  document.getElementById("resultado");
        resultado.innerText = promedio;
    }
}
const btnPromedio = document.getElementById("promedio");
const btnNota = document.getElementById("NotaAlta");
const botones = document.getElementsByClassName("btn");

const incializar = () => {
    matematica = document.getElementById("NotaMate").value;
    lengua = document.getElementById("NotaLengua").value;
    efsi = document.getElementById("NotaEfsi").value;
    let notasXMateria = [matematica,lengua,efsi];
    let estado = true;
    let popUp = false;
    notasXMateria.forEach(nota => {
        console.log(nota);
        console.log(typeof nota);
        if((nota.replace(/\s/g, '').length == 0 || parseInt(nota.replace(/\s/g, ''), 10) > 10) && popUp ==  false){
            if(nota.replace(/\s/g, '').length == 0) alert("Todos los campos deben ser respondidos.");
            if(parseInt(nota.replace(/\s/g, ''), 10) > 10) alert("No existen notas mayores a 10!");
            estado = false;
            popUp = true;
        }
    });
    if(estado == true) return notasXMateria;
}

btnPromedio.onclick = () => {
    CalcPromedio();
}

btnNota.onclick = () => {
    NotaMayor();
}

const NotaMayor = () => {
    let index = [];
    let materias = ["Matematica", "Lengua", "EFSI"]
    let notas = incializar();
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
        resultado.innerText = "Materia con mayor nota:"
        index.forEach(element => {
            resultado.innerText += (" " + materias[element]);
        });
    }

}