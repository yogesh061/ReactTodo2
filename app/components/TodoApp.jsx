import React from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import {setTodos, getTodos} from 'TodoAPI';

class TodoApp extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: getTodos()
    }
  }

  componentDidUpdate(){
    setTodos(this.state.todos);
  }

  handelAddTodo = (text) => {
    //alert(text);
    this.setState({
          todos:[
            ...this.state.todos,
            {
              text: text,
              id: uuid(),
              completed: false
            }
          ]
    })
  }
  handleSearch = (showCompleted, searchText) => {
    this.setState (
      {
        showCompleted: showCompleted,
        searchText: searchText.toLowerCase()
      }
    )
  }

  handleToggle = (itemId) =>{
    var updatedTodos = this.state.todos.map((todo) => {
        if(todo.id === itemId){
          todo.completed = !todo.completed;
        }
        return todo;
    });
    this.setState ({
      todos: updatedTodos
    })
    //alert(itemId)
  }
  render(){
    var {todos} = this.state;
    return(
      <div>
        <TodoSearch onSearch = {this.handleSearch}/>
        <TodoList todos = {todos} onToggle = {this.handleToggle}/>
        <AddTodo onAddTodo = {this.handelAddTodo}/>
      </div>
    )
  }
}

export default TodoApp;
