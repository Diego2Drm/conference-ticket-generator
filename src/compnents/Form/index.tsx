import { useContext, useEffect } from "react"
import { DragAndDrop } from "./DragAndDrop"
import { Questionary } from "./Questionary"
import { Context } from "../../context/MyContext"
const Form = () => {
  const { handleSubmit } = useContext(Context)

  return (
    <form onSubmit={handleSubmit}>
      <DragAndDrop />
      <Questionary />

      <button className="bg-Orange-500 text-Neutral-900 w-full mt-5 text-center font-bold p-2 rounded-lg"
        type="submit"
      >
        Generate My Tikect
      </button>
    </form>
  )
}

export { Form };