let username = document.getElementById("userName")
let login = document.getElementById("userLogin")
let loginAlert = document.getElementById("loginAlert")
let password = document.getElementById("password")
let passwordRepeat = document.getElementById("passwordRepeat")
let passwordAlert = document.getElementById("passwordAlert")
let users = JSON.parse(localStorage.getItem("users"))

class Item {
    id;
    itemName;
    description;
    price;
    img_src;
    category;
    constructor(NewId, newItemName, newImage, newDescription, newPrice, newCategory) {
        this.id = NewId;
        this.itemName = newItemName;
        this.description = newDescription;
        this.price = newPrice;
        this.img_src = newImage
        this.category = newCategory
    }
    get itemName() {
        return this.itemName;
    }
    set itemName(newItemName) {
        this.itemName = newItemName;
    }
    get description() {
        return this.description;
    }
    set description(newDescription) {
        this.description = newDescription;
    }
    get price() {
        return this.price;
    }
    set price(newPrice) {
        this.price = newPrice;
    }
    get img() {
        return this.img_src;
    }
    set img(newImage) {
        this.img_src = newImage;
    }
    get category() {
        return this.category;
    }
    set category(newCategory) {
        this.category = newCategory;
    }
}



let register = () => {
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
    let drugs = [
        new Item(0, 'Oleg1', 'https://s0.rbk.ru/v6_top_pics/media/img/7/78/755953432670787.jpg', 'Олег Тиньков поставляет лекарства', 20.99, 'Aleg category'),
        new Item(1, 'Oleg2', 'https://s0.rbk.ru/v6_top_pics/media/img/7/78/755953432670787.jpg', 'Олег Тиньков поставляет лекарства', 20.99, 'Aleg category'),
        new Item(2, 'Oleg3', 'https://s0.rbk.ru/v6_top_pics/media/img/7/78/755953432670787.jpg', 'Олег Тиньков поставляет лекарства', 20.99, 'Aleg category')
    ]
    let users = []
    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('drugs', JSON.stringify(drugs))
    localStorage.setItem('cart', JSON.stringify([]))
}

