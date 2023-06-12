import React, { useState } from 'react';
import "./App.css";
import InputField from './components/inputField';

const App: React.FC = () => {

  const[todo, setTodo] = useState<string>("");



  return (
    <>
    <div className="App">
     <span className='heading'> TO DO's</span>
      <InputField todo = {todo} setTodo = {setTodo} />  
      {/* The letter must start with capital. */}
    </div>
    </>
  );
}

export default App;
