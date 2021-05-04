const name = document.getElementById("name");
const image = document.getElementById("image");
var personPaying = ""
const btn = document.getElementById("btn");
const people = ["pierre", "paul", "jacques", "henry" ];
const date = new Date().getDay();
const floatContainer = document.getElementById("floatContainer");
const container2 = document.getElementsByClassName("container2")[0];
const floatLeft = document.getElementsByClassName("floatLeft")


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
btn.addEventListener("click", function() {
  date >= 0 && date < 2 ? personPaying = `today is ${today} so ${names[today]} is footing the bill`
  : date >= 2 && date < 4 ? personPaying = `today is ${today} ${names[today]} is paying`
  : date >= 4 && date < 6 ?   personPaying = `Hi ${names[today]}, today is ${today} so although we are in Amsterdam we're not going ducth`
  : personPaying = `Hi ${names[today]}, today is ${today}, your turn to pay today`
  name.textContent = personPaying;
  image.src = `picture/${names[today]}.png`;
  image.alt = "picture of an avatar";
  var unseen = document.getElementsByClassName("unseen");
  var unseenArray = [...unseen]
  unseenArray.map(x => x.style.display = "inline");
  document.getElementsByClassName("container1")[0].style.height = "920px";
  btn.style.display = "none";
  container2.style.display = "block";
  for(var i = 0; i < floatLeft.length; i++) {
    floatLeft[i].style.cssFloat = "left"
  }
  document.getElementsByTagName("h1")[0].textContent = `how would you like to pay ${names[today]}`
}, false);
