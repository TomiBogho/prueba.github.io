import checkComplete from "./checkComplete.js";
import borrarIcono from "./borrarIcono.js";
import { displayTasks } from "./readTasks.js";
import { uniqueDates } from "../services/date.js";

export const addTask = (evento) => {
    evento.preventDefault();//pq sino, no se agregarían los elementos a la lista ya que se refreshearía cada vez q apretas e boton
    
    const lista = document.querySelector("[data-list]")//me trae la info de lo que está en la lista (en un ppio. vacía)
    const input = document.querySelector("[data-form-input]");//me trae toda la info de lo que se escribió en la casilla de texto 
    const calendar = document.querySelector("[data-form-date]");

    const valorInput = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY"); 

    if (valorInput == "" ||  date == "") {
        return;
    }

    input.value = ""; //va a hacer q se borre lo que escribí en la casilla de texto
    calendar.value = "";

    const complete = false;
    
    const taskObj = {
        valorInput,
        dateFormat,
        complete,
        id: uuid.v4(),
    };

    lista.innerHTML= "";
    
    const taskList = JSON.parse(localStorage.getItem("tasks")) || []; //Con eso, le decimos a la aplicación que en caso de que localStorage este con datos se comporte de una manera, si en caso contrario estuviera vacío, la constante tasks empezaría como un arreglo vacío. Las expresiones lógicas son evaluadas de izquierda a derecha, luego, si la primera declaración sea verdadera se ejecuta normalmente y la segunda declaración no es aplicada, y si el primer es evaluado como falso, ejecutamos el segundo caso.
    taskList.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(taskList)); //EL JSON.stringify es para transformar objetos en strings.
    
    displayTasks(); 
}
    
//Arrow functions o funciones anonimas
export const createTask = ({valorInput, dateFormat, complete, id}) => {
    const tarea = document.createElement("li");//me crea el elemento que yo especifique(en este caso una lista)
          tarea.classList.add("card");//"tarea" toma el estilo de cierta clase ya creada en CSS
  
    const taskContent = document.createElement("div");

    console.log(complete);

    const check = checkComplete(id);

    if(complete){
        console.log("completada");
        check.classList.toggle("fas");
        check.classList.toggle("completeIcon");
        check.classList.toggle("far");
    }
   
    const titleTask = document.createElement("span");   
          titleTask.classList.add("task");
          titleTask.innerText = valorInput; 
          taskContent.appendChild(check); //dentro de la div que creé, voy a ir insertando los iconos junto a las tareas
          taskContent.appendChild(titleTask);                         
    
    const dateElement = document.createElement("span");
          dateElement.innerHTML = dateFormat; //.innerHtml agrega contenido a una etiqueta especifica en html y el id es necesario porque es la forma de llamar el contenido de html a javascript
          tarea.appendChild(taskContent);
          tarea.appendChild(dateElement);
          tarea.appendChild(borrarIcono(id));
    return tarea;
};