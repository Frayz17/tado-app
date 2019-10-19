import React, { Component } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.iterableId = 1

    this.state = {
      todoData: [
        this.createTodoItem('drink coffe'),
        this.createTodoItem('drink tea'),
        this.createTodoItem('watch movie'),
        this.createTodoItem('make pizza')
      ],
      searchWords: '',
      filterBtn: 'all'
    }
  }

  createTodoItem = (label) => {
    return ({
      id: this.iterableId++,
      label,
      important: false,
      done: false
    })
  }

  onToggleProperty = (arr, id, property) => {
    const newArr = [...arr]

    return newArr.map(item => {
      if (item.id === id) {
        item[property] = !item[property]
      }
      return item
    })
  }

  handleRemoveTodoItem = (id) => {
    let newTodoData = [...this.state.todoData]
    newTodoData = newTodoData.filter(item => item.id !== id)

    this.setState({
      todoData: newTodoData
    })
  }

  handleAddItem = (label) => {
    this.setState(({ todoData }) => {
      const newItem = this.createTodoItem(label)

      const newData = [
        ...todoData,
        newItem
      ]

      return {
        todoData: newData
      }
    })
  }

  handleSearch = (e) => {
    this.setState({
      searchWords: e.target.value
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onToggleProperty(todoData, id, 'done')
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onToggleProperty(todoData, id, 'important')
      }
    })
  }

  handleFilterBtn = (filterLabel) => {
    this.setState({
      filterBtn: filterLabel
    })
  }

  handleFilter = (items, filter) => {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter(item => !item.done)
      case 'done':
        return items.filter(item => item.done)
      default:
        return 'There must be done, all or active'
    }
  }

  render () {
    const { todoData, searchWords, filterBtn } = this.state
    const {
      handleRemoveTodoItem,
      onToggleImportant,
      onToggleDone,
      handleAddItem,
      handleSearch,
      handleFilterBtn,
      handleFilter
    } = this

    const toDo = todoData.filter(el => el.done === false).length
    const done = todoData.length - toDo

    const filteredTodos = todoData.filter(item => {
      return item.label.includes(searchWords)
    })

    return (
      <div className='todo-app'>
        <AppHeader toDo={toDo} done={done} />
        <div className='top-panel d-flex'>
          <SearchPanel
            handleSearch={handleSearch}
            searchWords={searchWords}
          />
          <ItemStatusFilter
            handleFilterBtn={handleFilterBtn}
            filterBtn={filterBtn}
          />
        </div>

        <TodoList
          todos={handleFilter(filteredTodos, filterBtn)}
          handleRemoveTodoItem={handleRemoveTodoItem}
          onToggleImportant={onToggleImportant}
          onToggleDone={onToggleDone}
        />

        <ItemAddForm
          handleAddItem={handleAddItem}
        />
      </div>
    )
  }
}
