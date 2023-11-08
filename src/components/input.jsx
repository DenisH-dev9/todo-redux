import React from 'react'
import '../style/input.css'

export default function Input() {
  return (
    <div className="inputSection">
      <input
        type="text"
        className='todoInput'
        placeholder="What do you need to do?"
        // value={todoValue}
        // onChange={(event) => setTodoValue(event.target.value)}
        // onKeyPress={addTodo}
        // autoFocus
      />
      <button className="addTodobtn" >Enter</button>
    </div>
  )
}