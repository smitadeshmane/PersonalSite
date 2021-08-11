
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons; i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){

var drumButtonChar=this.innerHTML;
charPlayDrums(drumButtonChar);
buttonAnimation(drumButtonChar);

});
}

document.addEventListener("keydown",function(){
 charPlayDrums(event.key);
 buttonAnimation(event.key);
});

function charPlayDrums(char){

switch(char){
  case("w"):
  var tom1=new Audio("Drum_kit1/sounds/tom-1.mp3");
  tom1.play();
  break;
  case("a"):
  var tom2=new Audio("/Drum_kit1/sounds/tom-2.mp3");
  tom2.play();
  break;
  case("s"):
  var tom3=new Audio("sounds/tom-3.mp3");
  tom3.play();
  break;
  case("d"):
  var tom4=new Audio("sounds/tom-4.mp3");
  tom4.play();
  break;
  case("j"):
  var snare=new Audio("sounds/snare.mp3");
  snare.play();
  break;
  case("k"):
  var crash=new Audio("sounds/crash.mp3");
  crash.play();
  break;
  case("l"):
  var kick=new Audio("sounds/kick-bass.mp3");
  kick.play();
  break;
  default:
  console.log(drumButtonChar);

}

}

function buttonAnimation(key){
var addAnimation=document.querySelector("." +key);
addAnimation.classList.add("pressed");
setTimeout(function(){
  addAnimation.classList.remove("pressed");
}, 100);

}
