
```markdown
# 📋 Evaluación N°2 - Proyecto Tareas Gestor

> Aplicación web de gestión de tareas con tablero Kanban (3 columnas), desarrollada como proyecto práctico de Diseño, Estilización e Interactividad Web.

---

## 📅 Fechas clave

| Evento | Fecha |
|--------|-------|
| Entrega dentro de plazo | 21 de abril de 2026 / 23:59 hrs. |
| Plazo máximo (fuera de plazo) | 22 de abril de 2026 / 23:59 hrs. |

> ⚠️ No se reciben entregas después del 22/04. Certificado médico necesario para evaluación pendiente.

---

## 🗂️ Estructura del proyecto

```
proyecto_tareas_gestor/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── responsive.css
│   ├── js/
│   │   └── script.js
│   ├── img/
│   │   ├── logo.png
│   │   └── favicon.ico
│   └── fonts/
└── docs/
    └── uso_ia.md
```

---

## 🧱 Componentes obligatorios

| Componente | Descripción |
|------------|-------------|
| **Header** | Logo + navegación |
| **Main** | Formulario de tareas + Tablero Kanban (3 columnas) |
| **Footer** | Información de contacto |

---

## 📝 Formulario requerido

```html
<label for="descripcion">Descripción:</label>
<textarea id="descripcion" required></textarea>

<label for="prioridad">Prioridad:</label>
<select id="prioridad" required>
    <option value="">Seleccionar...</option>
    <option value="alta">Alta</option>
    <option value="media">Media</option>
    <option value="baja">Baja</option>
</select>

<label for="fecha">Fecha límite:</label>
<input type="date" id="fecha" required>

<button type="submit">Agregar Tarea</button>
```

---

## 📊 Tablero Kanban (2 columnas base)

```html
<div class="columna" id="en-progreso">
    <h3>En Progreso <span class="contador">0</span></h3>
    <div class="tareas-container"></div>
</div>

<div class="columna" id="completadas">
    <h3>Completadas <span class="contador">0</span></h3>
    <div class="tareas-container"></div>
</div>
```

> 📚 Fuente: [Medium - Construyo un Kanban Board](https://medium.com/@thianlopezz/construyo-un-kanban-board-en-vanilla-javascript-react-angular-y-flutter-parte-1-85b235fe526c)

---

## 🎨 CSS - Variables obligatorias

```css
:root {
    /* Colores principales */
    --color-primario: #2563eb;
    --color-secundario: #7c3aed;
    --color-terciario: #10b981;

    /* Colores de estado */
    --color-pendiente: #3b82f6;
    --color-progreso: #f59e0b;
    --color-completado: #10b981;

    /* Tipografía */
    --fuente-principal: 'Segoe UI', system-ui, sans-serif;
    --tamano-base: 16px;

    /* Espaciado */
    --espacio-xs: 0.5rem;
    --espacio-sm: 1rem;
    --espacio-md: 1.5rem;
    --espacio-lg: 2rem;
}
```

### Checklist CSS obligatorio

- [ ] Variables CSS definidas
- [ ] Estilos para formulario
- [ ] Estilos para tarjetas de tareas
- [ ] Colores por estado (azul, amarillo, verde)
- [ ] Efectos hover en botones
- [ ] Diseño responsive (3 breakpoints)
- [ ] Tipografía legible
- [ ] Espaciado consistente

---

## ⚙️ Funcionalidades JavaScript

| Funcionalidad | Descripción |
|---------------|-------------|
| ✅ Agregar tarea | Desde formulario → columna Pendientes |
| ✅ Cambiar estado | Botones en cada tarjeta |
| ✅ Eliminar tarea | Botón eliminar en tarjeta |
| ✅ Contadores | Actualización automática |
| ✅ Validación | Campos no vacíos |

---

## 🤖 Documentación de IA (obligatoria)

Checklist `docs/uso_ia.md`:

- [ ] Modelo identificado específicamente
- [ ] Prompts documentados textualmente
- [ ] Respuestas de IA incluidas
- [ ] Ajustes manuales explicados
- [ ] Reflexión crítica incluida

---

## 🚀 Configuración inicial rápida

```bash
# 1. Crear estructura de carpetas
mkdir -p proyecto_tareas_gestor/assets/{css,js,img,fonts}
mkdir proyecto_tareas_gestor/docs
cd proyecto_tareas_gestor

# 2. Inicializar Git
git init

# 3. Configurar usuario
git config --global user.name "Tu Nombre"
git config --global user.email "tu_email@ejemplo.com"

# 4. Crear repositorio en GitHub (público, nombre: proyecto_tareas_gestor)

# 5. Conectar y subir
git remote add origin https://github.com/tu_usuario/proyecto_tareas_gestor.git
git add .
git commit -m "Estructura inicial del proyecto"
git branch -M main
git push -u origin main
```

---

## 📤 Entrega final

1. Subir todos los archivos al repositorio GitHub
2. Copiar URL del repositorio
3. Ir a **Educa Blackboard** → Actividad "Evaluación N°2"
4. Pegar el enlace en el campo de entrega
5. Confirmar envío ✅

---

## 📁 Archivos obligatorios

| Archivo | Ruta |
|---------|------|
| `index.html` | `/` |
| `README.md` | `/` |
| `style.css` | `assets/css/` |
| `responsive.css` | `assets/css/` |
| `script.js` | `assets/js/` |
| `logo.png` | `assets/img/` |
| `favicon.ico` | `assets/img/` |
| `uso_ia.md` | `docs/` |

---

**¡Buena suerte! 🍀**
```
