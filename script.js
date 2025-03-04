const inputvalue = document.getElementById("inputtext");
const containerlist = document.getElementById("list-container");
const addbutton = document.getElementById("add");

addbutton.addEventListener("click", function () {
  let taskli = document.createElement("li");
  taskli.innerHTML = inputvalue.value;
  containerlist.appendChild(taskli);
  let removeli = document.createElement("p");
  removeli.innerHTML = "&times;";
  taskli.appendChild(removeli);

  inputvalue.value = "";
  saveData();
});
containerlist.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "P") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", containerlist.innerHTML);
}
function showData() {
  containerlist.innerHTML = localStorage.getItem("data");
}
showData();