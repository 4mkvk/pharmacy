let users = JSON.parse(localStorage.getItem("users"))

let login = document.getElementById("userLogin")
let loginAlert = document.getElementById("loginAlert")
let password = document.getElementById("password")
let passwordAlert = document.getElementById("passwordAlert")

console.log(users)

let loginBtn = () => {
    for (i = 0; i < users.length; i++) {
        if (login.value === users[i].userLogin && password.value === users[i].userPassword) {
            let loggedUser = {
                userId: users[i].userId,
                userName: users[i].userName,
                userLogin: users[i].userLogin,
                userPassword: users[i].userPassword,
            }
            localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
            location.href = 'index.html'
        } else {
            login.style.border = '2px solid red'
            password.style.border = '2px solid red'
            passwordAlert.innerText = 'Неверные данные!'
        }

    }
}