import { useContext } from "react";
import { Logo } from "../utils/Logo"
import { TicketData } from "./TicketData";
import { Context } from "../../context/MyContext";

const Ticket = () => {

  const { submitData, handleReset } = useContext(Context)

  return (
    <section className="flex flex-col items-center w-full pt-5 lg:w-1/2 lg:mx-auto">
      <Logo />
      <h2 className="text-[28px] font-bold text-Neutral-0 text-center mt-5">Congrats, <span className="textGradient">{submitData.fullName}</span>! Your ticket is ready</h2>

      <p className="text-Neutral-300 text-center mt-4 md:text-xl ">
        We´ve emailed your ticket to <br className="hidden lg:block"/>
        <span className="text-Orange-500"> {submitData.email} </span>
        and will send <br /> updates in the run up to the event.
      </p>

      <TicketData />

    <button className="w-full p-2 font-bold tracking-widest bg-Orange-500 mt-10 rounded-lg text-Neutral-0 text-center" onClick={handleReset}>New Ticket</button>
    </section>
  )
}
export { Ticket };