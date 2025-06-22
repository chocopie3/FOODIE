document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const systemID = document.getElementById("system-id").value.trim();
  const password = document.getElementById("password").value;

  const testAccount = {
    system_id: "foodie123",
    password: "TasteMe@42",
    name: "Test User"
  };

  if (systemID === testAccount.system_id && password === testAccount.password) {
    alert("Welcome to FOODIE!");
    window.location.href = "dashboard.html"; // Replace with your actual dashboard path
  } else {
    alert("Incorrect System ID or Password.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
// On successful login
localStorage.setItem("currentUser", JSON.stringify(testAccount));
window.location.href = "welcome.html"; // Or dashboard.html
});