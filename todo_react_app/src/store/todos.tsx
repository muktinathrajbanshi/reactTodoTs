import { createContext, useContext, useState, type ReactNode } from "react";

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
    handleAddToDo: (task: string) => void; // call signature
}

export const todosContext =  createContext<todosContext | null>(null)



export const TodosProvider = ({children}: TodosProviderProps) => {

    const[todos, setTodos] = useState<Todo[]>([])

    const handleAddToDo = (task: string) => {

        setTodos((prev) => {
            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    task: task,
                    completed: false,
                    createdAt: new Date()
                },
                ...prev
            ]
            return newTodos
        })

    }

    return <todosContext.Provider value={{todos, handleAddToDo}}>
        {children}
    </todosContext.Provider>
}

// consumer 
export const useTodos = () => {
    const todosConsumer = useContext(todosContext);

    if(!todosConsumer){
        throw new Error("useTodos used outside of Provider");
    }

    return todosConsumer;
}



