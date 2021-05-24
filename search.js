let userSearch = JSON.parse(localStorage.getItem("userSearch"))
let userSearchCategory = JSON.parse(localStorage.getItem("userCategory"))

console.log(userSearch)
console.log(userSearchCategory)

let drugsArray = JSON.parse(localStorage.getItem('drugs'))
let block = $("#blockSearch")

function buyItem(){
    
}

for(let i = 0; i < drugsArray.length; i++){
    if((drugsArray[i]['itemName'] === userSearch)){
        block.append(`
            <div class="products__item">
                <img src="${drugsArray[i]['img_src']}" alt="">
                <p>${drugsArray[i]['itemName']}</p>
                <span>${drugsArray[i]['category']}</span>
                <div class = 'products-items_links'>
                <p onclick = 'buyItem()' style = 'cursor:pointer'>buy item</p></div>
            </div>
        `)
    }
}