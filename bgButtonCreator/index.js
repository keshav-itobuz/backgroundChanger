let count = 0;
const buttonSection = document.getElementById("buttonSection");

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.body.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        document.body.style.backgroundColor = getRandomColor();
        count++;
        if (count % 4 === 0) {
            const btn = document.createElement('button');
            btn.innerText = "Change"
            btn.setAttribute("class", "p-4 rounded-2");
            buttonSection.appendChild(btn);
        }
    }
})


