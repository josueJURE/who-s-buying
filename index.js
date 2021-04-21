const name = document.getElementById("name");
var personPaying = ""
const btn = document.getElementById("btn");
const people = ["pierre", "paul", "jacques", "henry" ];
const date = new Date().getDay();
const daysOfWeek = Array.from({length: 7}, (item, i) => {
  return new Date(0,0,i).toLocaleDateString("en-US", {weekday: "long"})
})
var today = daysOfWeek[date];

var names = {
  "Monday": "Pierre",
  "Tuesday": "Pierre",
  "Wednesday": "Paul",
  "Thursday": "Paul",
  "Friday": "Jacques",
  "Saturday": "Jacques",
  "Sunday": "Henry",
}

console.log(names[today])

btn.addEventListener("click", function() {
  date >= 0 && date < 2 ? personPaying = `today is ${today} so ${names[today]} is footing the bill`
  : date >= 2 && date < 4 ? personPaying = `today is ${today} ${names[today]} is paying`
  : date >= 4 && date < 6 ?   personPaying = `Hi ${names[today]}, today is ${today} so although we are in Amsterdam we're not going ducth`
  : personPaying = `Hi ${names[today]}, today is ${today}, your turn to pay today`
  name.textContent = personPaying
}, false)
