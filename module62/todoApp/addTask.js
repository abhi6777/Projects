import { Globaldata, appendCard } from "./script.js";

const taskBoxValue = document.getElementById("taskBox");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", (e) => {
     e.preventDefault();
     addTask();
});

taskBoxValue.addEventListener("keypress", (e) => {
     if (e.key === "Enter") {
          e.preventDefault();
          addTask();
     };
});

function addTask() {
     const id = Globaldata.length + 1;
     const title = taskBoxValue.value;

     if (!title.trim()) return; // don't add empty task

     Globaldata.push({id, title, status: "Pending", });

     localStorage.setItem("Globaldata", JSON.stringify(Globaldata));

     appendCard();
};

