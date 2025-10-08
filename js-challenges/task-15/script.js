const toggleImage = () => {
    const image = document.getElementById("image");
    if (image.src.match("cat.jpg")) {
        image.src = "dog.jpg";
    } else {
        image.src = "cat.jpg";
    }
}