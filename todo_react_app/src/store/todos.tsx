import { createContext, type ReactNode } from "react";

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

export const todosContext =  createContext(null)



export const TodosProvider = ({children}: TodosProviderProps) => {
    return <todosContext.Provider value={}>
        {children}
    </todosContext.Provider>
}




