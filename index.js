function valiadteform() 
{
    var name= document.getElementById("name").value;
    var contact= document.getElementById("contact").value;
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var validname= /^[A-Za-z]{3,30}$/;
    var validemail= /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var validcontact=/^[6789][0-9]{9}$/;
    var validpass= /^(?=.*[0-9])(?=.[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    
    if(validname.test(name))
    {
        document.getElementById('namedanger').innerHTML=" ";
    }
    else
    {
        document.getElementById('namedanger').innerHTML="** Username is invalid!";
        return false;
    }

    if(validcontact.test(contact))
    {
        document.getElementById('phonedanger').innerHTML=" ";
    }
    else
    {
        document.getElementById('phonedanger').innerHTML="** Contact number is invalid!";
        return false;
    }

    if(validemail.test(email))
    {
        document.getElementById('maildanger').innerHTML=" ";
    }
    else
    {
        document.getElementById('maildanger').innerHTML="** Email is invalid!";
        return false;
    }

    if(validpass.test(password))
    {
        document.getElementById('passdanger').innerHTML=" ";
    }
    else
    {
        document.getElementById('passdanger').innerHTML="** Password is invalid!";
        return false;
    }

    if(password.match(confirm))
    {
        document.getElementById('confirmdanger').innerHTML=" ";
    }
    else
    {
        document.getElementById('confirmdanger').innerHTML="** Password does not match!";
        return false;
    }
}