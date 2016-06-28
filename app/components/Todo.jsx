var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  componentDidUpdate: function () {
        console.log('update');
        var input = ReactDom.findDOMNode(this.refs.editText);
        if(input) {
            input.focus();
        }
    },
  render: function(){
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;
      if (edited) {
                message = "Edited ";
                timestamp = editedAt;
            }
      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    var renderTodo = () => {
            if(!edit) {
                return <p className="todo-text">{text}</p>;
            } else {
                return <form onSubmit={(e)=> {
                    e.preventDefault();
                    var editedText = this.refs.editText.value;
                    dispatch(actions.editTodo(id, editedText));
                }}><input type="text" ref="editText" defaultValue={text} onBlur={()=> {
                    dispatch(actions.editTodo(id, ''));
                }} autofocus id="editInput"/>
                </form>
            }
        };

        var renderEdit = () => {
            if(!edit) {
                return <button className="button alert del-btn" ref="delBtn" onClick={() => {
                    dispatch(actions.deleteTodo(id));
                }}>X</button>;
            }
            return;
        }

    return (
      <div className={todoClassName} >
        	<div>
        		<input type="checkbox" onClick={() => {
            dispatch(actions.toggleTodo(id))
            }} checked={completed} ref="todoCheckbox"/>
        	</div>
        	<div onClick={() => {
                dispatch(actions.editTodo(id, ''))
            }} ref="todo">
                {renderTodo()}
        		<p className="todo_subtext">{renderDate()}</p>
        	</div>
            <div className="todoBtns">
              {renderEdit()}
            </div>
      </div>
    )
  }
});

export default connect()(Todo);
