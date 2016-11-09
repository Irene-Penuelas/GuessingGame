/**
 * Created by irene.penuelas445 on 11/2/16.
 */
//var s = document.getElementById('s').selectedIndex;

function generateRandom() {
        //Generating a number starting from 1 to 9
      //Array of color options:
    var color = ["BLUE", "CYAN", "GOLD", "GREEN", "MAGENTA", "ORANGE", "RED", "WHITE", "YELLOW"];
    var randColor = color[Math.floor(Math.random() * 9)];
    var submission = document.getElementById('submission').value.toUpperCase();
    var results = document.getElementById('results');
    var music = document.getElementById('music');




//Checking the computer's choice
//alert(randColor);

    //Comparing randColor with the user's input
        //Winner winner chicken dinner
    if (submission == randColor) {
        document.getElementById("theHtml").style.backgroundColor = submission;
        results.innerHTML = "WINNER WINNER CHICKEN DINNER";
        music.src = 'celebrateGoodTimes.mp3';
    }
        //Too high
    else if (submission > randColor) {
        document.getElementById("theHtml").style.backgroundColor = "#ff4c4c";
        alert("The computer chose a color alphabetically lower than your guess. Too bad.");
        music.src = 'fail.mp3';
    }
        //Too low
    else if (submission < randColor) {
        document.getElementById("theHtml").style.backgroundColor = "#ff4c4c";
        alert("The computer chose a color alphabetically higher than your guess. :( ");
        music.src = 'fail.mp3';
    }
} //end function
