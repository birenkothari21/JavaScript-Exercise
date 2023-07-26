const PLAYER_ATTACK_VALUE = 10;
const PLAYER_STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 21;
const HEAL_VALUE = 20;
const MOD_ATTACK = 'ATTACK';
const MOD_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

let healthVal = prompt('MAXIMUM LIFE HEALTH FOR YOU AND MONSTER ', 100);
let chooseMaxLife = parseInt(healthVal);

if (isNaN(chooseMaxLife) || chooseMaxLife <= 0) {
    chooseMaxLife = 100;
}

let currentMonsterHealth = chooseMaxLife;
let currentPlayerHealth = chooseMaxLife;
let hasBonusLife = true;
let gameLog = [];

adjustHealthBars(chooseMaxLife);

function generateGameEventLog(ev, val, monsterHealth, playerHealth) {
    let log = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
    };
    if (ev === LOG_EVENT_PLAYER_ATTACK) {
        log.target = 'MONSTER';
    } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        log.target = 'MONSTER';
    } else if (ev === LOG_EVENT_PLAYER_HEAL) {
        log.target = 'PLAYER';
    } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
        log.target = 'PLAYER';
    }
    gameLog.push(log);
}

function reset() {
    currentMonsterHealth = chooseMaxLife;
    currentPlayerHealth = chooseMaxLife;
    resetGame(chooseMaxLife);
    alert('NOW THE GAME WILL BE RESET...');
}

function endRound() {
    let initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    generateGameEventLog(
        LOG_EVENT_MONSTER_ATTACK,
        playerDamage,
        currentMonsterHealth,
        currentPlayerHealth
    );

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('CONGRETS, YOU WON THE FIGHT AGAINST THE MONSTER...');
        generateGameEventLog(
            LOG_EVENT_GAME_OVER,
            'PLAYER WON',
            currentMonsterHealth,
            currentPlayerHealth
        );
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('OOPS! YOU LOSS, TRY AGAIN...');
        generateGameEventLog(
            LOG_EVENT_GAME_OVER,
            'MONSTER WON',
            currentMonsterHealth,
            currentPlayerHealth
        );
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('IT SEEMS LIKE THE FIGHT IS DRAW');
        generateGameEventLog(
            LOG_EVENT_GAME_OVER,
            'A DRAW',
            currentMonsterHealth,
            currentPlayerHealth
        );
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

function attackMonster(attackMode) {
    let maxDamage =
        attackMode === MOD_ATTACK
            ? PLAYER_ATTACK_VALUE
            : PLAYER_STRONG_ATTACK_VALUE;
    let logEvent =
        attackMode === MOD_ATTACK
            ? LOG_EVENT_PLAYER_ATTACK
            : LOG_EVENT_PLAYER_STRONG_ATTACK;

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;

    generateGameEventLog(
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth
    );
    endRound();
}

function attackhandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
    let healValue;

    if (currentPlayerHealth >= chooseMaxLife - HEAL_VALUE) {
        healValue = chooseMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }

    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;

    generateGameEventLog(
        LOG_EVENT_PLAYER_HEAL,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
    );

    endRound();
}

function printLogHandler() {
    console.log(gameLog);
}

attackBtn.addEventListener('click', attackhandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
