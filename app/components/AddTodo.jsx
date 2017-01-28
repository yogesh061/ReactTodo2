import React from 'react';

class AddTodo extends React.Component {
  constructor(props){
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var todotext  = this.todotext.value;
    if(todotext.length>0){
      this.todotext.value = "";
      this.props.onAddTodo(todotext);
    }else{
      this.todotext.focus();
    }
  }
  
  render(){
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input type = "text"
            ref = {(input)  => {this.todotext = input;}}
            placeholder = "Add New Item"/>
          <button className = "button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default AddTodo
