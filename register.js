document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost/api.lartwa.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.status) {
        localStorage.setItem("token", data.token);
        window.location.href = "index.html";
      } else {
        const errorBox = document.getElementById("error");
        errorBox.textContent = data.message;
        errorBox.classList.remove("d-none");
      }
    });
  });