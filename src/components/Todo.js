import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

const Todo = ({ toggleTodo, removeTodo, completed, text }) => (
  <div className='todo'>
    <input 
      type='checkbox'
      onClick={toggleTodo}
      checked={completed ? true : false}
      
      >
    </input>
    <li
      className='todoText'
      onClick={toggleTodo}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </li>
      <NavLink to="/edit">
        <button
          className="toEdit linkButton"
        >
        </button>
      </NavLink>
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
