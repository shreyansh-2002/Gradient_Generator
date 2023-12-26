function getRandomColor() {
    const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.background = `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;
    document.getElementById("colorcode").innerText = `Gradient: ${randomColor1} - ${randomColor2}`;
}