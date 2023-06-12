import React from 'react'
import './style.css'
const InputField =() => {
  return (
    <form className='input'>
        <input type="input" placeholder="My To Do's " className='input__box'/>
        <button className='input_submit' type='submit'> ADD </button>
    </form>
  )
}

export default InputField