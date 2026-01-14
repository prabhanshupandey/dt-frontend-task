document.addEventListener("DOMContentLoaded", () => {

  // ---------------- TASK DATA ----------------
  const tasks = [
    { title: "HTML Basics", status: "Completed" },
    { title: "CSS Styling", status: "In Progress" },
    { title: "JavaScript Logic", status: "Pending" }
  ];

  const container = document.getElementById("task-container");
  const filterButtons = document.querySelectorAll(".filters button");

  function renderTasks(filter = "All") {
    container.innerHTML = "";

    tasks
      .filter(task => filter === "All" || task.status === filter)
      .forEach(task => {
        const card = document.createElement("div");
        card.classList.add("task-card");

        card.classList.add(
          task.status === "Completed"
            ? "status-completed"
            : task.status === "In Progress"
            ? "status-progress"
            : "status-pending"
        );

        card.innerHTML = `
          <h3>${task.title}</h3>
          <p>Status: ${task.status}</p>
        `;

        container.appendChild(card);
      });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      renderTasks(btn.dataset.status);
    });
  });

  renderTasks();

  // ---------------- LOGIN MODAL ----------------
  const loginBtn = document.querySelector(".navbar .btn");
  const modal = document.getElementById("login-modal");
  const closeModal = document.getElementById("close-modal");
  const submitLogin = document.getElementById("login-submit");
  const loginMsg = document.getElementById("login-msg");

  loginBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    loginMsg.textContent = "";
  });

  submitLogin.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      loginMsg.style.color = "red";
      loginMsg.textContent = "Please fill all fields";
    } else {
      loginMsg.style.color = "green";
      loginMsg.textContent = "Login successful!";
      setTimeout(() => {
        modal.style.display = "none";
      }, 1000);
    }
  });

});
