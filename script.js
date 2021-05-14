let userName = document.getElementById("userName")
let loggedUser = null

if(localStorage.getItem("loggedUser") === null){
    userName.innerHTML = 
}else{
    userName.
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




let drugsArray = JSON.parse(localStorage.getItem('drugs'))
console.log(drugsArray)

const products = $('#products')

for (let i = 0; i < drugsArray.length; i++) {
    products.append(`
            <div class="products__item">
                <img src="${drugsArray[i]['img_src']}" alt="">
                <p>${drugsArray[i]['itemName']}</p>
                <span>${drugsArray[i]['category']}</span>
                <p onclick = 'deleteItem(${drugsArray[i]['id']})'>delete item</p>
                <p onclick = 'addToCart()'>add to cart </p>
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

    let newDrug = new Item(newId ,inputName, inputImageUrl, inputDescription, inputPrice, inputCategory)
    drugsArray.push(newDrug)
    localStorage.setItem('drugs', JSON.stringify(drugsArray))
    location.reload()
}

function addToCart(id){
    let cart = JSON.parse(localStorage.getItem("cart"))
    for (let i = 0; i < drugsArray.length; i++) {
        console.log(drugsArray[i].itemName)
        if (drugsArray[i].id === id) {
            cart.push(drugsArray[i]);
            break;
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart        ))
}

function deleteItem(id) {
    for (let i = 0; i < drugsArray.length; i++) {
        if (drugsArray[i].id === id) {
            drugsArray.splice(i, 1)
            console.log(id)
        }
    }
    localStorage.setItem('drugs', JSON.stringify(drugsArray))

    console.log(' ne rabotaet')
}