


function getDate() {

  let today = new Date();

  let options = {

      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"

  }
    var testDay = today.toLocaleDateString("en-Us", options);

    return testDay;
}
