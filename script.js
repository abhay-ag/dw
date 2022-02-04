function verify(){
    var password = document.getElementById("pass").value
    if(password == 5356){
        document.location.href = "./main.html"
    }
    else{
        document.getElementById("wr").style.visibility = 'visible'
    }
}