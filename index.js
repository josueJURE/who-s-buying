const name = document.getElementById("name");
const btn = document.getElementById("btn");
const people = ["pierre", "paul", "jacques", "henry" ];



btn.addEventListener("click", function() {
  let whoPays = Math.floor(Math.random() * people.length);
  name.textContent = people[whoPays];
}, false)

// function whoIsBuying() {
//   let whoPays = Math.floor(Math.random() * people.length)
//   return people[whoPays];
// }
//
// name.textContent = whoIsBuying()
