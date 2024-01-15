let shoppingCart = [];

function addToCart() {
    const product = {
        name: "Produktname", 
        quantity: 1 
    };

    shoppingCart.push(product);

    updateCartDisplay();
}

function removeFromCart(index) {
    shoppingCart.splice(index, 1);

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById("cartList");

    cartList.innerHTML = "";

    shoppingCart.forEach((product, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} x ${product.quantity}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Entfernen";
        removeButton.addEventListener("click", () => removeFromCart(index));

        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });
}
