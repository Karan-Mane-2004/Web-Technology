document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === "karan" && password === "2085") {
      message.style.color = "green";
      message.innerText = "Login successful!";
    } else {
      message.style.color = "red";
      alert();
      message.innerText = "Invalid username or password";
    }
  });
