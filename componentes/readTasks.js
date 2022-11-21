import { createTask } from "./addTask.js";
import { orderDates, uniqueDates } from "../services/date.js";
import  dateElement  from "./dateElement.js";

export const displayTasks = () => {
    const list = document.querySelector("[data-list]");

    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(tasksList);
    orderDates(dates);
    dates.forEach((date) => {
        const dateMoment = moment(date, "DD/MM/YYYY")
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => { //forEach para iterar sobre los ítems del array.        
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate);
            if (diff == 0 ) {
                list.appendChild(createTask(task)); //.appendChild agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.  
            }
            
        });
    })
    

};