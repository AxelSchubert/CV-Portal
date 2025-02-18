const secretButton = document.querySelector(".footer-copyright");
let isBlack = false;
secretButton.addEventListener("click", easterEggOne);

function easterEggOne() {
    const body = document.body;
    isBlack = !isBlack;
    body.style.backgroundColor = isBlack ? "black" : "#f8a546";

}

const secretCode = '1337'
let input = '';

document.addEventListener('keydown', (event) => {
    input += event.key;

    if (input.length > 4) {
        input = input.slice(-4);
    }
    

    if (input === secretCode) {
        easterEggTwo();
        input = '0000'; 
    }
});

function easterEggTwo() {
    let popup = document.createElement("d");
    let popupTitle = document.createElement("h3");
    let popupText = document.createElement("p");
    popup.classList.add("easter-egg");
    popupTitle.textContent = "Easter egg!1!1";
    popupText.innerHTML ="Du skrev den hemliga koden 1337<br>Klicka var som helst på sidan för att gå tillbaka";
    popup.appendChild(popupTitle);
    popup.appendChild(popupText);
    document.body.appendChild(popup);
    document.body.style.backgroundColor = "hotpink";
    document.addEventListener("pointerup", function(){
        document.body.removeChild(popup);
        document.body.style.backgroundColor = "#f8a546";
    })
}