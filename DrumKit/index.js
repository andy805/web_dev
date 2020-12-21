
// document.querySelector("button").addEventListener("click", handleClick);

for(var i = 0; i < document.querySelectorAll("button").length; i++)
{
  var button = document.querySelectorAll("button")[i].innerText
  // document.querySelectorAll("button")[i].addEventListener("click", handleClick);

  switch (button) {
    case "w":
      document.querySelectorAll("button")[i].addEventListener("click", function () {
        var audio = new Audio("Sound/tom-1.mp3");
        audio.play();
      });
      break;
    case "a":
      document.querySelectorAll("button")[i].addEventListener("click", function () {
        var audio = new Audio("Sound/tom-2.mp3");
        audio.play();
      });
      break;
    case "s":
      document.querySelectorAll("button")[i].addEventListener("click", function () {
        var audio = new Audio("Sound/tom-3.mp3");
        audio.play();
      });
      break;
    case "d":
      document.querySelectorAll("button")[i].addEventListener("click", function () {
        var audio = new Audio("Sound/tom-4.mp3");
        audio.play();
      });
      break;
    case "j":
      document.querySelectorAll("button")[i].addEventListener("click", function () {
        var audio = new Audio("Sound/snare.mp3");
        audio.play();
      });
      break;
    case "k":
      document.querySelectorAll("button")[i].addEventListener("click", function () {
        var audio = new Audio("Sound/crash.mp3");
        audio.play();
      });
      break;
    case "l":
      document.querySelectorAll("button")[i].addEventListener("click", function () {
        var audio = new Audio("Sound/kick-bass.mp3");
        audio.play();
      });
      break;
    default:

  }
}


function handleClick(audioFile) {
  var audio = new Audio(audioFile);
  audio.play();
}

  switch (button) {
    case "w":
      break;
    default:

  }


/* Notes - anonymous function

  document.querySelector("button").addEventListener("click", function () {
    alert("I got clicked")
  })

  the function has no name and bieng used when the event listener is triggered

  */
