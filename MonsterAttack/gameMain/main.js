let coins = parseInt(localStorage.getItem('coins'));
let atkValue = parseInt(localStorage.getItem('attackValue'));
let luckValue = parseInt(localStorage.getItem('luckValue'));
let specValue = parseInt(localStorage.getItem('specialValue'));
let killed = parseInt(localStorage.getItem('kills'));
let clicks = parseInt(localStorage.getItem('clicks'));
let health = parseInt(localStorage.getItem('health'));
let charSelected = localStorage.getItem('selectedAtk');
let monsters = JSON.parse(localStorage.getItem('monsters'));
let monsterSelected = localStorage.getItem('selectedMonster');
let clickHere = localStorage.getItem('clickHere');
let maxHealth = 5 + 2 * killed;

window.onload = load();

function toGacha() {
    document.location.href = "../gameGacha/gacha.html";
}

function toUpgrade() {
    document.location.href = "../gameUpgrade/upgrade.html";
}

function attack() {
    const hitbox = document.getElementById('hitbox');
    const monster = document.getElementById('monster');

    function shakeImg() {
        monster.classList.add("shake");

        setTimeout(function() {
            monster.classList.remove("shake");
        }, 1000);
    }

    var bar = document.getElementById('bar'),
        specialBar = document.getElementById('bar2');

    clicks++;
    localStorage.setItem('clicks', clicks);
    
    var damage;
    if (clicks > 5) {
        damage = specValue + atkValue;
        clicks = 0;
        localStorage.setItem('clicks', clicks);
    }else {
        damage = atkValue;
    }

    specialBar.style.width = clicks * 20 + "%";

    health = health - damage;
    localStorage.setItem('health', health);

    if (health <= 0) {
        killed++;
        localStorage.setItem('kills', killed);
        coins += 5 + luckValue; 
        document.getElementById('coins').innerHTML = "Coins: " + coins;
        localStorage.setItem('coins', coins);

        monster.style.transition = 'height 0.5s';
        monster.style.height = '5%';
        hitbox.style.pointerEvents = 'none';

        health = 5 + 2 * killed;
        maxHealth = health;
        localStorage.setItem('health', health);
        
        setTimeout(() => {
            monsterSelected = monsters[Math.floor(Math.random()*monsters.length)];
            localStorage.setItem('selectedMonster', monsterSelected);
            monster.src = monsterSelected;
            monster.style.transition = 'none';
            monster.style.transformOrigin = 'center';
            monster.style.height = '80px';
            hitbox.style.pointerEvents = 'auto';
        }, 600);
    }else {
        shakeImg();
    }
    
    var barWidth = (health / maxHealth) * 100;
    bar.style.width = barWidth + "%";
}

function load() {
    var specialBar = document.getElementById('bar2');
    var barWidth = (health / maxHealth) * 100;
    bar.style.width = barWidth + "%";
    document.getElementById('coins').innerHTML = "Coins: " + coins;
    specialBar.style.width = clicks * 20 + "%";

    document.getElementById('character').src = charSelected;
    document.getElementById('monster').src = monsterSelected;

    if (clickHere == 0) {
        document.getElementById('clickHere').style.visibility = 'visible';
    } else {
        document.getElementById('clickHere').style.visibility = 'hidden';
    }
    
}

function desappear(){
    clickHere = 1;
    localStorage.setItem('clickHere', clickHere);
    document.querySelector('#clickHere').disabled = true;
    load(); 
}