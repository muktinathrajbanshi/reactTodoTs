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
    toggleTodoAsCompleted:(id:string) => void;
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
            // console.log("my previous data " + prev);
            // console.log(newTodos);
            return newTodos
        })

    }

    // mark completed
    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev) => {
            let newTodos = prev.map((todo) => {
                if(todo.id === id) {
                    return {...todo, completed:!todo.completed}
                }
            })
            return newTodos;
        })
    } 


    return <todosContext.Provider value={{todos, handleAddToDo, toggleTodoAsCompleted}}>
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



