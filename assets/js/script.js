let tareas = [];
const tareasForm = document.getElementById("tareasform");

function renderizarTarea(tarea) {
  const contenedor = document
    .getElementById("pendientes")
    .querySelector(".tareas-container");

  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarea-card", `prioridad-${tarea.prioridad}`);
  tarjeta.setAttribute("data-id", tarea.id);

  const etiquetaPrioridad = {
    alta: " Alta",
    media: " Media",
    baja: " Baja",
  };

  tarjeta.innerHTML = `
    <p class="tarea-descripcion">${tarea.descripcion}</p>
    <div class="tarea-meta">
      <div class="tarea-prioridad">Prioridad: ${etiquetaPrioridad[tarea.prioridad]}</div>

      <div class="tarea-fecha">Fecha: ${formatearFecha(tarea.fecha)}</div>
    </div>
    <button class="btn-eliminar" onclick="eliminarTarea(${tarea.id})">Eliminar Tarea</button>

    <button class="btn-completada" onclick="completarTarea(${tarea.id})">Marcar como Completada</button>
  `;

  contenedor.appendChild(tarjeta);
  actualizarContador("pendientes");
}

function eliminarTarea(id) {
  tareas = tareas.filter((t) => t.id !== id);
  const tarjeta = document.querySelector(`.tarea-card[data-id="${id}"]`);
  if (tarjeta) {
    tarjeta.classList.add("eliminando");
    setTimeout(() => {
      tarjeta.remove();
      actualizarContador("pendientes");
    }, 300);
  }
}

function completarTarea(id) {
  tareas = tareas.filter((t) => t.id !== id);
  const tarjeta = document.querySelector(`.tarea-card[data-id="${id}"]`);
  if (tarjeta) {
    tarjeta.classList.add("completando");
    setTimeout(() => {
      tarjeta.remove();
      actualizarContador("pendientes", "completada");
    }, 300);
  }
}

function actualizarContador(seccionId) {
  const seccion = document.getElementById(seccionId);
  const cantidad = seccion.querySelectorAll(".tarea-card").length;
  seccion.querySelector(".contador").textContent = cantidad;
}

function limpiarFormulario() {
  document.getElementById("descripcion").value = "";
  document.getElementById("prioridad").value = "";
  document.getElementById("fecha").value = "";
}

function formatearFecha(fechaISO) {
  const [year, month, day] = fechaISO.split("-");
  return `${day}/${month}/${year}`;
}

document
  .getElementById("tareasform").addEventListener("submit", function (event) {
    event.preventDefault();
    agregarTarea();
  });

function agregarTarea() { //lee los datos dados y agrega la tarea en un array llamado "tarea"
  const descripcion = document.getElementById("descripcion").value.trim();
  const prioridad = document.getElementById("prioridad").value;
  const fecha = document.getElementById("fecha").value;

  if (!descripcion || !prioridad || !fecha) {
    alert("Complete todos los campos antes de agregar una tarea.");
    return;
  }

  const tarea = {
    id: Date.now(),
    descripcion,
    prioridad,
    fecha,
  };

  tareas.push(tarea);
  renderizarTarea(tarea);
  limpiarFormulario();
}
