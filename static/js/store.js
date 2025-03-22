import { playSound } from "./game.js";

const btnStore = document.getElementById("store");
const store = document.querySelector(".store");

const tapUp = document.getElementById("tapUp");
const lvlUp = document.getElementById("lvlUp");





let isOpen = false;

btnStore.addEventListener("click", () => {

    if(!isOpen){
        store.style.display = "block";
        isOpen = true;
    }
    else{
        store.style.display = "none";
        isOpen = false;
    }

});

tapUp.addEventListener("click", () => {

    let money = document.getElementById("money");
    let currentMoney = isNaN(parseInt(money.textContent)) ? 0 : parseInt(money.textContent);
    if(currentMoney >= 100){
        playSound("pay");
        let existingTapUp = parseInt(localStorage.getItem("tapUp"));

        let count = 0;
        
        if(!isNaN(existingTapUp)) count += existingTapUp;

        count += 1;

        localStorage.setItem("tapUp", count)

        currentMoney -= 100;
        localStorage.setItem("money", currentMoney)
        money.textContent = currentMoney;
    }
    else{
        playSound("pay_fail");
        alert("Недостаточно средств");
    }

    

});

lvlUp.addEventListener("click", () => {
    
    let lvl = document.getElementById("lvl");
    let money = document.getElementById("money");
    
    let currentMoney = isNaN(parseInt(money.textContent)) ? 0 : parseInt(money.textContent);
    if(currentMoney >= 500){
        playSound("pay");
        let currentLvl = parseInt(lvl.textContent);   
        currentLvl++;
        localStorage.setItem("lvl", currentLvl);
        lvl.textContent = currentLvl;

        currentMoney -= 500;
        localStorage.setItem("money", currentMoney)
        money.textContent = currentMoney;
    }
    else{
        playSound("pay_fail");
        alert("Недостаточно средств");
    }

    
});
