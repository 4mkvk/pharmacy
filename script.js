let users = JSON.parse(localStorage.getItem("users"))
let loggedUser = null
let username = document.getElementById("userName")
let logExit = document.getElementById("LogExit")

if (localStorage.getItem("loggedUser") === null) {
    userName.style.display =  "none"
    logExit.innerText = "Log in"
}
else {
    for(let i = 0; i < users.length; i++){
        username.innerText = users[i].userName
        logExit.innerText = "Exit"
    }
}






class Item {
    id;
    itemName;
    description;
    price;
    img_src;
    category;
    clicksCount;
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


let btnCreate = document.getElementById('createGood');
let modalCreate = document.getElementById('modal')




let cartModal = document.getElementById("cart-modal")


hideModalCreate = () => {
    modalCreate.style.display = 'none'
    document.body.style.overflow = 'auto'
}

showModalCreate = () => {
    modalCreate.style.display = 'flex'
    modalCreate.style.transition = 'all 0.3s linear 0.1ms'
    document.body.style.overflow = 'hidden'
}

hideCartModal = () => {
    cartModal.style.display = 'none'
}



let drugsArray = JSON.parse(localStorage.getItem('drugs'))
console.log(drugsArray)

const products = $('#products')

for (let i = 0; i < drugsArray.length; i++) {
    products.append(`
            <div class="products__item">
                <img src="${drugsArray[i]['img_src']}" alt="">
                <p>${drugsArray[i]['itemName']}</p>
                <span>${drugsArray[i]['category']}</span>
                <div class = 'products-items_links'>
                <p onclick = 'deleteItem(${drugsArray[i]['id']})' style = 'cursor:pointer'>delete item</p>
                <p onclick = 'addToCart(${drugsArray[i]['id']})' style = 'cursor:pointer'>add to cart </p></div>
            </div>
`)
}

function addNewDrug() {
    let newId = drugsArray.length;
    let inputName = document.getElementById('itemName').value
    let inputImageUrl = document.getElementById('imageUrl').value
    let inputDescription = document.getElementById('desc').value
    let inputPrice = document.getElementById('price').value
    let inputCategory = document.getElementById('category').value

    let newDrug = new Item(newId, inputName, inputImageUrl, inputDescription, inputPrice, inputCategory)
    drugsArray.push(newDrug)
    localStorage.setItem('drugs', JSON.stringify(drugsArray))
    location.reload()
}

countCart = 0
let countInModal = document.getElementById('count')


function addToCart(id) {
    let drugsArray = JSON.parse(localStorage.getItem('drugs'))
    let cart = JSON.parse(localStorage.getItem("cart"))
    for (let i = 0; i < drugsArray.length; i++) {
        console.log(drugsArray[i].itemName)
        if (drugsArray[i].id === id) {
            drugsArray[i].clicksCount++;
            cart.push(drugsArray[i]);
            break;
        }
    }
    countCart++
    localStorage.setItem("cart", JSON.stringify(cart))
    localStorage.setItem("drugs", JSON.stringify(drugsArray))

    countInModal.innerHTML = 'В корзине находится ' + " " + countCart + ' товаров'
    cartModal.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}

function deleteItem(id) {
    for (let i = 0; i < drugsArray.length; i++) {
        if (drugsArray[i].id === id) {
            drugsArray.splice(i, 1)
            console.log(id)
        }
    }
    location.reload()
    localStorage.setItem('drugs', JSON.stringify(drugsArray))
}

function goToCart() {
    location.href = 'korzina.html'
}

function LogExit(){
    if (localStorage.getItem('loggedUser') === null) {
        location.href = 'login.html'

    } else {
        localStorage.removeItem('loggedUser')
        logExit.innerText = 'Log in'
        location.reload()
    }
}



function favouriteItem(){
    let drugsArray = JSON.parse(localStorage.getItem('drugs'))
    drugsArray.sort(function(first, second){
        return second.clicksCount - first.clicksCount;
    });


    for(let i = 0; i < 3; i++){
        $('#favouriteItem').append(`
        <div onclick='showFavItem(${drugsArray[i].id})' class="favourite__item">
            <img src="${drugsArray[i].img_src}" alt="">
            <div class="inline-block">
                <span id="name">${drugsArray[i].itemName}</span>
            </div>
            <p id="description">${drugsArray[i].description}</p>
            <div class="cta-cart">
                <span id="price" class="price">${drugsArray[i].price}</span>
                <a onclick="addToCart(${drugsArray[i].id})">add
                to cart</a>
            </div>
        </div>
        `)
    }
}

favouriteItem();


function showFavItem(id){
    let currentItem = null
    for(let i = 0; i < drugsArray.length; i++){
        if(drugsArray[i].id === id){
            currentItem = drugsArray[i]
        }
    }
    
}