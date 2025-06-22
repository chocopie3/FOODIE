document.addEventListener("DOMContentLoaded", function () {
  // Fetch and display the user's name
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const nameElement = document.getElementById("user-name");

  if (user && user.name && nameElement) {
    nameElement.textContent = user.name;
  } else {
    nameElement.textContent = "Guest";
  }

  // Optional: Attach interactivity to Menu and Today’s Special buttons
  const menuBtn = document.querySelector(".homepage-btn:nth-child(1)");
  const specialBtn = document.querySelector(".homepage-btn:nth-child(2)");

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      alert("Menu page coming soon!");
      // Replace this with: window.location.href = "menu.html";
    });
  }

  if (specialBtn) {
    specialBtn.addEventListener("click", function () {
      alert("Today's Specials will appear here!");
      // Replace this with: window.location.href = "specials.html";
    });
  }

  // Optional: Logout handler (if a logout button exists)
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("currentUser");
      window.location.href = "login.html";
    });
  }
});