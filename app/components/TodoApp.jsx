import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class TodoApp extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos:[
        {
          id:1,
          text:"Item 1"
        },
        {
          id:2,
          text:"Item 2"
        },
        {
          id:3,
          text:"Item 3"
        },
        {
          id:4,
          text:"Item 4"
        }
      ]
    }
  }

  handelAddTodo(text){
    alert(text);
  }
  handleSearch = (showCompleted, searchText) => {
    this.setState (
      {
        showCompleted: showCompleted,
        searchText: searchText.toLowerCase()
      }
    )
  }
  render(){
    var {todos} = this.state;
    return(
      <div>
        <TodoSearch onSearch = {this.handleSearch}/>
        <TodoList todos = {todos}/>
        <AddTodo onAddTodo = {this.handelAddTodo}/>
      </div>
    )
  }
}

export default TodoApp;
