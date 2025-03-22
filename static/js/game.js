const enemy = document.querySelector(".enemy").querySelector("img")
const username = document.getElementById("username");
const money = document.getElementById("money");
const lvl = document.getElementById("lvl");


let audio = null;
let touchTimeout;

startGame();

function startGame(){
    username.textContent = localStorage.getItem("login");
    money.textContent = localStorage.getItem("money");
    lvl.textContent = (localStorage.getItem("lvl") == null) ? 1 : localStorage.getItem("lvl");
    
}



function handlePress() {
    enemy.src = "../images/cat_laught.png";
    let moneyCount = 0;
    enemy.style.transform = "scale(110%)";

    if (isNaN(parseInt(localStorage.getItem("tapUp")))) {
        localStorage.setItem("tapUp", "1");
    }

    let currentMoney = isNaN(parseInt(money.textContent)) ? 0 : parseInt(money.textContent);
    moneyCount += parseInt(localStorage.getItem("tapUp")) + currentMoney;
    
    money.textContent = moneyCount;
    localStorage.setItem("money", moneyCount);

    playSound("puk");
    playSound("cat_sound");
}

function handleRelease() {
    clearTimeout(touchTimeout); // Очищаем таймер, если отпустили раньше времени
    enemy.style.transform = "scale(100%)";
    enemy.src = "../images/cat_idle.png";
    audio.pause();
}

// Добавляем обработчики для ПК
enemy.addEventListener("mousedown", handlePress);
enemy.addEventListener("mouseup", handleRelease);

// Добавляем обработчики для мобильных устройств с задержкой
enemy.addEventListener("touchstart", (event) => {
    event.preventDefault();
    touchTimeout = setTimeout(handlePress, 300);
});

enemy.addEventListener("touchend", handleRelease);
enemy.addEventListener("contextmenu", (event) => {
    event.preventDefault(); 
});

enemy.addEventListener("touchend", handleRelease);
export const playSound = (name) =>{
    audio = new Audio(`../sound/${name}.mp3`)
    audio.play();
    
}