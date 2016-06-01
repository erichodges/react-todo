var React = require('react');

var TodoSearch = React.createClass({
  handlesearch: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handelSearch}/>
        </div>
        <div>
          <label>
          <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
          Show completed todos
          </label>
        </div>
      </div>
    )
  }

});

module.exports = TodoSearch;
