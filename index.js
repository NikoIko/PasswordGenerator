const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomPasswordOne = document.getElementById("passwordOneField")
let randomPasswordTwo = document.getElementById("passwordTwoField")

let passwordLength = 8
let tenCharPassLength = 10
let twelveCharPassLength = 12
let fifteenCharPassLength  = 15

function generateRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
        return characters[randomChar]
}

function generatePasswords() {
    let randomEightCharPass = ""
    for(let i = 0; i < passwordLength; i++) {
        randomEightCharPass += generateRandomCharacter()
    }
        randomPasswordOne.textContent = randomEightCharPass
}

function generatePasswordsTwo() {
   let randomEightCharPass = ""
    for(let i = 0; i < passwordLength; i++) {
       randomEightCharPass += generateRandomCharacter()
 }
    randomPasswordTwo.textContent = randomEightCharPass
}


function generateTenCharPass() {
    let randomTenCharPass = ""
   for(let i = 0; i < tenCharPassLength; i++) {
       randomTenCharPass += generateRandomCharacter()
   }
   randomPasswordOne.textContent = randomTenCharPass
}

function generateTenCharPassTwo() {
    let randomTenCharPass = ""
   for(let i = 0; i < tenCharPassLength; i++) {
       randomTenCharPass += generateRandomCharacter()
   }
   randomPasswordTwo.textContent = randomTenCharPass
}

function generateTwelveCharPass() {
    let randomTwelveCharPass = ""
    for(let i = 0; i < twelveCharPassLength; i++){
        randomTwelveCharPass += generateRandomCharacter()
    }
    randomPasswordOne.textContent = randomTwelveCharPass
}

function generateTwelveCharPassTwo() {
    let randomTwelveCharPass = ""
    for(let i = 0; i <= twelveCharPassLength; i++){
        randomTwelveCharPass += generateRandomCharacter()
    }
    randomPasswordTwo.textContent = randomTwelveCharPass
}

function generateFifteenCharPass() {
    let randomPassword = ""
     for (let i = 0; i < fifteenCharPassLength; i++) {
          randomPassword += generateRandomCharacter()   
     }
     randomPasswordOne.textContent = randomPassword
}

function generateFifteenCharPassTwo() {
    let randomPassword = ""
     for (let i = 0; i < fifteenCharPassLength; i++) {
        randomPassword += generateRandomCharacter()
     }
     randomPasswordTwo.textContent = randomPassword
}
