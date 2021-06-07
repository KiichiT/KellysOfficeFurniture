function validateShipping(){
    var fullName = document.forms["shipping"]["fullName"].value;
    var address1 = document.forms["shipping"]["address1"].value;
    var address2 = document.forms["shipping"]["address2"].value;
    var city = document.forms["shipping"]["city"].value;
    var state = document.forms["shipping"]["state"].value;
    var zip = document.forms["shipping"]["zip"].value;
    var phoneNum = document.forms["shipping"]["phoneNum"].value;
    if ((fullName == "") || (address1 == "") || (address2 == "") || (city == "") 
        || (state == "")|| (zip == "") || (phoneNum == "")){
        alert("Missing Field");
        return false;
    }
    else if (phoneNum.length()<10){
        alert(" Your phone number needs to be 10 digits");
        return false;
    }
    else{
        window.location.href='/html/Payment.html'
    }
}

