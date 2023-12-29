function ValidateForm(){
    var username=document.getElementById('username').value;
    var pass=document.getElementById('pass').value;
    var cpass=document.getElementById('cpass').value;

    if(username==='' || pass==='' || cpass===''){
        alert('username , password and confirm password are all required.');
    }else{
        if(pass!=cpass){
            alert('Password and Confirm password not matching');
        }else{
            window.location.href = 'homepage.html';
            alert('Signed up');
            
        }
    }
}

function routeToLogin(){
    window.location.href='login.html';
}