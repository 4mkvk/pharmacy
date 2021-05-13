let item = JSON.parse(localStorage.getItem("item"))
console.log(item)
$("#block").append(`
    <p>${item.name}</p>
`)