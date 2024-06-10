let currMoleTile;
let currPlantTiles = [];
let score = 0;
let gameOver = false;
let moleIntervalId;
let plantIntervalId;

window.onload = function() {
    setGame();
    document.getElementById('restart').addEventListener('click', restartGame);
    document.getElementById('numPlants').addEventListener('input', updateNumPlants);
    document.getElementById('numPlants').addEventListener('input', updatePlantInterval);
    document.getElementById('moleInterval').addEventListener('input', updateMoleInterval);
    document.getElementById('plantInterval').addEventListener('input', updatePlantInterval);
};

function setGame() {
    document.getElementById("board").innerHTML = ""; // Clear the board
    for(let i = 0; i < 9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setIntervals();
}

function setIntervals() {
    clearIntervals();
    moleIntervalId = setInterval(setMole, document.getElementById('moleInterval').value * 1000);
    plantIntervalId = setInterval(setPlants, document.getElementById('plantInterval').value * 1000);
}

function clearIntervals() {
    if (moleIntervalId) clearInterval(moleIntervalId);
    if (plantIntervalId) clearInterval(plantIntervalId);
}

function getRandomTile(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole(){
    if(gameOver){
        return;
    }
    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";
 
    let num = getRandomTile();
    if(currPlantTiles.some(tile => tile.id == num)){
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlants(){
    if(gameOver){
        return;
    }
    currPlantTiles.forEach(tile => tile.innerHTML = "");
    currPlantTiles = [];

    let numPlants = parseInt(document.getElementById('numPlants').value);
    for (let i = 0; i < numPlants; i++) {
        let plant = document.createElement("img");
        plant.src = "./piranha-plant.png";

        let num;
        do {
            num = getRandomTile();
        } while ((currMoleTile && currMoleTile.id == num) || currPlantTiles.some(tile => tile.id == num));

        let tile = document.getElementById(num);
        tile.appendChild(plant);
        currPlantTiles.push(tile);
    }
}

function selectTile(){
    if(gameOver){
        return;
    }
    if (this == currMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString();
    } else if (currPlantTiles.includes(this)){
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
        clearIntervals();
    }
}

function restartGame() {
    score = 0;
    gameOver = false;
    document.getElementById("score").innerText = score.toString();
    setGame();
}

function updateNumPlants() {
    document.getElementById('numPlantsValue').innerText = document.getElementById('numPlants').value;
    setIntervals(); // To update the plant interval with the new number of plants
}

function updateMoleInterval() {
    document.getElementById('moleIntervalValue').innerText = document.getElementById('moleInterval').value + 's';
    setIntervals();
}

function updatePlantInterval() {
    document.getElementById('plantIntervalValue').innerText = document.getElementById('plantInterval').value + 's';
    setIntervals();
}
