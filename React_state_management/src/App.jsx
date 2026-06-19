import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100vh'}}>
      <h4>Count : {count}</h4>
      <button onClick={()=>setCount(count + 1)}>click me</button>

    </div>
  )
}

export default App