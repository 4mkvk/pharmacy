class Item {
    itemName;
    description;
    price;
    img_src;
    category;
    constructor(newItemName, newImage, newDescription, newPrice, newCategory) {
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
    console.log(drugsArray[i]['img'])
    products.append(`
            <div class="products__item">
                <img src="${drugsArray[i]['img_src']}" alt="">
                <p>${drugsArray[i]['itemName']}</p>
                <span>${drugsArray[i]['category']}</span>
                <p onclick = 'deleteItem("${drugsArray[i]['itemName']}")'>delete item</p>
                <p id = 'addToCart'>add to cart </p>
            </div>
`)
}

function addNewDrug() {
    let inputName = document.getElementById('itemName').value
    let inputImageUrl = document.getElementById('imageUrl').value
    let inputDescription = document.getElementById('desc').value
    let inputPrice = document.getElementById('price').value
    let inputCategory = document.getElementById('category').value

    let newDrug = new Item(inputName, inputImageUrl, inputDescription, inputPrice, inputCategory)
    drugsArray.push(newDrug)
    localStorage.setItem('drugs', JSON.stringify(drugsArray))
    location.reload()
}

function deleteItem(itemName) {
    for (let i = 0; i < drugsArray.length; i++) {
        console.log(drugsArray[i].itemName)
        if (drugsArray[i].itemName === itemName) {
            drugsArray.splice(i, 1)
            console.log(drugsArray)
        }
    }
    localStorage.setItem('drugs', JSON.stringify(drugsArray))

    console.log(' ne rabotaet')
}