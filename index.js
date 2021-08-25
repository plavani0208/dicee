

 var dice1 = Math.floor(Math.random() * 6) + 1; //input number between 1-6

 var randomimage1 = "images/dice" + dice1 +".png";

 var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src", randomimage1);

 var dice2 = Math.floor(Math.random()*6) + 1;
 var randomimage2 = "images/dice" + dice2 +".png";

 var image2 = document.querySelectorAll("img")[1];

 image2.setAttribute("src",randomimage2);

 if(dice1 > dice2)
 {
 	document.querySelector("h1").innerHTML = "Player 1 wins!";
 }
 else if (dice1 == dice2)
 {
 	document.querySelector("h1").innerHTML = "It's a draw!";
 }

 else
 {
 	document.querySelector("h1").innerHTML = "Player 2 wins!";
 }