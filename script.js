let tableBody = document.querySelector("tbody");
let task = document.querySelector("input");
let counterDiv = document.querySelector(".task-counter");

let updateCounter = function () {
  let rows = tableBody.querySelectorAll("tr").length;
  counterDiv.textContent = `Total Tasks: ${rows}`;
};

let AddTask = function () {
  if (task.value.trim() === "") return;
  tableBody.innerHTML += `
        <tr>
            <td><input type="checkbox" onclick="clicked(this)"></td>
            <td>${task.value}</td>
            <td>
                <img onclick="delTask(this)" 
                     src="./assets/delete-icon.png" 
                     alt=""/>
            </td>
           
        </tr>
    `;
  task.value = "";
  updateCounter();
};

let delTask = function (element) {
  element.parentElement.parentElement.remove();
  updateCounter();
};

let clicked = function (checkbox) {
  let td = checkbox.parentElement.nextElementSibling;
  if (checkbox.checked) {
    td.style.textDecoration = "line-through";
  } else {
    td.style.textDecoration = "none";
  }
};

task.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    AddTask();
  }
});
