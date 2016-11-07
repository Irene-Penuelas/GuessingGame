/**
 * Created by irene.penuelas445 on 11/2/16.
 */
//var s = document.getElementById('s').selectedIndex;

function generateRandom() {
        //Generating a number starting from 1 to 9
//    var randColor = Math.floor(Math.random() * 9) + 1;
      //Array of color options
    var color = ["BLUE", "CYAN", "GOLD", "GREEN", "MAGENTA", "ORANGE", "RED", "WHITE", "YELLOW"];
    var randColor = color[Math.floor(Math.random() * 9)];
    var submission = document.getElementById('submission').value.toUpperCase();

//Checking the computer's choice
alert(randColor);

    //Comparing randColor with the user's input
        //Winner winner chicken dinner
    if (submission == randColor) {
        alert("You are a winner");
        document.getElementById("html").style.backgroundColor = submission;
    }
        //Too high
    else if (submission > randColor) {
        alert("The computer chose a color alphabetically lower than your guess. Too bad.");
        document.getElementById("html").style.backgroundColor = "ff0000";
    }
        //Too low
    else if (submission < randColor) {
        alert("The computer chose a color alphabetically higher than your guess. :( ");
        document.getElementById("html").style.backgroundColor = "ff0000";
    }
} //end function