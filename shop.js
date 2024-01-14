// Hier wird der Warenkorb als Array gespeichert
let shoppingCart = [];

// Funktion zum Hinzufügen eines Produkts zum Warenkorb
function addToCart() {
    const product = {
        name: "Produktname", // Füge hier den tatsächlichen Produktnamen hinzu
        quantity: 1 // Initialmenge
    };

    // Füge das Produkt zum Warenkorb hinzu
    shoppingCart.push(product);

    // Aktualisiere die Anzeige des Warenkorbs
    updateCartDisplay();
}

// Funktion zum Entfernen eines Produkts aus dem Warenkorb
function removeFromCart(index) {
    // Entferne das Produkt anhand des Index
    shoppingCart.splice(index, 1);

    // Aktualisiere die Anzeige des Warenkorbs
    updateCartDisplay();
}

// Funktion zum Aktualisieren der Warenkorb-Anzeige
function updateCartDisplay() {
    const cartList = document.getElementById("cartList");

    // Leere die aktuelle Anzeige
    cartList.innerHTML = "";

    // Durchlaufe den Warenkorb und füge jedes Produkt zur Anzeige hinzu
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
