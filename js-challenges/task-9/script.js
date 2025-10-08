function sayHello() {
    alert("Hello from the external file!");
  }
function goodBye() {
    alert("Goodbye from the external file!");
}
  
  // Connect the function to the button
  let btn = document.getElementById("helloBtn");
  btn.addEventListener("click", sayHello);

  let btn2 = document.getElementById("goodByeBtn");
  btn2.addEventListener("click", goodBye);