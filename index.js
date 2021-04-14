const name = document.getElementById("name");
const people = ["pierre", "paul", "jacques", "henry" ]

function whoIsBuying() {
  let whoPays = Math.floor(Math.random() * people.length)
  return people[whoPays]
}

name.textContent = whoIsBuying()
