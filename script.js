let users = JSON.parse(localStorage.getItem("users"))
let loggedUser = null
let username = document.getElementById("userName")

if (localStorage.getItem("loggedUser") === null) {
    userName.style.display = "none"
    username.innerText = "Войдите"
}
else {
    for (let i = 0; i < users.length; i++) {
        username.innerText = users[i].userName
    }
}






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


let btnCreate = document.getElementById('createGood');
let modalCreate = document.getElementById('modal')

showModalCreate = () => {
    modalCreate.style.display = 'flex'
    modalCreate.style.transition = 'all 0.3s linear 0.1ms'
    document.body.style.overflow = 'hidden'
}
hideModalCreate = () => {
    modalCreate.style.display = 'none'
    document.body.style.overflow = 'auto'
}


let cartModal = document.getElementById('cart-modal');

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
    let cart = JSON.parse(localStorage.getItem("cart"))
    for (let i = 0; i < drugsArray.length; i++) {
        console.log(drugsArray[i].itemName)
        if (drugsArray[i].id === id) {
            cart.push(drugsArray[i]);
            break;
        }
    }
    countCart++
    localStorage.setItem("cart", JSON.stringify(cart))

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