import React, { useState ,useEffect} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)


  // useEffect(()=>{
  //   alert('render!')
  //   //first render

  //   //page load --0
  //   //page load --1

  //   return ()=>{
  //     alert('close!')
  //     //cleanup
  //     //first page close --0;
  //     //first page close --1;
  //   }
  // })




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
 
<div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="" />
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">Erin Lindford</p>
      <p className="font-medium text-gray-500">Product Engineer</p>
    </div>
    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
      Message
    </button>
  </div>
</div>
  )
}

export default App