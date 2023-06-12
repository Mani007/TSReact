import React from 'react'
import './style.css'
interface Props{
  todo: string,
  setTodo:  React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props> =({todo, setTodo}) => {
  return (
    <form className='input'>
        <input type="input" placeholder="My To Do's " className='input__box'/>
        <button className='input_submit' type='submit'> ADD </button>
    </form>
  )
}

export default InputField