//instantiate a moment object
var nowMoment = moment().format("dddd, MMMM Do");

//display value of moment object in #displayMoment div
var eDisplayMoment = $("currentDay");
eDisplayMoment.innerHTML = nowMoment;

var rows = document.getElementsByClass("input-box");
var currentTime = parseInt(moment().format("H"));

Array.from(rows).forEach((row) => {
  var rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentTime === rowHour) {
      setColor(row, "red");
    } else if (currentTime < rowHour && currentTime > rowHour - 12) {
      setColor(row, "green");
    } else if (currentTime > rowHour && currentTime < rowHour + 12) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}
var highScores = localStorage.getItem("highScores")
  ? JSON.parse(localStorage.getItem("highScores"))
  : [];
