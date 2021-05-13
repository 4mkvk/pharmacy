let username = document.getElementById("userName")
let login = document.getElementById("userLogin")
let loginAlert = document.getElementById("loginAlert")
let password = document.getElementById("password")
let passwordRepeat = document.getElementById("passwordRepeat")
let passwordAlert = document.getElementById("passwordAlert")
let users = JSON.parse(localStorage.getItem("users"))

let register = () =>{
    if (login.value.length < 6) {
        login.style.border = "2px solid red"
        loginAlert.innerHTML = "Логин должен состоять как минимум из 6 знаков"
    }
    else if (password.value.length < 8 && passwordRepeat.value.length < 8) {
        password.style.border = "2px solid red"
        passwordRepeat.style.border = "2px solid red"
        passwordAlert.innerHTML = "Пароль должен состоять как минимум из 8 знаков"
        loginAlert.innerText = ""
        login.style.border = ""
    }
    else if (password.value !== passwordRepeat.value) {
        password.style.border = "2px solid red"
        passwordRepeat.style.border = "2px solid red"
        passwordAlert.innerHTML = "Пароли не совпадают"
        loginAlert.innerText = ""
        login.style.border = ""
    }
    else {
        let random = Math.floor(Math.random() * 1000) + 1;
        let user = {
            userId: random,
            userName: username.value,
            userLogin: login.value,
            userPassword: password.value,
        }
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        location.href = "login.html"
    }
}

function createTestsArray() {
    let tests = []
    let users = []
    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('testsArray', JSON.stringify(tests))
}