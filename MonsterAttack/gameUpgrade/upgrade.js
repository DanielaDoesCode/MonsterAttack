let coins = parseInt(localStorage.getItem('coins'));

let atkValue = parseInt(localStorage.getItem('attackValue'));
let luckValue = parseInt(localStorage.getItem('luckValue'));
let specialValue = parseInt(localStorage.getItem('specialValue'));

let atkCost = parseInt(localStorage.getItem('atkCost'));
let specialCost = parseInt(localStorage.getItem('specialCost'));
let luckCost = parseInt(localStorage.getItem('luckCost'));

let helpToggle = 0;

let cost = 10;
let atkMult = 2;
let specMult = 5;
let luckMult = 5;

window.onload = load();

function toMain() {
    document.location.href = "../gameMain/main.html";
}

function upAtk() {
    if (coins >= atkCost) {
        coins -= atkCost;
        localStorage.setItem('coins', coins);
        atkValue += atkMult;
        localStorage.setItem('attackValue', atkValue);
        atkCost += cost;
        localStorage.setItem('atkCost', atkCost);
        load();
    }

}

function upSpecial() {
    if (coins >= specialCost) {
        coins -= specialCost;
        localStorage.setItem('coins', coins);
        specialValue += specMult;
        localStorage.setItem('specialValue', specialValue);
        specialCost += cost;
        localStorage.setItem('specialCost', specialCost);
        load();
    }

}

function upLuck() {
    if (coins >= luckCost) {
        coins -= luckCost;
        localStorage.setItem('coins', coins);
        luckValue += luckMult;
        localStorage.setItem('luckValue', luckValue);
        luckCost += cost;
        localStorage.setItem('luckCost', luckCost);
        load();
    }   
}

function help() {
    if (helpToggle == 0) {
        helpToggle = 1;
        openHelp();
    } else {
        helpToggle = 0;
        closeHelp();
    }
}

function openHelp() {
    document.getElementById('help-content').style.width = '170px';
    document.getElementById('help-content').style.height = '170px';
    document.getElementById('help-content').innerHTML = "->Attack increases damage per click <br>" + 
                                                        "<br>" + 
                                                        "-> Special increases special damage <br>" + 
                                                        "<br>" + 
                                                        "-> Luck increase coins dropped <br>";
}

function closeHelp() {
    document.getElementById('help-content').style.width = '0px';
    document.getElementById('help-content').style.height = '0px';
    document.getElementById('help-content').innerHTML = "";
}


function load() {
    document.getElementById('coins').innerHTML = "Coins: " + coins;
    document.getElementById('upgradeAtk').innerHTML = "Attack Lvl. " + atkCost / cost + "<br> cost: " + atkCost;
    document.getElementById('upgradeSpecial').innerHTML = "Special Lvl. " + specialCost / cost + "<br> cost: " + specialCost;
    document.getElementById('upgradeLuck').innerHTML = "Luck Lvl. " + luckCost / cost + "<br> cost: " + luckCost;
    if (coins >= atkCost) {
        document.getElementById('upgradeAtk').style.backgroundColor = "#7FFFD4";
    } else {
        document.getElementById('upgradeAtk').style.backgroundColor = "#808080";
    }

    if (coins >= specialCost) {
        document.getElementById('upgradeSpecial').style.backgroundColor = "#7FFFD4";
    } else {
        document.getElementById('upgradeSpecial').style.backgroundColor = "#808080";
    }

    if (coins >= luckCost) {
        document.getElementById('upgradeLuck').style.backgroundColor = "#7FFFD4";
    } else {
        document.getElementById('upgradeLuck').style.backgroundColor = "#808080";
    }
}