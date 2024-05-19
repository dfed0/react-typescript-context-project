import React, { useState } from 'react'
import Todo from '../models/todo'
type TodosContextObj = {
  items: Todo[]
  addTodo: (text: string) => void
  removeTodo: (text: string) => void
}
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (text: string) => {},
})

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([])
  console.log(props)
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo)
    })
  }
  const removeTodoHandler = (itemText: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((list) => list.text !== itemText)
    })
  }
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  }
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider
