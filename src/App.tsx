import { useState } from "react"
import { Register } from "./Register"
import { Confirmation } from "./Confirmation"

function App() {
  const [isLogin, setIsLogin] = useState(false)

  return isLogin ? <Confirmation/> : <Register />
}

export default App
