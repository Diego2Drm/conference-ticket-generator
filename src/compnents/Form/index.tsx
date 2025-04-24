import { DragAndDrop } from "./DragAndDrop"
import { Questionary } from "./Questionary"
const Form = () => {
  return (
    <form>
      <DragAndDrop />
      <Questionary />

      <button className="bg-Orange-500 text-Neutral-900 w-full mt-5 text-center font-bold p-2 rounded-lg">Generate My Tikect</button>
    </form>
  )
}

export { Form };