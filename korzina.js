class Item{
    #name;
    #description;

    constructor(newName, newDescription){
        this.#name = newName;
        this.#description = newDescription;
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
}

let addToCart = () =>{
    let name = document.getElementById("name").innerText
    let description = document.getElementById("description").innerText

    let item = new Item(name, description)

    localStorage.setItem("item", item)
    console.log(item)
}