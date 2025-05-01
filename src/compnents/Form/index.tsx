import { useContext } from "react"
import { DragAndDrop } from "./DragAndDrop"
import { Questionary } from "./Questionary"
import { Context } from "../../context/MyContext"
const Form = () => {
  const { handleSubmit } = useContext(Context)

  return (
    <form onSubmit={handleSubmit} className="lg:w-1/2 lg:mx-auto">
      <DragAndDrop />
      <Questionary />

      <button className="bg-Orange-500 text-Neutral-900 w-full mt-5 text-center font-bold p-2 rounded-lg hover:bg-Orange-700 duration-200 ease-in-out cursor-pointer"
        type="submit"
      >
        Generate My Tikect
      </button>
    </form>
  )
}

export { Form };