
for(var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttonInnerHtml = this.innerHTML;
  switch (buttonInnerHtml) {
    case "w":

      var audio = new Audio("Sound/tom-1.mp3");
      audio.play();
    break;
    case "a":
      var audio = new Audio("Sound/tom-2.mp3");
      audio.play();

    break;
    case "s":
      var audio = new Audio("Sound/tom-3.mp3");
      audio.play();

    break;
    case "d":

      var audio = new Audio("Sound/tom-4.mp3");
      audio.play();
    break;
    case "j":
      var audio = new Audio("Sound/snare.mp3");
      audio.play();

    break;
    case "k":
      var audio = new Audio("Sound/crash.mp3");
      audio.play();
    break;
    case "l":
      var audio = new Audio("Sound/kick-bass.mp3");
      audio.play();
    break;
    default: console.log(buttonInnerHtml);

  }
}

document.addEventListener("keydown", function (event) {
  var keyPressed = event.key;

  switch (keyPressed) {
    case "w":

      var audio = new Audio("Sound/tom-1.mp3");
      audio.play();
    break;
    case "a":
      var audio = new Audio("Sound/tom-2.mp3");
      audio.play();

    break;
    case "s":
      var audio = new Audio("Sound/tom-3.mp3");
      audio.play();

    break;
    case "d":

      var audio = new Audio("Sound/tom-4.mp3");
      audio.play();
    break;
    case "j":
      var audio = new Audio("Sound/snare.mp3");
      audio.play();

    break;
    case "k":
      var audio = new Audio("Sound/crash.mp3");
      audio.play();
    break;
    case "l":
      var audio = new Audio("Sound/kick-bass.mp3");
      audio.play();
    break;
    default: console.log(keyPressed);

  }
});

/* Notes - anonymous function

  document.querySelector("button").addEventListener("click", function () {
    alert("I got clicked")
  })

  the function has no name and bieng used when the event listener is triggered

  */
