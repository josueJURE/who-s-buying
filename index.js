const image = document.getElementById("image");
const btn = document.getElementById("btn");
const people = ["pierre", "paul", "jacques", "henry" ];
const date = new Date().getDay();
const daysOfWeek = Array.from({length: 7}, (item, i) => {
  return new Date(0,0,i).toLocaleDateString("en-US", {weekday: "long"})
})
var today = daysOfWeek[date];
const names = {
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

  btn.style.display = "none";

  <!-- message to the person paying -->
  let message = document.getElementsByClassName("message")[0];
  message.style.display = "block";
  message.textContent = personPaying;

  <!--avatar of person paying -->
  image.src = `picture/${names[today]}.png`;
  image.alt = "picture of an avatar";

  <!--displaying <i/> tags -->
  var unseenArray = [...document.getElementsByClassName("unseen")]
  unseenArray.map(x => x.style.display = "inline");

  <!--displaying containers and setting height -->
  let containers = [...document.getElementsByClassName("containers")];
  containers.map(x => x.style.display = "block");
  containers.map(x => x.style.height = "920px");


  <!-- floating divs with class container to left -->
  containers.map(x => x.style.cssFloat = "left")

  document.getElementsByTagName("h1")[0].textContent = `Hi ${names[today]} select you mehtod of payment`
}, false);
