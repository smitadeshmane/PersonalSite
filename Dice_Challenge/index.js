
document.querySelector("button").addEventListener("click", function(){
var randomNumber1;
randomNumber1=Math.floor(Math.random()*6)+1;

var randomImage1="images/dice"+randomNumber1+".png";

  document.querySelector(".dice1").setAttribute("src", randomImage1);

  var randomNumber2=Math.floor(Math.random()*6)+1;
  var randomImage2="images/dice"+randomNumber2+".png";

  document.querySelector(".dice2").setAttribute("src",randomImage2);


if(randomNumber1===randomNumber2)
{
  document.querySelector("h1").textContent="Draw!";
}
else if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent="🚩Player 1 Wins!";
}
else document.querySelector("h1").textContent="Player 2 Wins!🚩";
});
