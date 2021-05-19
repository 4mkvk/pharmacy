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
    clicksCount
    constructor(NewId, newItemName, newImage, newDescription, newPrice, newCategory) {
        this.id = NewId;
        this.itemName = newItemName;
        this.description = newDescription;
        this.price = newPrice;
        this.img_src = newImage
        this.category = newCategory
        this.clicksCount = 0
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
        new Item(0, 'Aspirin', 'https://acetylsalicylicacid.ru/wp-content/uploads/2016/11/aspirin.jpg', 'With Aspirin you won`t be scared when you got a headache', 2.99, 'Pharmacy storage'),
        new Item(1, 'Kardiomagnil', 'https://www.stada.ru/upload/iblock/96b/307314_3_2_product_crop_840_30tab_75mg_2x_.png', 'Cardiomagnil helps your heart work and improves your well-being', 20.99, 'Pharmacy storage'),
        new Item(2, 'Palexia', 'https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp800Wx800H_30990002_1d6pg4622', 'Palexia Retard Tab 100Mg Caj C 30', 12.99, 'Pharmacy storage'),
        new Item(3, 'Abirat', 'https://hb.bizmrg.com/medvisor.ru/resize_cache/67872/bbe99bd36349dc010bbdb5b5ecf913ff/iblock/828/828aa8683c6816527f64b77c9988fd34/0d17b15c81b50c4dc119eba0bd7f6718.png', 'Before starting treatment with AbiratR, serum transaminase activity and bilirubin concentration should be measured every 2 weeks during the first 3 months of treatment, and then monthly.', 20.99, 'Pharmacy storage'),
        new Item(4, 'Reductil', 'https://www.rup.ee/rus/media/k2/items/cache/1c4c10929bd0f61b08bfef37a7edd29b_XL.jpg', 'Reductil is more than pharmacy goods', 15.25, 'Pharmacy storage'),
        new Item(5, 'Aspirin', 'https://acetylsalicylicacid.ru/wp-content/uploads/2016/11/aspirin.jpg', 'With Aspirin you won`t be scared when you got a headache', 2.99, 'Pharmacy storage'),
        new Item(6, 'Kardiomagnil', 'https://www.stada.ru/upload/iblock/96b/307314_3_2_product_crop_840_30tab_75mg_2x_.png', 'Cardiomagnil helps your heart work and improves your well-being', 20.99, 'Pharmacy storage'),
        new Item(7, 'Palexia', 'https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp800Wx800H_30990002_1d6pg4622', 'Palexia Retard Tab 100Mg Caj C 30', 12.99, 'Pharmacy storage'),
        new Item(8, 'Abirat', 'https://hb.bizmrg.com/medvisor.ru/resize_cache/67872/bbe99bd36349dc010bbdb5b5ecf913ff/iblock/828/828aa8683c6816527f64b77c9988fd34/0d17b15c81b50c4dc119eba0bd7f6718.png', 'Before starting treatment with AbiratR, serum transaminase activity and bilirubin concentration should be measured every 2 weeks during the first 3 months of treatment, and then monthly.', 20.99, 'Pharmacy storage'),
        new Item(9, 'Reductil', 'https://www.rup.ee/rus/media/k2/items/cache/1c4c10929bd0f61b08bfef37a7edd29b_XL.jpg', 'Reductil is more than pharmacy goods', 15.25, 'Pharmacy storage'),

    ]
    let users = []
    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('drugs', JSON.stringify(drugs))
    localStorage.setItem('cart', JSON.stringify([]))
}

