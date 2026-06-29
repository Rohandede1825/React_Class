import React, { createContext, use, useState } from 'react'
import ChildA from './components/ChildA'



//1. create Context
const UserContext = createContext();
//2.wrap up all the child inside provider
//3.pass the value
//4.get value inside the cosumer 

const ThemeContext = createContext()

const App = () => {
  const [user, SetUser] = useState({ name: "rohan" })

  const [theme, setTheme] = useState('light');
  return (
    <div>
      <UserContext.Provider value={user}>

        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div style={{ backgroundColor: theme === 'light' ? 'blue' : 'black' }}>
            <ChildA />
          </div>

        </ThemeContext.Provider>
      </UserContext.Provider>

    </div>
  )
}

export default App
export { UserContext }
export { ThemeContext }