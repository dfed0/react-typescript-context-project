import React, { useContext } from 'react'

import TodoItem from './TodoItem'
import { TodosContext } from '../store/todos-content'
import classes from './Todos.module.css'
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext)
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.text)}
        />
      ))}
    </ul>
  )
}
export default Todos
