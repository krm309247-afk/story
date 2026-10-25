
import { useState } from 'react'
import Log from '../Components/Log'
export default function Login() {
  const [name,setName] = useState('')
  return (
    <div>
      <Log/>
    </div>
  )
}
