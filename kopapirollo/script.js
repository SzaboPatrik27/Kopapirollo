let userPoint = 0
let computerPoint = 0
function jatek(userChoice){
let valasztasok = ["ko","papir","ollo"]
let random = Math.floor(Math.random() * 3) 
console.log(random)

let computerChoice = valasztasok[random]

console.log(computerChoice)

if(userChoice == "ko" && computerChoice =="papir"
    ||userChoice =="papir" && computerChoice =="ollo"
    ||userChoice =="ollo" && computerChoice == "papir"
)
{
userPoint++
console.log(userPoint,computerPoint)
}



else if(userChoice =="papir" && computerChoice =="ollo"
    || userChoice =="ollo" && computerChoice =="ko"
    ||userChoice == "ko" && computerChoice =="papir"

)
{
    computerPoint++
    console.log(userPoint,computerPoint)
}
}

