const PLAYER_ATTACK_VALUE = 10
const MONSTER_ATTACK_VALUE = 10
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

    if (currentMonsterHealth <= 0){
        alert('you win!')
    }else {
        alert ('you lose!')
    }
}

attackBtn.addEventListener('click',attackHandler)