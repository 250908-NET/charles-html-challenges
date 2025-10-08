const addListItem = () => {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = "New Item";
    ul.appendChild(li);
}

