const enemy = document.querySelector(".enemy").querySelector("img")
const username = document.getElementById("username");
const money = document.getElementById("money");
const lvl = document.getElementById("lvl");


let moneyCount = 0;

enemy.addEventListener("mousedown", () => {
    enemy.style.transform = "scale(110%)";
    if(isNaN(parseInt(localStorage.getItem("tapUp")))) localStorage.setItem("tapUp", "1");
    moneyCount += parseInt(localStorage.getItem("tapUp"));
    money.textContent = `Баланс ${moneyCount}`;
    playSound("puk");
});
enemy.addEventListener("mouseup", () =>{
    enemy.style.transform = "scale(100%)";
});

function playSound(name){
    let audio = new Audio(`../sound/${name}.mp3`)
    audio.play();
}