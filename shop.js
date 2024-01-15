function addToCart(productName, price, inStock) {
    if (inStock) {
        const product = {
            name: productName,
            price: price,
            quantity: 1
        };

        shoppingCart.push(product);
        updateCartDisplay();
        alert(`${productName} wurde zum Warenkorb hinzugefügt.`);
    } else {
        alert(`${productName} ist nicht auf Lager.`);
    }
}
