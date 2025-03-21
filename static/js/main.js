const btn = document.querySelector(".btn-log-in").querySelector("a");

const logInForm = document.logInForm;

btn.addEventListener("click", validate);

function validate(e){
    if(!logInForm.login.checkValidity() && !logInForm.password.checkValidity()){
        alert("Все поля должны быть заполнены!")
        e.preventDefault();


    }
    else{
        const login = document.getElementsByName("login")[0];
        const password = document.getElementsByName("password")[0];
        
        localStorage.setItem("login", login.value)
        localStorage.setItem("password", password.value);
    }
}
