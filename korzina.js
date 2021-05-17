let cart = JSON.parse(localStorage.getItem("cart"))
console.log(cart)
for(let i = 0; i < cart.length; i++){
    $("#block").append(`
        <div class = 'wrapper-block'>
        <img src="${cart[i].img_src}">
        <p>${cart[i].itemName}</p>
        <p>${cart[i].category}</p>
        <p>${cart[i].description}</p>
        </div>
    `)
}