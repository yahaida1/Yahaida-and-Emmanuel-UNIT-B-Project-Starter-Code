let title=document.querySelector(".title")
let storyOpening=document.querySelector (".story-opening")
let buttons=document.querySelector(".buttons")
let optionOne=document.querySelector(".option-one")
let optionTwo=document.querySelector(".option-two")
let optionOneScreen=document.querySelector (".option-one-screen")
let optionTwoScreen=document.querySelector(".option-two-screen");
let optionOneEnd=document.querySelector(".option-one-end");
let optionTwoEnd=document.querySelector(".option-two-end")
let car=document.querySelector(".car")
let plane=document.querySelector(".plane")





optionOne.onclick=function(){
title.style.display="none";
  storyOpening.style.display="none";
  buttons.style.display="none";
  optionOneScreen.style.display="block";
  
};

optionTwo.onclick=function(){
title.style.display="none";
  storyOpening.style.display="none";
  buttons.style.display="none";
  optionTwoScreen.style.display="block";
};


car.onclick=function(){
  optionOneEnd.style.display="block";
  optionOneScreen.style.display="none";
  let mySound = new sound("crash-sound.mp3");
  mySound.play()
};


plane.onclick=function(){
optionTwoEnd.style.display="block";
  optionTwoScreen.style.display="none";
  let mySound = new sound("sink-sound.mp3");
  mySound.play()
};

INSERT_VARIABLE.onclick=function(){

};
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}