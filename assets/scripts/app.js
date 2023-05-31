const ATTACK_VALUE = 10
const STRONG_ATTACK = 100
let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife

// calling function and assign variable name as a parameter value instead of hard coded values
adjustHealthBars(chosenMaxLife)

// Attack handler for both moster and player to removee the redundant code
function attackMonster(mode){
let maxDamage
if (mode === 'ATTACK'){
    maxDamage = ATTACK_VALUE
} else if (mode === 'STRONG_ATTACK'){
    maxDamage = STRONG_ATTACK
}
const playerDamage = dealMonsterDamage(maxDamage)
currentMonsterHealth -= playerDamage

const monsterDamage = dealPlayerDamage(maxDamage)
currentPlayerHealth -= monsterDamage

if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
    alert('you win!')
}else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
    alert ('you lose!')
     
} else if ( currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
    alert('draw!')
}

}

function attackHandler(){
    attackMonster('ATTACK')
}

function strongAttackHandler(){
   attackMonster('STRONG_ATTACK')
}



attackBtn.addEventListener('click',attackHandler)
strongAttackBtn.addEventListener('click',strongAttackHandler)