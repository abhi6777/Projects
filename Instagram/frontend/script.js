window.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("http://localhost:5000/user", {
      method: "GET",
      credentials: "include"
    });
    console.log("Check the result");
    console.log(res);

    const data = await res.json();
    // console.log(data);
    // document.getElementById("welcome").textContent = `Welcome, ${data.data.username}`;
    document.getElementById("card").innerHTML = 
    `     <img src="assets/profile.jpg" alt="Profile Pic" class="profile-pic" />
          <h2>${data.data.username}</h2>
          <p>${data.data.bio}</p>
          <p>${data.data.email}</p>
          <p class="followers"> Followers: 1000</p>`;

  } catch (error) {
    console.error("Error fetching user details:", error);
  }
});
