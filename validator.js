

function clear_errors(){
errors = document.getElementsByClassName('error');
for(let item of errors)
{
    item.innerHTML = "";
}
}
    function show_error(element_id, error_meesage) {
    element = document.getElementById(element_id)
    element.getElementsByClassName('error')[0].innerHTML = error_meesage;
}
function validate_form() {
    let validate = true;
    clear_errors()
    var first_name = document.forms["signup"]['first-name'].value;
    var alphabets=/^[0-Za-z]+$/;
    if (first_name.length <= 2 && first_name.match(alphabets)) {
        show_error("first_name", "*Enter Valid First name with length greater than 2");
        validate = false;
    }
    var last_name = document.forms["signup"]['last-name'].value;
    if (last_name.length <= 2 && last_name.match(alphabets)) {
        show_error("last_name", "*Length of Last name is too short");
        validate = false;
    }
    var email = document.forms["signup"]['email'].value;
    if (email.length > 25) {
        show_error("email_div", "*Length of email is too long");
        validate = false;
    }
    
    var password = document.forms["signup"]['password'].value;
    if (password.length >= 8) {
        var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(!password.match(decimal)) 
        { 
            show_error("password_div", "*Password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
            validate=false;
        }
    }
    else{
        show_error("password_div", "*Password must be between 8 and 15 characters");
        validate = false;
    }

    var confirm_password = document.forms["signup"]['confirm-password'].value;
    if (!confirm_password.match(password)) {
        show_error("confirm_password_div", "*Confirm Password must be same as the Password");
        validate = false;
    }
    
    
    return validate
}
