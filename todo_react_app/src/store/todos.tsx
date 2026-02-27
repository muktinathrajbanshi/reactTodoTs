import { createContext, useState, type ReactNode } from "react";

export type TodosProviderProps = {
    children : ReactNode
}

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

export type todosContext = {
    todos: Todo[];
    handleAddToDo: (task: string) => void;
}

export const todosContext =  createContext<todosContext | null>(null)



export const TodosProvider = ({children}: TodosProviderProps) => {

    const[todos, setTodos] = useState<Todo[]>([])

    const handleAddToDo = (task) => {

        setTodos(() => {
            
        })

    }

    return <todosContext.Provider value={{todos, handleAddToDo}}>
        {children}
    </todosContext.Provider>
}




