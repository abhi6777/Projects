import { appendCard, showCard } from "./homepage.js";


// ===============================
// 💡 1. CREATE POPUP FORM UI
// ===============================
const popupForm = () => {

  // === Outer overlay
  const outerDiv = document.createElement("div");
  outerDiv.className = "d-flex justify-content-center align-items-center p-5";
  outerDiv.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100vh;
    z-index: 9999;
  `;

  // === Card container
  const card = document.createElement("div");
  card.className = "card p-4";
  card.style.width = "70%";

  // === Close button
  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "btn-close ms-auto mb-2";
  closeBtn.ariaLabel = "Close";
  closeBtn.addEventListener("click", () => outerDiv.remove());

  // === Form element
  const form = document.createElement("form");

  // === Helper to create input groups
  const createInputGroup = (labelText, inputType, inputId, isTextarea = false) => {
    const div = document.createElement("div");
    div.className = "mb-3";

    const label = document.createElement("label");
    label.htmlFor = inputId;
    label.className = "form-label";
    label.textContent = labelText;

    const input = isTextarea
      ? document.createElement("textarea")
      : document.createElement("input");

    input.className = "form-control";
    input.id = inputId;
    if (!isTextarea) input.type = inputType;
    if (isTextarea) input.style.height = "150px";

    div.appendChild(label);
    div.appendChild(input);
    return div;
  };

  // === Append all form fields
  form.appendChild(createInputGroup("Title", "text", "title"));
  form.appendChild(createInputGroup("Description", "text", "description"));
  form.appendChild(createInputGroup("Content", "text", "content", true));
  form.appendChild(createInputGroup("Author", "text", "author"));
  form.appendChild(createInputGroup("Date", "date", "date"));

  // === Submit button
  const submitBtn = document.createElement("button");
  submitBtn.id = "submitForm";
  submitBtn.type = "submit";
  submitBtn.className = "btn btn-primary w-100";
  submitBtn.textContent = "Submit";
  form.appendChild(submitBtn);

  // ===============================
  // 💾 2. STORE FORM DATA TO localStorage
  // ===============================
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get all input values
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const content = document.getElementById("content").value;
    const author = document.getElementById("author").value;
    const date = document.getElementById("date").value;

    // Get existing data from localStorage
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Create new blog object
    const newBlog = {
      id: blogs.length ? blogs[blogs.length - 1].id + 1 : 1,
      title,
      description,
      content,
      author,
      date
    };

    // Add to array and save back
    blogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    appendCard(showCard);

    alert("✅ Blog saved!");
    outerDiv.remove(); // close form
  });

  // === Final DOM appending
  card.appendChild(closeBtn);
  card.appendChild(form);
  outerDiv.appendChild(card);
  document.body.appendChild(outerDiv);
};

// Export the function
export { popupForm };
