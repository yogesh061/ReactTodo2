import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

class TodoApp extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos:[
        {
          id:uuid(),
          text:"Item 1"
        },
        {
          id:uuid(),
          text:"Item 2"
        },
        {
          id:uuid(),
          text:"Item 3"
        },
        {
          id:uuid(),
          text:"Item 4"
        }
      ]
    }
  }

  handelAddTodo = (text) => {
    //alert(text);
    this.setState({
          todos:[
            ...this.state.todos,
            {
              text: text,
              id: uuid()
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
