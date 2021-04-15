const name = document.getElementById("name");
var personPaying = ""
const btn = document.getElementById("btn");
const people = ["pierre", "paul", "jacques", "henry" ];
const date = new Date().getDay();
console.log(date)



btn.addEventListener("click", function() {
  if (date >= 0 && date < 2) {
    personPaying = "today pierre is footing the bill";
  } else if (date >= 2 && date < 4) {
    personPaying = "today paul is paying";
  } else if (date >= 4 && date < 6) {
    personPaying = "Hi jacques although we are in Amsterdam we're not going ducth"
  } else {
    personPaying = "Hi Henry your turn to pay today"
  }
  name.textContent = personPaying
}, false)

// function whoIsBuying() {
//   let whoPays = Math.floor(Math.random() * people.length)
//   return people[whoPays];
// }
//
// name.textContent = whoIsBuying()
