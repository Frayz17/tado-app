import React from 'react'
import ToDoListItem from './ToDoListItem'

const ToDoList = ({ todoData }) => {
  const list = todoData.map(todo => {
    return (
      <li key={todo.item}>
        <ToDoListItem {...todo} />
      </li>
    )
  }
  )

  return (
    <ul>
      {list}
    </ul>
  )
}

export default ToDoList
