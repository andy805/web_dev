
$("h1").css("color", "red");

$("h1").attr("class");

$(document).keypress(function (event) {
  var key = event.key;
  $("h1").html(key);
});
