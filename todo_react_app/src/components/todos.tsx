import React from 'react'
import { useTodos, type Todo } from '../store/todos'

const Todos = () => {
    const {todos} = useTodos();

    let filterData = todos;

  return (
    <ul>
        {
            filterData.map((todo:Todo) => {
                return <li key={todo.id}>
                    <input type="checkbox" id={`todo-${todo.id}`} 
                        checked={todo.completed}
                        onChange={() => toggleTodoAsCompleted(todo.id)}
                    />
                    <label htmlFor="{`todo-${todo.id}`}">{todo.task}</label>
                </li>
            })
        }
    </ul>
  )
}

export default Todos
