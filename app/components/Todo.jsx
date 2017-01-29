import React from 'react';


class Todo extends React.Component {
  constructor(props){
    super(props)
  }
  handleChange = () => {
    var {id}  = this.props;
    this.props.onToggle(id);
  }
  render() {
    debugger;
    var {id, text, completed}  = this.props;
    return(
      <div onClick = {this.handleChange}>
        <input type = 'checkbox' checked = {completed}/>
        {text}
      </div>
    )
  }
}
export default Todo;
