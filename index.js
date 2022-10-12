function validateform() 
{   var value=true; 
    var name= document.getElementById("name").value;
    var contact= document.getElementById("contact").value;
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    var confirm= document.getElementById("confirm").value;
    var gender= document.validation_form.gender;
    var c=0;
    var validname= /^[A-Za-z]{3,10}[ ]{1}[A-Za-z]{3,15}$/;
    var validemail= /^[A-Za-z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var validcontact=/^[6789][0-9]{9}$/;
    var validpass= /^[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    
    if(validname.test(name))
    {
        document.getElementById('namedanger').innerHTML=" ";
    }
    else
    {
        document.getElementById('namedanger').innerHTML="** Username is invalid!";
        value= false;
    }

    if(validcontact.test(contact))
    {
        document.getElementById('phonedanger').innerHTML=" ";
    }
    else
    {
        document.getElementById('phonedanger').innerHTML="** Contact number is invalid!";
        value= false;
    }

    if(validemail.test(email))
    {
        document.getElementById('maildanger').innerHTML=" ";
    }
    else
    {
        document.getElementById('maildanger').innerHTML="** Email is invalid!";
        value= false;
    }

    if(validpass.test(password))
    {
        document.getElementById('passdanger').innerHTML=" ";
    }
    else
    {
        document.getElementById('passdanger').innerHTML="** Password is invalid!";
        value= false;
    }

    if(confirm=="")
    {
        document.getElementById('confirmdanger').innerHTML="** Passwords do not match!";
        value= false;
    }

    if(password.match(confirm))
    {
        document.getElementById('confirmdanger').innerHTML=" ";
    }
    else
    {
        document.getElementById('confirmdanger').innerHTML="** Passwords do not match!";
        value= false;
    }

    for(var i=0;i<gender.length;i++)
    {
        if(gender[i].checked)
        {
            c=1;
            break;
        }
    }
    if(c==1)
    {
        document.getElementById('confirmdanger').innerHTML=" ";
    }
    else
    {
        {
            document.getElementById('genderdanger').innerHTML="** Select your gender!";
            value= false;
        }
    }
    
    if(value)
    {
        alert("Your information has been submitted successfully.");
    }
}