function findit(){
    if (window.find(document.getElementById("search").value)){
        window.find(document.getElementById("search").value)
    }
    else{
        window.alert("Not Found")
        document.getElementById("search").value = ''
    }
}
function check(){
    alert("Works")
}