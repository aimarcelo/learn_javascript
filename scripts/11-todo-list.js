const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {
  let todoListHTML = ''

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`; //generating the html
    todoListHTML += html;
  }

  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);
  
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