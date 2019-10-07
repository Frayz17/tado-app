import React from 'react'
import ToDoListItem from './ToDoListItem'

const ToDoList = () => {
  const items = ['Coffee', 'tea']
  return (
    <ul>
      <li><ToDoListItem item={items[0]} key={items[0]} /></li>
      <li><ToDoListItem item={items[1]} key={items[1]} /></li>
    </ul>
  )
}

export default ToDoList
