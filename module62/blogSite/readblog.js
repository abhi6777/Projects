document.addEventListener("DOMContentLoaded", () => {
  const blogId = new URLSearchParams(window.location.search).get("id");
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const blog = blogs.find((b) => b.id == blogId);

  if (blog) {
    document.getElementById("cardTitle").textContent = blog.title;
    document.getElementById("cardDescription").textContent = blog.description;
    document.getElementById("authorDate").textContent = `By ${blog.author} on ${blog.date}`;
    document.getElementById("content").textContent = blog.content;
  }
});