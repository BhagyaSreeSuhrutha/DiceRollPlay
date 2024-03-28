let d1=document.getElementById("dice1")
let d2=document.getElementById("dice2")
let res=document.getElementById("outcome")

function roll(){
    let roll1 = Math.floor(Math.random() * 6) + 1
    let roll2 = Math.floor(Math.random() * 6) + 1
    let sum = roll1 + roll2
    let status = ""

    d1.textContent = "DIE-1: " + roll1
    d2.textContent = "DIE-2: " + roll2

    if (sum>8) {
        res.textContent = "YOU WIN !!! YOUR OUTCOME IS " + sum
        status+="WIN"
    }
    else{
        res.textContent = "YOUR OUTCOME IS " + sum + ". BETTER LUCK NEXT TIME :)"
        status+="LOSE"
    }
    saveRollHistory(roll1,roll2,sum,status)
}


function saveRollHistory(roll1, roll2, sum, status) {
    let rollHistoryItem = document.createElement("li")
    rollHistoryItem.textContent = `Die 1: ${roll1}, Die 2: ${roll2}, Sum: ${sum}, Status: ${status}`
    document.getElementById("rollhist").appendChild(rollHistoryItem)
} 
