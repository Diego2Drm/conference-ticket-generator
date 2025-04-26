import { useContext } from "react"
import { Register } from "./Register"
import { Confirmation } from "./Confirmation"
import { Context } from "./context/MyContext"

function App() {
  const { isLogin } = useContext(Context);

  return isLogin ? <Confirmation /> : <Register />

}

export default App
