let count = 0;
let buttonSection = document.getElementById("buttonSection");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.body.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        document.body.style.backgroundColor = getRandomColor();
        count++;
        if (count % 4 === 0) {
            let btn = document.createElement('button');
            btn.innerText = "Change"
            btn.setAttribute("class", "p-4 rounded-2");
            buttonSection.appendChild(btn);
        }
    }
})


