let numberOfButtons = document.querySelectorAll(".drum").length;

for (i=0; i<numberOfButtons;i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
     makeSound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);

  });
}

document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key){
  switch (key) {
    case "w":
      var audioCrash = new Audio("sounds/crash.mp3");
      audioCrash.play();
      break;
    case "a":
        var audioKick = new Audio("sounds/kick-bass.mp3");
        audioKick.play();
        break;
    case "s":
        var audioSnare = new Audio("sounds/snare.mp3");
        audioSnare.play();
        break;
    case "d":
          var audioTom1 = new Audio("sounds/tom-1.mp3");
          audioTom1.play();
          break;
    case "j":
          var audioTom2 = new Audio("sounds/tom-2.mp3");
          audioTom2.play();
          break;
    case "k":
          var audioTom3 = new Audio("sounds/tom-3.mp3");
          audioTom3.play();
          break;
    case "l":
          var audioTom4 = new Audio("sounds/tom-4.mp3");
          audioTom4.play();
          break;

      //break;
    default:

  }
}

function buttonAnimation(currentKey) {
  var activeButton =  document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout (function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();
