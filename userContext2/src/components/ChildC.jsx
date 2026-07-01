import React, { useContext } from 'react'
import { UserContext } from '../App'


const ChildC = () => {
const user = useContext(UserContext)
  return (
    <div>         
        {user.name}
        {user.age}
    </div>
  )
}

export default ChildC