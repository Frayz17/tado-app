import React from 'react'
import ReactDom from 'react-dom'
import ToDoList from './components/ToDoList'
import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
