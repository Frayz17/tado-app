import React from 'react'

import './todo-list-item.css'

function TodoListItem ({
  label,
  handleRemoveTodoItem,
  done,
  important,
  onToggleImportant,
  onToggleDone
}) {
  let styleItem = 'todo-list-item'
  if (done) {
    styleItem += ' done'
  }
  if (important) {
    styleItem += ' important'
  }

  return (
    <span className={styleItem}>
      <span
        onClick={onToggleDone}
        className='todo-list-item-label'
      >
        {label}
      </span>

      <button
        onClick={onToggleImportant}
        type='button'
        className='btn btn-outline-success btn-sm float-right'
      >
        <i className='fa fa-exclamation' />
      </button>

      <button
        type='button'
        className='btn btn-outline-danger btn-sm float-right'
        onClick={handleRemoveTodoItem}
      >
        <i className='fa fa-trash-o' />
      </button>
    </span>
  )
}

export default TodoListItem
