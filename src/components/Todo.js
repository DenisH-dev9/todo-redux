import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ toggleTodo, removeTodo, completed, text }) => (
  <div className='todo'>
    <li
      className='todoText'
      onClick={toggleTodo}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </li>
    <button 
      className='removeTodoButton'
      onClick={removeTodo}
    ></button>
  </div>
);

Todo.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
