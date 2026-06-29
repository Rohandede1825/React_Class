import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  function seCount() {
    setCount(count + 1)
  }

  function handleMouseOver() {
   alert('mouse over')
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    console.log("name is ", e.target.value)
    alert('form submitted')
  }


  function handleChange(e){
    console.log(e.target.value)
  }

  return (
    <div>



      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder='enter your name' onChange={handleChange} />
        <button type='submit'>submit</button>
      </form>


{/*       
      <p onMouseOver={handleMouseOver}> im paragraph </p>

      <button onClick={seCount}>{count}</button> */}
    </div>
  )
}

export default App