//Add a “Toggle Dark Mode” button that switches the page between light and dark themes by toggling a CSS class on the <body> element.
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

let input = document.getElementById("taskInput");
let button = document.getElementById("addTask");        
let list = document.getElementById("taskList");
let removeButton = document.getElementById("removeTask");
let markButton = document.getElementById("markTaskAsCompleted");

button.addEventListener("click", function() {
  let taskText = input.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function() {
    li.classList.toggle("done");
  });

  list.appendChild(li);
  input.value = "";
});

removeButton.addEventListener("click", function() {
    list.innerHTML = "";
});

markButton.addEventListener("click", function() {
    let items = list.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        items[i].classList.add("done");
    }
});

