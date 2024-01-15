let shoppingCart = [];

function addToCart(productName, price, inStock) {
    if (inStock) {
        const product = {
            name: productName,
            price: price,
            quantity: 1
        };

        shoppingCart.push(product);
        updateCartDisplay();
        displayPurchaseAlert(productName, price);
    } else {
        displayOutOfStockAlert(productName);
    }
}

function displayPurchaseAlert(productName, price) {
    alert(`Produkt: ${productName}\nPreis: ${price.toFixed(2)} €\nProdukt wurde zum Warenkorb hinzugefügt.`);
}

function displayOutOfStockAlert(productName) {
    alert(`Das Produkt "${productName}" ist nicht auf Lager.`);
}

function removeFromCart(index) {
    shoppingCart.splice(index, 1);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById("cartList");
    const priceAndAvailability = document.getElementById("priceAndAvailability");

    cartList.innerHTML = "";
    priceAndAvailability.textContent = "";

    let totalPrice = 0;

    shoppingCart.forEach((product, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} x ${product.quantity}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Entfernen";
        removeButton.addEventListener("click", () => removeFromCart(index));

        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);

        totalPrice += product.price * product.quantity;
    });

    priceAndAvailability.textContent = `Gesamtpreis: ${totalPrice.toFixed(2)} €`;
}
