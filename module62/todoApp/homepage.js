const container = document.getElementById("cardsContainer");

function createCard(data) {

     const card = document.createElement("div");
     card.className = "card";
     card.style.width = "18rem";
     card.innerHTML = `
     <div class="card-body">
          <h5 class="card-title">
          <span>${data.id}.</span> ${data.title}
          </h5>
          <p class="card-text">Status: ${data.status}</p>
          <button href="#" class=" updateStatusButton btn btn-primary mb-3" style="width: 100%;">Update Status</button>
          <button href="#" class="removeCardButton btn btn-primary" style="width: 100%;">Remove</button>
     </div>
     `;

  container.appendChild(card);
};


export { createCard };