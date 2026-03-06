function palidrome(str){
    if(str===str.split("").reverse("").join("")){
        return(str, "is a palidrome")
    }
    else{
        return(str,"is not a palidrome")
    }
    
}
console.log(palidrome("amma"))