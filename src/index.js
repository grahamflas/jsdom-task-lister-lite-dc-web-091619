document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form')
  form.addEventListener("submit", handleSubmitEvent)
});

function handleSubmitEvent(event){
  event.preventDefault();
  console.log("We've reached our submit event.")
  let newTask = document.querySelector('#new-task-description').value
  let newPriority = document.querySelector('#priority').value

  addToDo(newTask, newPriority)
  event.target.reset();
}

function addToDo(newTask, newPriority) {
  let ul = document.querySelector('#tasks');
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');

  if (newPriority === "high") {
    li.className = "high";
  } else if (newPriority === "medium"){
    li.className = "medium"
  } else {
    li.className = "low"
  }

  li.innerText = newTask
  deleteButton.innerText = "X"
  deleteButton.id = "delete"
  ul.appendChild(li)
  li.appendChild(deleteButton)

  deleteButton.addEventListener("click", removeToDo)
};

function removeToDo(event){
  event.target.parentElement.remove()
}

