function changeColor() {
    let text = document.getElementById("text");
    text.style.color = "blue";
    text.style.fontSize = "24px";
    text.textContent = "You clicked the button!";
}

document.getElementById("btn").addEventListener("click", changeColor);
