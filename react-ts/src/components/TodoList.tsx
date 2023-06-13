import React from 'react'
import { Todo } from '../model'
import "./style.css"

interface Props {
    todos: Todo[],
    setTodos:  React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div>
        TodoList
        </div>
  )
}

export default TodoList