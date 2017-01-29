const $ = require('jquery');
export function setTodos(todos){
  if($.isArray(todos)){
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }
}
export function getTodos(){
  var stringTodos = localStorage.getItem('todos');
  var todos = [];
  try{
    todos = JSON.parse(stringTodos);
  }catch(e){
    console.log(e);
  }
  if($.isArray(todos)){
    return todos;
  } else {
    return [];
  }
}
