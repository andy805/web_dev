
// document.querySelector("button").addEventListener("click", handleClick);

for(var i = 0; i < 7; i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}


function handleClick() {
  alert("I got clicked");
}



/* Notes - anonymous function

  document.querySelector("button").addEventListener("click", function () {
    alert("I got clicked")
  })

  the function has no name and bieng used when the event listener is triggered

  */
