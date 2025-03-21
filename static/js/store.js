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

    let existingTapUp = parseInt(localStorage.getItem("tapUp"));

    let count = 0;
    
    if(!isNaN(existingTapUp)) count += existingTapUp;

    count += 1;

    localStorage.setItem("tapUp", count)

});