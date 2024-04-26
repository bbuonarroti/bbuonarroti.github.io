const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCart = document.querySelector(".listCart");
const total = document.querySelector(".total");
const body = document.querySelector(".body");
const quantity = document.querySelector(".quantity")

openShopping. addEventListener("click", () => {
    body.classList.add("active")
    })
    closeShopping. addEventListener ("click", () => {
    body.classList.remove ("active")
    })

    let prodcuts = [
        {
            id: 1,
            name :"PRODUCT 1",
            Images: "glass.jpg",
            price: 2000
        },
        {
            id: 2,
            name :"PRODUCT 2",
            Images: "2.png",
            price: 2000
        },
        {
            id: 3,
            name :"PRODUCT 3",
            Images: "3.png",
            price: 2000
        },
        {
            id: 4,
            name :"PRODUCT 4",
            Images: "4.png",
            price: 2000
        },
        {
            id: 5,
            name :"PRODUCT 5",
            Images: "5.png",
            price: 2000
        },
        {
            id: 6,
            name :"PRODUCT 6",
            Images: "glass.jpg",
            price: 2000
        }

    ]
    let listCarts = [];

    const initApp = () => {
        prodcuts.forEach((value, key) => {
            let newDiv = document.createElement("div");
            newDiv.classList.add("item")
            newDiv.innerHTML = `
            <img src ="img/${value.Images}">
            <div class ="titel">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>
            `;
            list.appendChild(newDiv)
        })
    }

    initApp()

    const addToCart = (key) => {
        if(listCart[key] == null){
            
        }
    }