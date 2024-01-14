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
    alert('Produkt wurde zum Warenkorb hinzugefügt.');
}

function removeFromCart() {
    alert('Produkt wurde aus dem Warenkorb entfernt.');
}
