// todays date
const date = new Date();
let year = date.getFullYear();
let month = date.toLocaleString("en-EN", { month: "long" });
let day = date.getDate();
document.getElementById("date").innerHTML = month + " " + day + "," + year;

// Create a new todo
let c = 1;
function NewTodo() {
  let divc = document.createElement("button");
  let todo = prompt("What would you like to do?");
  divc.innerHTML = todo;
  divc.setAttribute("class", "card");
  divc.setAttribute("id", c);
  divc.setAttribute("title", "on");
  document.getElementById("cards").append(divc);
  c++;
}

// Strike through on click
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("card")) {
    var i = event.target.id;
    strike(i);
  }
});
function strike(i) {
  let title = document.getElementById(i).getAttribute("title");
  if (title == "on") {
    document.getElementById(i).style.textDecoration = "line-through";
    document.getElementById(i).setAttribute("title", "off");
  } else {
    document.getElementById(i).style.textDecoration = "none";
    document.getElementById(i).setAttribute("title", "on");
  }
}


