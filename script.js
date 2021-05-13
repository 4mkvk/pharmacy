class Item{
    #name;
    #description;
    #price;

    constructor(newName, newDescription, newPrice){
        this.#name = newName;
        this.#description = newDescription;
        this.#price = newPrice;
    }

    get name(){
        return this.#name;
    }

    set name(newName){
        this.#name = newName;
    }

    get description(){
        return this.#description;
    }

    set description(newDescription){
        this.#description = newDescription;
    }

    get price(){
        return this.#price;
    }

    set price(newPrice){
        this.#price = newPrice;
    }
}

let addToCart = (name, desc, price) =>{
    // let item = new Item(name, desc, price)

    localStorage.setItem("item", JSON.stringify({name: name, description: desc, price: price}))
    console.log(item)
}