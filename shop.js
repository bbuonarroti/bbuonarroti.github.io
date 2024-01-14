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

function goBack() {
    window.location.href = 'index.html';
}

function openAboutUs() {
    window.location.href = 'aboutus.html';
}

function openCart() {
    window.location.href = 'cart.html';
}

function addToCart() {
    const productId = '123';
    const quantity = 1;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productId, quantity });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produkt wurde zum Warenkorb hinzugefügt.');
}

function removeFromCart() {
    const productId = '123';
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.productId !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produkt wurde aus dem Warenkorb entfernt.');
}
