
$("h1").css("color", "red");

$("h1").attr("class");

$(document).keypress(function (event) {
  var key = event.key;
  $("h1").html(key);
});

/* animation functions for jQuery */
$("button").on("click", function () {
  //animate needs a css property that is a numeric value, will
  // not work with values that are strings
  $("h1").animate({opacity:0.5});
})

/* chaining methods */
$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({opacity:1});
})
