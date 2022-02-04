function verify(){
    var password = document.getElementById("pass").value
    if(password == 5356){
        document.getElementById("lessgo").innerHTML = ''
    }
    else{
        document.getElementById("wr").style.visibility = 'visible'
    }
}
function findit(){
    window.find(document.getElementById("search").value)
}