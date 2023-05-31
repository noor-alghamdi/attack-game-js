const PLAYER_ATTACK_VALUE = 30
const STRONG_ATTACK = 100
const HEAL_VALUE = 10
const MONSTER_ATTACK_VALUE = 20

let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife

// calling function and assign variable name as a parameter value instead of hard coded values
adjustHealthBars(chosenMaxLife)

function endRound(){
    const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
currentPlayerHealth -= monsterDamage

if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
    alert('you win!')
}else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
    alert ('you lose!')
     
} else if ( currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
    alert('draw!')
}
}
// Attack handler for both moster and player to removee the redundant code
function attackMonster(mode){
let maxDamage
if (mode === 'ATTACK'){
    maxDamage = PLAYER_ATTACK_VALUE
} else if (mode === 'STRONG_ATTACK'){
    maxDamage = STRONG_ATTACK
}
const playerDamage = dealMonsterDamage(maxDamage)
currentMonsterHealth -= playerDamage
endRound();

}

function attackHandler(){
    attackMonster('ATTACK')
}

function strongAttackHandler(){
   attackMonster('STRONG_ATTACK')
}

function healPleayerHandler(){
    let healValue
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert("you can't heal to more than your max intial thealth")
        healValue = chosenMaxLife - currentPlayerHealth;

    }else{
        healValue = HEAL_VALUE
    }
    increasePlayerHealth(healValue)
    currentPlayerHealth += healValue
    endRound()
}



attackBtn.addEventListener('click',attackHandler)
strongAttackBtn.addEventListener('click',strongAttackHandler)
healBtn.addEventListener('click', healPleayerHandler)