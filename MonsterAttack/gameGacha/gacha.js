let coins = parseInt(localStorage.getItem('coins'));

let characters = JSON.parse(localStorage.getItem('characters'));
let charactersAtk = JSON.parse(localStorage.getItem('charactersAtk'));


let charNames = JSON.parse(localStorage.getItem('characterNames'));
let unlockedImgs = JSON.parse(localStorage.getItem('unlockedImgs'));
let unlocked = JSON.parse(localStorage.getItem('unlocked'));

let selected = localStorage.getItem('selected');
let selectedAtk = localStorage.getItem('selectedAtk');

let current = characters.indexOf(selected);

let charPrice = 50;

window.onload = load();

function toMain() {
    document.location.href = "../gameMain/main.html";
}

function select() {
    if (!unlocked.includes(characters[current])) {
       if (coins >= charPrice) {
            coins -= charPrice;
            localStorage.setItem('coins', coins);
            
            selected = characters[current];
            selectedAtk = charactersAtk[current];

            unlocked.push(selected);
            
            localStorage.setItem('selected', selected);
            localStorage.setItem('selectedAtk', selectedAtk);
            localStorage.setItem('unlocked', JSON.stringify(unlocked));
       }
    } else if (selected !== characters[current]) {
        selected = characters[current];
        selectedAtk = charactersAtk[current];
        localStorage.setItem('selected', selected);
        localStorage.setItem('selectedAtk', selectedAtk);
    }
    load();
}

function toRight() {
    if (current + 1 < characters.length) {
        current++;
    }
    load();
}

function toLeft() {
    if (current - 1 >= 0) {
        current--;
    }
    load();
}

function load() {
    var sel = document.getElementById("select");
    if (!unlocked.includes(characters[current])) {
        if (coins >= charPrice) {
            sel.style.backgroundColor = "#7FFFD4";
        }else {
            sel.style.backgroundColor = "#808080";
        }
        sel.innerHTML = "BUY 50C";
        document.getElementById('charName').innerHTML = "????";
        document.getElementById('character').src = unlockedImgs[0];
    } else {
        document.getElementById('charName').innerHTML = charNames[current];
        document.getElementById('character').src = characters[current];
        if (selected === characters[current]) {
            sel.style.backgroundColor = "#808080";
            sel.innerHTML = "SELECTED";
        } else {
            sel.style.backgroundColor = "#7FFFD4";
            sel.innerHTML = "SELECT";
        }
    }
    document.getElementById('coins').innerHTML = "Coins: " + coins;

}