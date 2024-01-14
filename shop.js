<!-- shop.js -->
<script>
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
        // Hier solltest du die Produktinformationen sammeln, z.B. Produkt-ID, Menge, etc.
        const productId = '123';
        const quantity = 1;

        // API-Anfrage zum Hinzufügen zum Warenkorb
        fetch('/api/add-to-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId, quantity }),
        })
        .then(response => response.json())
        .then(data => {
            // Hier kannst du auf die Antwort des Servers reagieren, z.B. eine Bestätigung anzeigen
            alert('Produkt wurde zum Warenkorb hinzugefügt.');
        })
        .catch(error => {
            console.error('Fehler beim Hinzufügen zum Warenkorb:', error);
        });
    }

    function removeFromCart() {
        // Hier solltest du die Produktinformationen sammeln, z.B. Produkt-ID, Menge, etc.
        const productId = '123';

        // API-Anfrage zum Entfernen aus dem Warenkorb
        fetch('/api/remove-from-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId }),
        })
        .then(response => response.json())
        .then(data => {
            // Hier kannst du auf die Antwort des Servers reagieren, z.B. eine Bestätigung anzeigen
            alert('Produkt wurde aus dem Warenkorb entfernt.');
        })
        .catch(error => {
            console.error('Fehler beim Entfernen aus dem Warenkorb:', error);
        });
    }
</script>
