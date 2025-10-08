function greetUser() {
  let name = document.getElementById("nameInput").value;
  let color = document.getElementById("colorInput").value;
  if (name.trim() === "") {
    alert("Please enter your name first!");
  } else {
    alert("Hello, " + name + "!" + " your favorite color is: " + color);
  }
}

document.getElementById("greetBtn").addEventListener("click", greetUser);