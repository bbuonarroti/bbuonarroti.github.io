// shop.js

// Initialisieren Sie den Warenkorb (leeres Array), wenn er nicht bereits existiert
let shoppingCart = shoppingCart || [];

// Funktion zum Hinzufügen eines Produkts zum Warenkorb
function addToCart() {
    // Fügen Sie das Produktobjekt zum Warenkorb hinzu (z.B., Produktname und Preis)
    const product = {
        name: '0,5 Liter',
        price: 5.99
    };
    shoppingCart.push(product);

    // Aktualisieren Sie die Anzeige im Warenkorb (optional)
    updateCartDisplay();
}

// Funktion zum Aktualisieren der Anzeige im Warenkorb (optional)
function updateCartDisplay() {
    // Hier können Sie die Darstellung des Warenkorbs aktualisieren (z.B., Anzahl der Produkte)
    console.log('Warenkorb aktualisiert:', shoppingCart);
}

// Selektieren Sie den Button mit der ID "addToCartButton"
const addToCartButton = document.getElementById('addToCartButton');

// Überprüfen Sie, ob der Button existiert, bevor Sie einen Event-Listener hinzufügen
if (addToCartButton) {
    // Fügen Sie einen Event-Listener hinzu, um die Funktion addToCart() aufzurufen, wenn der Button geklickt wird
    addToCartButton.addEventListener('click', addToCart);
}
