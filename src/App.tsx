import { useContext, } from "react"
import { Register } from "./Register"
import { Confirmation } from "./Confirmation"
import { Context } from "./context/MyContext"
import { SnipperIndicator } from "./compnents/SnipperIndicator";

function App() {
  const { isLogin, isLoading } = useContext(Context);
 
  return (
    <>
      {
        isLoading ? (
          <SnipperIndicator />
        ) : isLogin ? (
          <Confirmation />
        ) : (
          <Register />
        )
      }
    </>
  )

}

export default App
