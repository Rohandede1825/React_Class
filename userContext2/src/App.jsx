import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA'

import { UserContext } from './Usercontext'


const App = () => {
  const [user , setUser ]= useState({name:"rohan", age:"23"})
  return (
    <div>
      <UserContext.Provider value={user}>
       <ChildA/>
      </UserContext.Provider>
    </div>
  )
}

export default App
export {UserContext}