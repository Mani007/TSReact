import React from 'react';
import "./App.css";
import InputField from './components/inputField';

const App: React.FC = () => {
  return (
    <>
    <div className="App">
     <span className='heading'> TO DO's</span>
      <InputField />  
      {/* The letter must start with capital. */}
    </div>
    </>
  );
}

export default App;
