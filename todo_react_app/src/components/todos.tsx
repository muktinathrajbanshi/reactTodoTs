import React from 'react'
import { useTodos } from '../store/todos'

const Todos = () => {
    const {todos} = useTodos();

    let filterData = todos;

  return (
    <ul>
        {
            filterData.map((dodo) => {
                
            })
        }
    </ul>
  )
}

export default Todos
