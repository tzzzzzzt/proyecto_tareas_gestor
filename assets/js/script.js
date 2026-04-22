
const container = document.getElementById("en-progreso");
let contarprog = 0;
let contarcom = 0;

 document.getElementById("tareaForm").addEventListener("submit", (e) => {
        e.preventDefault();
    let descripcion = document.getElementById("descripcion").value;
    let prioridad = document.getElementById("prioridad").value;
    let fecha = document.getElementById("fecha").value;

    const newtarea = document.createElement("div");
    newtarea.textContent = (descripcion+ " "+ prioridad+ " "+fecha);
    container.appendChild(newtarea);
    contarprog++;
    document.getElementById('contarprog').innerText = contarprog;

});



