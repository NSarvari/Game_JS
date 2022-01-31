let farmer = 0;
let goat = 0;
let wolf = 0;
let cabbage = 0;
let right;
let left;
let problem;

function myFunctionGoat() {
    if (goat == 1) {
        document.getElementById("goat").innerHTML = "Goat going to the left side of river!"; goat = 0;
    }
    else {
        document.getElementById("goat").innerHTML = "Goat going to right side of the river!";
        goat = 1;
    }
}

function myFunctionFarmer() {
    if (farmer == 1) {
        document.getElementById("farmer").innerHTML = "Farmer going to the left side of river!"; farmer = 0;
    }
    else {
        document.getElementById("farmer").innerHTML = "Farmer going to right side of the river!";
        farmer = 1;
    }
}

function myFunctionWolf() {
    if (wolf == 1) {
        document.getElementById("wolf").innerHTML = "Wolf going to the left side of river!"
        wolf = 0;
    }
    else {
        document.getElementById("wolf").innerHTML = "Wolf going to right side of the river!";
        wolf = 1;
    }
}

function myFunctionCabbage() {
    if (cabbage == 1) {
        document.getElementById("cabbage").innerHTML = "Cabbage going to the left side of river!"
        cabbage = 0;
    }
    else {
        document.getElementById("cabbage").innerHTML = "Cabbage going to right side of the river!";
        cabbage = 1;
    }
}

function Testing() {
    if (goat == 1 && wolf == 1 && farmer == 1 && cabbage == 1) { problem = 2; }

    if (goat == 1 && wolf == 1 && farmer == 1 && cabbage == 0) {
        problem = 0; left = 0; right = 0;
    }
    if (goat == 1 && wolf == 0 && farmer == 0 && cabbage == 0) {
        problem = 0; left = 0; right = 0;
    }
    if (goat == 1 && wolf == 0 && farmer == 1 && cabbage == 0) {
        problem = 0; left = 0; right = 0;
    }
    if (goat == 1 && wolf == 0 && farmer == 0 && cabbage == 0) {
        problem = 0; left = 0; right = 0;
    }
    if (goat == 0 && wolf == 1 && farmer == 0 && cabbage == 0) {
        problem = 0; left = 0; right = 0;
    }
    if (goat == 0 && wolf == 0 && farmer == 0 && cabbage == 1) {
        problem = 0; left = 0; right = 0;
    }
    if (goat == 0 && wolf == 1 && farmer == 0 && cabbage == 1) {
        problem = 0; left = 0; right = 0;
    }
    if (goat == 0 && wolf == 1 && farmer == 1 && cabbage == 1) {
        problem = 0; left = 0; right = 0;
    }
    if (goat == 1 && wolf == 0 && farmer == 1 && cabbage == 1) {
        problem = 0; left = 0; right = 0;
    }
    if (goat == 0 && wolf == 0 && farmer == 0 && cabbage == 0) {
        problem = 0; left = 0; right = 0;
    }
    if (goat == 0 && wolf == 0 && farmer == 1 && cabbage == 1) {
        left = 1;
    }
    if (goat == 1 && wolf == 0 && farmer == 0 && cabbage == 1) {
        right = 1;
    }
    if (goat == 1 && wolf == 1 && farmer == 0 && cabbage == 0) {
        right = 1;
    }
    if (goat == 1 && wolf == 1 && farmer == 0 && cabbage == 1) {
        right = 1;
    }
    if (goat == 0 && wolf == 0 && farmer == 1 && cabbage == 0) {
        left = 1;
    }
    if (goat == 0 && wolf == 1 && farmer == 1 && cabbage == 0) {
        left = 1;
    }

    if (problem == 2) {
        document.getElementById("test").innerHTML =
            "Congratulations! You have successfully moved the farmer, goat, wolf, and cabbage from the left side of the river to right side safely.";
    }
    if (left == 1) {
        document.getElementById("test").innerHTML =
            "There is danger on the left side of the river!";
    }
    if (right == 1) {
        document.getElementById("test").innerHTML =
            "There is danger on the right side of the river!";
    }
    if (problem == 0 && left == 0 && right == 0) {
        document.getElementById("test").innerHTML =
            "There is no danger on either side of the river.";
    }
    if (farmer == 1) {
        document.getElementById("farmer").innerHTML =
            "Farmer is on the right side of the river.";
    }
    else {
        document.getElementById("farmer").innerHTML =
            "Farmer is on the left side of the river.";
    }
    if (goat == 1) {
        document.getElementById("goat").innerHTML =
            "Goat is on the right side of the river.";
    }
    else {
        document.getElementById("goat").innerHTML =
            "Goat is on the left side of the river.";
    }
    if (wolf == 1) {
        document.getElementById("wolf").innerHTML =
            "Wolf is on the right side of the river.";
    }
    else {
        document.getElementById("wolf").innerHTML =
            "Wolf is on the left side of the river.";
    }
    if (cabbage == 1) {
        document.getElementById("cabbage").innerHTML =
            "Cabbage is on the right side of the river.";
    }
    else {
        document.getElementById("cabbage").innerHTML =
            "Cabbage is on the left side of the river.";
    }
}
