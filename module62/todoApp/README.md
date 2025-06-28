# 📝 Taskify - A Simple To-Do App

### Taskify is a minimalist to-do web app built using vanilla JavaScript and Bootstrap 5.  
It lets you **Create**, **update**, and **remove** tasks with localStorage support.

## 🚀 Features

- Add new tasks
- Toggle status: `Pending` ↔ `Success`
- Remove tasks
- Responsive UI using Bootstrap
- Data saved in browser (localStorage)

## 📂 File Structure

```
📁 Taskify/
├── homepage.html
├── script.js # Handles data and rendering
├── homepage.js # Renders each task card
├── addTask.js # Logic for adding new tasks
├── buttonFunctionality.js # Handles update/remove buttons
└── README.md
```


## 🛠️ Technologies Used

- HTML5
- CSS3 (via Bootstrap 5)
- JavaScript (ES6)
- localStorage API

## 🧠 How It Works

- All task data is stored in an array (`Globaldata`)
- Changes to the array are saved in `localStorage`
- UI re-renders from `Globaldata` whenever you update/remove/add

## ✅ To Run

Just open `homepage.html` in your browser using **Live Server** or a simple HTTP server.

---

Made with 💻 by Abhimanyu  
