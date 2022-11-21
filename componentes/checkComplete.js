const checkComplete = (id) => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon" );
    i.addEventListener("click",(event) => completeTask(event, id));  
    return i; 
};

const completeTask = (event, id) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex((item) => item.id == id);
    tasks[index]["complete"] = !tasks[index]["complete"];
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

export default checkComplete;

//.target se usa para referenciar al objeto en el cual se lanzo el evento. Para decir, acá, en este item (por ejemplo) se realizó el evento
//.toggle() lo que hace es verifica si existe o no la clase. Si existe, la quito; y si no existe, la pongo. Tambien existe el .add(), o el .remove()