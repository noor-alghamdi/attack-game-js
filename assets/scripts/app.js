const PLAYER_ATTACK_VALUE = 10
const MONSTER_ATTACK_VALUE = 10
const STRONG_ATTACK = 100
let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife

// calling function and assign variable name as a parameter value instead of hard coded values
adjustHealthBars(chosenMaxLife)

function attackHandler(){
    const playerDamage = dealMonsterDamage(PLAYER_ATTACK_VALUE)
    currentMonsterHealth -= playerDamage

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

function strongAttackHandler(){
    const playerDamage = dealMonsterDamage(STRONG_ATTACK)
    currentMonsterHealth -= playerDamage

    const monsterDamage = dealPlayerDamage(STRONG_ATTACK)
    currentPlayerHealth -= monsterDamage

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('you win!')
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert ('you lose!')
    } else if ( currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert('draw!')
    }
}



attackBtn.addEventListener('click',attackHandler)
strongAttackBtn.addEventListener('click',strongAttackHandler)