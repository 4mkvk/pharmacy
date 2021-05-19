let users = JSON.parse(localStorage.getItem("users"))
let loggedUser = null
let username = document.getElementById("userName")
let logExit = document.getElementById("LogExit")

if (localStorage.getItem("loggedUser") === null) {
    location.href = "login.html"
}
// else {
//     for(let i = 0; i < users.length; i++){
//         username.innerText = users[i].userName
//         logExit.innerText = "Exit"
//     }
// }



let cart = JSON.parse(localStorage.getItem("cart"))
console.log(cart)
for (let i = 0; i < cart.length; i++) {
    $("#block").append(`
        <div class = 'wrapper-block'>
        <img src="${cart[i].img_src}">
        <p>Name: <span class = 'itemName'> ${cart[i].itemName}</span></p>
        <p>Description: <span class = 'description'>${cart[i].description}</span></p>
        <div class = 'text-wrapper'>
        <p>Category: <span class = 'category'>${cart[i].category}</span></p>
        <p>Price:  <span class = 'price'>$ ${cart[i].price}</span></p>
        </div>
        <button class = 'deleteItemFromCart' onclick="removeItem(${cart[i].id})">Delete from cart</button>
        </div>
    `)

    function removeItem(id) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === id) {
                cart.splice(i, 1)
                console.log(id)
            }
        }
        location.reload()
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

