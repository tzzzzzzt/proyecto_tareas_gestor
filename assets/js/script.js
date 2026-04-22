let tareas = [];

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

document.getElementById("btn-progreso").addEventListener("click", function (e) {
  e.preventDefault();
  const contenedor = document
    .getElementById("en-progreso")
    .querySelector(".tareas-container");
  contenedor.innerHTML = "";
  actualizarContador("en-progreso");
});

document
  .getElementById("btn-completadas")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const contenedor = document
      .getElementById("completadas")
      .querySelector(".tareas-container");
    contenedor.innerHTML = "";
    actualizarContador("completadas");
  });

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
  .getElementById("gestortareas")
  .addEventListener("submit", function (e) {
    e.preventDefault();
  });

function agregarTarea() {
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
