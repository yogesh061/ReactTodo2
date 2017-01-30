import React from 'react';
import moment from 'moment';

class Todo extends React.Component {
  constructor(props){
    super(props)
  }
  handleChange = () => {
    var {id}  = this.props;
    this.props.onToggle(id);
  }
  render() {
    var {id, text, completed, createdAt, completedAt}  = this.props;
    var renderDate = () =>  {
      var message = 'Created ';
      var timestamp = createdAt;
      if(completed){
        message = 'Completed ';
        timestamp = completedAt;
      }
      return message +' '+ moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    }
    return(
      <div onClick = {this.handleChange}>
        <input type = 'checkbox' checked = {completed}>
          <label>{text}</label>
        </input>
        <p>{renderDate()}</p>
      </div>
    )
  }
}
export default Todo;
