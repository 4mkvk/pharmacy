let userSearch = JSON.parse(localStorage.getItem("userSearch"))
let userSearchCategory = JSON.parse(localStorage.getItem("userCategory"))

console.log(userSearch)
console.log(userSearchCategory)

let drugsArray = JSON.parse(localStorage.getItem('drugs'))
let block = $("#blockSearch")

function buyItem(){
    
}

// for(let i = 0; i < drugsArray.length; i++){
//     if((drugsArray[i]['itemName'] === userSearch)){
//         block.append(`
//             <div class="products__item">
//                 <img src="${drugsArray[i]['img_src']}" alt="">
//                 <p>${drugsArray[i]['itemName']}</p>
//                 <span>${drugsArray[i]['category']}</span>
//                 <div class = 'products-items_links'>
//                 <p onclick = 'buyItem()' style = 'cursor:pointer'>buy item</p></div>
//             </div>
//         `)
//     }
// }

for (let i = 0; i < drugsArray.length; i++) {
    if((drugsArray[i]['itemName'] === userSearch)){
    block.append(`
        <div class = 'wrapper-block'>
        <img src="${drugsArray[i].img_src}">
        <p>Name: <span class = 'itemName'> ${drugsArray[i].itemName}</span></p>
        <p>Description: <span class = 'description'>${drugsArray[i].description}</span></p>
        <div class = 'text-wrapper'>
        <p>Category: <span class = 'category'>${drugsArray[i].category}</span></p>
        <p>Price:  <span class = 'price'>$ ${drugsArray[i].price}</span></p>
        </div>
        <button class = 'deleteItemFromCart' onclick="removeItem(${drugsArray[i].id})">Buy product</button>
        </div>
    `)
    }
}


showModalSearch = () =>{
    modalSearch.style.display = 'flex'
    modalSearch.style.transition = 'all 0.3s linear 0.1ms'
    document.body.style.overflow = 'hidden'
}

hideModalSearch = () =>{
    modalSearch.style.display = 'none'
    document.body.style.overflow = 'auto'
}



function searchDrug() {
    let inputSearch = document.getElementById("itemNameSearch").value
    let categorySearch = document.getElementById("category")
    let chosenCategory = categorySearch.options[categorySearch.selectedIndex].text;

    localStorage.setItem("userSearch", JSON.stringify(inputSearch))
    localStorage.setItem("userCategory", JSON.stringify(chosenCategory))
    location.href = "search.html"
}