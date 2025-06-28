import { popupForm } from "./popUpform.js";

document.getElementById("addBlog").addEventListener("click", popupForm);

const blogData = [
  {
    id: 1,
    title: "Why JavaScript Rocks",
    description: "Explore why JS is the backbone of web dev.",
    content: "JavaScript is super versatile—it powers both frontend and backend, making it a must-know for modern web developers. From dynamic UIs to powerful APIs, it does it all!",
    author: "Abhimanyu",
    date: "2025-06-25"
  },
  {
    id: 2,
    title: "Learning Web Dev",
    description: "The basic path to becoming a web developer.",
    content: "Start with HTML to structure your pages, CSS to style them, and JavaScript to make them interactive. That’s the solid base for any web dev journey.",
    author: "Abhimanyu",
    date: "2025-06-20"
  }
];

const existing = localStorage.getItem("blogs");

if (!existing) {
  localStorage.setItem("blogs", JSON.stringify(blogData));
};


export { blogData };