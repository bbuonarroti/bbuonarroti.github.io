// shop.js
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.getElementById('addToCartButton');
    const removeFromCartButton = document.getElementById('removeFromCartButton');

    if (addToCartButton) {
        addToCartButton.addEventListener('click', addToCart);
    }

    if (removeFromCartButton) {
        removeFromCartButton.addEventListener('click', removeFromCart);
    }
});

function addToCart() {
    const productId = '123'; // Hier kannst du die Produkt-ID dynamisch setzen
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produkt wurde zum Warenkorb hinzugefügt.');
}

function removeFromCart() {
    const productId = '123'; // Hier kannst du die Produkt-ID dynamisch setzen
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produkt wurde aus dem Warenkorb entfernt.');
}
