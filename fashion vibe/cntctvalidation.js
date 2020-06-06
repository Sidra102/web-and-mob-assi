var names = document.getElementById("names");
var email = document.getElementById("email");
var password = document.getElementById("password");
var message = document.getElementById("message");

function showsignedup() {
    if (names.value.length === 0) {
        alert("Please enter your Name");
        name.focus();
        return false
    }

    else if (email.value.length === 0) {
        alert("Please enter your Email");
        email.focus();
        return false
    }

    else if (password.value.length === 0) {
        alert("Please enter your Password");
        password.focus();
        return false
    }

    else if (message.value.length === 0) {
        alert("Please enter your Message");
        message.focus();
        return false
    }

    else {
        alert("Welcome! You Have Successfully Submit the Contact form. We'll contact you soon.");
        window.location.reload();
    }
}