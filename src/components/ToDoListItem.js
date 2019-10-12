import React from 'react'

const ToDoListItem = ({ item, important = false }) => {
  const style = {
    color: important ? 'tomato' : 'black'
  }

  return <span style={style}>{item}</span>
}

export default ToDoListItem
