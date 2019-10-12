import React from 'react'
import ReactDom from 'react-dom'
import ToDoList from './components/ToDoList'
import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'

const App = () => {
  const todoData = [
    { item: 'drink coffe', important: false },
    { item: 'make tea', important: false },
    { item: 'learn react', important: true }
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList
        todoData={todoData}
      />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
