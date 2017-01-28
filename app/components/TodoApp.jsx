import React from 'react';
import TodoList from 'TodoList';

class TodoApp extends React.Component {
  constructor (props){
    super(props);
    this.state = {
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

  render(){
    var {todos} = this.state;
    return(
      <div>
        <TodoList todos = {todos}/>
      </div>
    )
  }
}

export default TodoApp;
