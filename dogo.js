
const textSpan = document.getElementById('textSpan');
const texts = ["Doggo", "Husky", "Labrador", "Retriever", "Weima", "Blikuo"];
let index = 0;

function changeTextAndColor() {
    textSpan.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changeTextAndColor, 3000);


