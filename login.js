function login(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'IhrBenutzername' && password === 'IhrPasswort') {
        alert('Anmeldung erfolgreich!');
    } else {
        alert('Falscher Benutzername oder Passwort. Bitte versuchen Sie es erneut.');
    }
}
