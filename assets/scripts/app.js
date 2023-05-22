const ATTACK_VALUE = 10
let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife

// calling function and assign variable name as a parameter value instead of hard coded values
adjustHealthBars(chosenMaxLife)

function attackHandler(){
    const damage = dealMonsterDamage(ATTACK_VALUE)
    currentMonsterHealth -= damage
}

attackBtn.addEventListener('click',attackHandler)