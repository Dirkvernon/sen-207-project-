const form = document.getElementById('form');
const task = document.getElementById('task');
const list = document.getElementById('list');

form.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();

  if(task.value === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = task.value; //This is typically used to update the content of an HTML element with JavaScript,

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.innerHTML = 'Edit';
  editBtn.addEventListener('click', editTask);//This code creates a new button element and assigns it to the variable editBtn.


  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.addEventListener('click', deleteTask);

  li.appendChild(editBtn);//the appendChild() method is used to add a child element to a parent element. 
  li.appendChild(deleteBtn);
  list.appendChild(li);
  task.value = '';
}

function editTask() {
  const li = this.parentNode;
  const task = li.firstChild.data;
  const newTask = prompt('Edit task:', task);
  li.firstChild.data = newTask;
}

function deleteTask() {
  const li = this.parentNode;
  if (confirm("Sure you want to delete this task?")) {
    list.removeChild(li);
  }
}
