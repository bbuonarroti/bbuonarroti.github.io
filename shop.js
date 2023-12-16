function openShop() {
    const products = [
        { name: 'Produkt 1', image: 'bilder/wepik-export-20231209072552hu6K.jpeg' },
    ];

    localStorage.setItem('products', JSON.stringify(products));
    window.location.href = 'shop.html';
}
