function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('pass').value;

    //password empty
    if (username === "" || password === "") {
        alert("Both username and password are required.");
        return false;
    }

    if(username==="admin" && password==="admin"){
        window.location.href = 'homepage.html';
        alert('hello error');
    }
}

function routeToSignUp(){
    window.location.href='signup.html';
}