import React from 'react'
import ReactDom from 'react-dom'

const ToDOList = () => {

  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  );
}

const AppHeader = () => {
  return (
    <h1>My Todo List</h1>
  )
}

const SearchPanel = () =>  <input placeholder="search" />

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDOList />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))