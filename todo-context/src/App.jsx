import { useState, useEffect } from 'react';
import { TodoProvider } from './context';
import './App.css'
import { TodoForm, TodoItem } from './components';

function App() {
  const [todos, setTodos] = useState([]);

  // addtodo
  const addTodo = (todo) => {
    // also want old state , so we can use callback function inside setTodo fn
    // id mein new id date pe liya hai, phir spread operator lga  kr old value bhi rakh lega
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  // updatetodo

  const updatedTodo = (id, todo) => {
    // also want old state , so we can use callback function inside setTodo fn
    // callback map function take 1 argument "prevTodo" in cabllback 
    // matching old state value id === given id
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  // deleteTodo
  const deleteTodo = (id) => {
    // delete krte time old state ko get value ko callback se
    // filter true value pe work krte h  filter ke andr todo alg callback value hai
    setTodos((prev) => prev.filter((todo) => todo.id != id))
  }
  // toggleComplete
  const toggleComplete = (id) => {
    // yaha pe old state mein map chalana hai id match hoga to old state todo ki spread kra liya 
    // spread prevtoggle mein completed value mein not operator lga do jo false hai true krdo
    //  true ko false kardo
    setTodos((prev) => prev.map((prevToggle) => prevToggle.id === id ? { ...prevToggle, completed: !prevToggle.completed } : prevToggle))
  }
  // basic all functionality completed here

  // now start local-storage ki functionality
  // get todos at use-effects
  useEffect(() => {
    // first
    const todoes = JSON.parse(localStorage.getItem("todos"));
   
    if (todoes && todoes.length > 0) {
      setTodos(todoes);
    }

  }, []); //3rd []
 
// set todos at use-effects
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3 ">
            {/*Loop and Add TodoItem here */}

            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                {/* Render TodoItem or content here */}
                {/* For example, assuming TodoItem is a component: */}
                <TodoItem todo={todo} />
              </div>
            ))}



          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App;
