const name = document.getElementById("name");
var personPaying = ""
const btn = document.getElementById("btn");
const people = ["pierre", "paul", "jacques", "henry" ];
const date = new Date().getDay();
const daysOfWeek = Array.from({length: 7}, (item, i) => {
  return new Date(0,0,i).toLocaleDateString("en-US", {weekday: "long"})
})
var today = daysOfWeek[date];

btn.addEventListener("click", function() {
  if (date >= 0 && date < 2) {
    personPaying = `today is ${today} so Pierre is footing the bill`;
  } else if (date >= 2 && date < 4) {
    personPaying = `today is ${today} paul is paying`;
  } else if (date >= 4 && date < 6) {
    personPaying = `Hi jacques, today is ${today} so although we are in Amsterdam we're not going ducth`
  } else {
    personPaying = `Hi Henry, today is ${today}, your turn to pay today`
  }
  name.textContent = personPaying
}, false)
