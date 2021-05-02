const name = document.getElementById("name");
const image = document.getElementById("image");
var personPaying = ""
const btn = document.getElementById("btn");
const people = ["pierre", "paul", "jacques", "henry" ];
const date = new Date().getDay();
const daysOfWeek = Array.from({length: 7}, (item, i) => {
  return new Date(0,0,i).toLocaleDateString("en-US", {weekday: "long"})
})
var today = daysOfWeek[date];

var names = {
  "Monday": "emilie",
  "Tuesday": "emilie",
  "Wednesday": "jessica",
  "Thursday": "jessica",
  "Friday": "paul",
  "Saturday": "paul",
  "Sunday": "pierre",
}

console.log(names[today])

btn.addEventListener("click", function() {
  date >= 0 && date < 2 ? personPaying = `today is ${today} so ${names[today]} is footing the bill`
  : date >= 2 && date < 4 ? personPaying = `today is ${today} ${names[today]} is paying`
  : date >= 4 && date < 6 ?   personPaying = `Hi ${names[today]}, today is ${today} so although we are in Amsterdam we're not going ducth`
  : personPaying = `Hi ${names[today]}, today is ${today}, your turn to pay today`
  name.textContent = personPaying;
  image.src = `picture/${names[today]}.png`;
  image.alt = "picture of an avatar";
  var unseen = document.getElementsByClassName("unseen");
  for (var i = 0; i < unseen.length; i++) {
    unseen[i].style.display = "inline";
  }
}, false);
