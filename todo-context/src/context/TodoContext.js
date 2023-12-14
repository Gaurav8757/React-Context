/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";
// creating context of todo
export const  TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    // eslint-disable-next-line no-unused-vars
    addTodo: (todo) =>{},
    updatedTodo: (id, todo)=> {},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{},

})


// here use krna h kiska context: TodoContext
export const useTodo = () =>{
    return useContext(TodoContext);
}

// PROVIDER OF TodoContext
export const TodoProvider = TodoContext.Provider;