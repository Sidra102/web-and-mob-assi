var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var email = document.getElementById("email");
var password = document.getElementById("password");



function showsignedup() {
    if (firstname.value.length === 0) {
        alert("Please enter your First Name");
        firstname.focus();
        return false
    }

    else if (lastname.value.length === 0) {
        alert("Please enter your Last Name");
        lastname.focus();
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

    else {
        alert("Welcome! You Have Successfully Signed Up.");
        window.location.reload();
    }
}

function showloggedin() {
    if (email.value.length === 0) {
        alert("Please enter your Email");
        email.focus();
        return false
    }

    else if (password.value.length === 0) {
        alert("Please enter your Password");
        password.focus();
        return false
    }

    else {
        alert("Welcome! You Have Successfully Logged In.");
        window.location.reload();
    }
}



