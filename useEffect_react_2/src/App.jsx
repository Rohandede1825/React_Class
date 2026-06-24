import React, { useState ,useEffect} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)


  useEffect(()=>{
    alert('render!')
    //first render

    //page load --0
    //page load --1

    return ()=>{
      alert('close!')
      //cleanup
      //first page close --0;
      //first page close --1;
    }
  })




  //ui render ---- render
  //




  // //useeffect
  // first render
  // second render
  // cleanup

  // dependency array

  // useEffect(()=>{

  // },[])

  // useEffect(()=>{
  //   alert('run at every render!')
  // })

  // useEffect(()=>{
  //   alert('run at first render!')
  // },[])

  // useEffect(()=>{
  //   alert('run when count changes!', count)
  // },[count])

  //  useEffect(()=>{
  //   alert('run when count, total  changes!', count)
  // },[count , total])


  // useEffect(()=>{
  //   //login logic 
  //   alert('login successfully')
    
  // },[count])
  
  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>Count: {count}</h2>
      <h2>Total: {total}</h2>
      <button onClick={()=>setCount(count+1)}>count</button>
      <button onClick={()=>setTotal(total+1)}>Total</button>
    </div>
  )
}

export default App