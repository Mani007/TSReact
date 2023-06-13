import React, { useState } from 'react';
import "./App.css";
import InputField from './components/inputField';
import { Todo } from './model';
const App: React.FC = () => {

  const[todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }
  return (
    <>
    <div className="App">
     <span className='heading'> TO DO's</span>
      <InputField todo = {todo} setTodo = {setTodo} handleAdd = {handleAdd} />  
      {/* The letter must start with capital. */}
    </div>
    </>
  );
}

export default App;
