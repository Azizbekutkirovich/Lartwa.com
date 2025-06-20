const token = localStorage.getItem("token");
  if (token) {
    document.getElementById("navLinks").style.display = "none";

    fetch("http://localhost/api.lartwa.com/profile", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data.status) {
        document.getElementById("welcome").innerHTML = `
          <h3>Salom, ${data.name}</h3>
          <a class="btn btn-primary" href="profile.html">Profilga o'tish</a>
          <button class="btn btn-outline-danger ms-2" onclick="logout()">Chiqish</button>
        `;
      }
    });
  }

  function logout() {
    localStorage.removeItem("token");
    location.reload();
  }