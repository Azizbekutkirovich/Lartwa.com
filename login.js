document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost/api.lartwa.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
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