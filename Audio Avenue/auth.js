function handleLogin(event) {
  event.preventDefault();
  alert("Login successful! Redirecting to Audio Avenue...");
  window.location.href = "index.html";
  return false;
}

const toggle = document.getElementById("togglePassword");
const password = document.getElementById("password");

toggle.addEventListener("click", () => {
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  toggle.textContent = type === "password" ? "🙈" : "👁️";
});
