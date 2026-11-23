let userPoint = 0
let computerPoint = 0
function jatek(userChoice){
let valasztasok = ["ko","papir","ollo"]
let random = Math.floor(Math.random() * 3) 
document.getElementById(`ko`).style.borderWidth = "0px"
document.getElementById(`papir`).style.borderWidth = "0px"
document.getElementById(`ollo`).style.borderWidth = "0px"



if(userChoice == "ko"){
    document.getElementById(`ko`).style.borderWidth = "5px"
}
if(userChoice == "papir"){
    document.getElementById(`papir`).style.borderWidth = "5px"
}
if(userChoice == "ollo"){
    document.getElementById(`ollo`).style.borderWidth = "5px"
}
let computerChoice = valasztasok[random]
document.getElementById("gepValasztott").src = `img/${computerChoice}.png`
console.log(computerChoice)


if((userChoice == "ko" && computerChoice =="papir")
    ||(userChoice =="papir" && computerChoice =="ollo")
    ||(userChoice =="ollo" && computerChoice == "papir")
)
{
userPoint++
document.getElementById("userPoint").innerHTML = userPoint
console.log(userPoint,computerPoint)
document.getElementById("eredmeny").innerHTML = "Eredmény:Te nyertél"
}



else if(userChoice =="papir" && computerChoice =="ollo"
    || userChoice =="ollo" && computerChoice =="ko"
    ||userChoice == "ko" && computerChoice =="papir"

)
{
    computerPoint++
    document.getElementById("computerPoint").innerHTML = computerPoint
    console.log(userPoint,computerPoint)
    document.getElementById("eredmeny").innerHTML = "Eredmény:A gép nyert"
}
else{
    console.log("Döntetlen")
    document.getElementById("eredmeny").innerHTML = "Eredmény:Döntetlen"
}

}
if(userPoint == 10){
    document.getElementById("eredmeny").innerHTML = "Játék vége:Te nyertél"
}
else{
    document.getElementById("eredmeny").innerHTML = "Játék vége:A gép nyert"
}

