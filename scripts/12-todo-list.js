const todoList = [{
  name: 'make dinner',
  dueDate: '2024-04-06'
  }, {
  name:'wash dishes',
  dueDate: '2024-04-06'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = ''

  todoList.forEach((todoObject, index) => {
    const { name, dueDate }  = todoObject
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button"
      >
        Delete
      </button>
    `; //generating the html
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      })
    });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
})

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value

  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name, 
    dueDate
  });
  
  inputElement.value = '';

  renderTodoList();

  //ARRAYS
// //1. create array to store todos
// const todoList = ['make dinner', 'wash dishes'];

// //2. when we click add
// function addTodo() {
//   //3.get text from input textbox
//   const inputElement = document.querySelector('.js-name-input');
//   const name = inputElement.value;

//   //4. add it to array
//   todoList.push(name);
//   //5. display in console
//   console.log(todoList);
//   //6. empty textbox after add
//   inputElement.value = '';

}