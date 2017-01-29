import React from 'react';

class TodoSearch extends React.Component {
  constructor(props){
    super(props)
    //Not needed in case of arrow function this.handleSearch.bind(this);
  }
  handleSearch = (e) => {
    var showCompleted = this.showCompleted.checked;
    var searchText  = this.searchText.value;
    this.props.onSearch(showCompleted, searchText);
  }
  render(){
    return(
      <div>
        <div>
          <input type = 'search'
            ref = {(input)=>{this.searchText = input}}
            placeholder = 'Search Todos'
            onChange = {this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type = 'checkbox'
              ref = {input => {this.showCompleted = input}}
              onChange = {this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
}

export default TodoSearch;
