//instantiate a moment object
var nowMoment = moment().format("dddd, MMMM Do");

//display value of moment object in #displayMoment div
var eDisplayMoment = $("#currentDay");
eDisplayMoment[0].innerHTML = nowMoment;

var schedule = JSON.parse(localStorage.getItem("schedule"));
if (schedule) {
  // since there is a schedule, get the inputs and set their values
  for (var i = 0; i < 9; i++) {
    $("#input-" + i)[0].value = schedule[i].note || "";
  }
} else {
  schedule = [
    { note: "" },
    { note: "" },
    { note: "" },
    { note: "" },
    { note: "" },
    { note: "" },
    { note: "" },
    { note: "" },
    { note: "" },
  ];
  localStorage.setItem("schedule", JSON.stringify(schedule));
}

var rows = $(".row");
var currentTime = moment().format("H");
Array.from(rows).forEach((row) => {
  var rowIdString = row.id;
  var rowHour;
  rowHour = +rowIdString + 9;
  // Compares row id to current hour and sets color accordingly
  if (currentTime === rowHour) {
    setColor(row, "red");
  } else if (currentTime < rowHour && currentTime > rowHour - 15) {
    setColor(row, "green");
  } else if (currentTime > rowHour && currentTime < rowHour + 15) {
    setColor(row, "lightgrey");
  } else {
    setColor(row, "white");
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

$(".saveBtn").click(function (event) {
  var idNumber = event.currentTarget.id.slice(-1);
  schedule[idNumber] = { note: $("#input-" + idNumber)[0].value };
  localStorage.setItem("schedule", JSON.stringify(schedule));
});
