import { addTask } from "./componentes/addTask.js";
import { displayTasks } from "./componentes/readTasks.js";

const btn = document.querySelector("[data-form-btn]"); //Se referencia con "[]"!!

btn.addEventListener("click", addTask); //Para usar un listener de eventos, necesitamos 3 cosas: El evento(addEventListener), el elemento que recibirá este evento(click) y, 3ro y último, la acción que pasará cuando el evento sea disparado (createTask). 

displayTasks();



