import { Globaldata, appendCard } from "./script.js";


document.addEventListener("click", (e) => {
  if (e.target.classList.contains("updateStatusButton")) {
    e.preventDefault();
    updateStatus(e.target);
  }

  if (e.target.classList.contains("removeCardButton")) {
    e.preventDefault();
    removeCard(e.target);
  }
});


function updateStatus(button) {
  const card = button.closest(".card");
  const title = card.querySelector(".card-title").textContent.trim();
  const taskTitle = title.substring(title.indexOf(" ") + 1); // remove "1."

  // Find the task in array
  const task = Globaldata.find(task => task.title === taskTitle);

  if (task) {
    // Toggle status
    task.status = task.status === "Success" ? "Pending" : "Success";

    // Update localStorage
    localStorage.setItem("Globaldata", JSON.stringify(Globaldata));

    // Rerender cards
    appendCard();
  };
};

function removeCard(button) {
  const card = button.closest(".card");
  const title = card.querySelector(".card-title").textContent.trim();
  const taskTitle = title.substring(title.indexOf(" ") + 1); // removes "1."

  // Remove from Globaldata by title
  const index = Globaldata.findIndex(task => task.title === taskTitle);
  if (index !== -1) {
    Globaldata.splice(index, 1); // remove from array
    localStorage.setItem("Globaldata", JSON.stringify(Globaldata)); // update storage
    appendCard(); // re-render cards
  };
};