import React, { useState } from 'react';
import "./App.css";
import InputField from './components/inputField';
import TodoList from './components/TodoList';
import { Todo } from './model';
const App: React.FC = () => {

  const[todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if(todo){
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
      setTodo("")
    }
  }
  //console.log(todo)
  //console.log(todos)
  return (
    <>
    <div className="App">
     <span className='heading'> TO DO's</span>
      <InputField todo = {todo} setTodo = {setTodo} handleAdd = {handleAdd} />  
      {/* The letter must start with capital. */}
      <TodoList/>
    </div>
    </>
  );
}

export default App;
