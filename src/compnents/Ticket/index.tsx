import { Logo } from "../utils/Logo"
import { TicketData } from "./TicketData";


const Ticket = () => {
  return (
    <section className="flex flex-col items-center w-full pt-5">
      <Logo />
      <h2 className="text-[28px] font-bold text-Neutral-0 text-center mt-5">Congrats, <span className="textGradient">Jonatan Kristof</span>! Your ticket is ready</h2>

      <p className="text-Neutral-300 text-center mt-4">
        We´ve emailed your ticket to
        <span className="text-Orange-500"> jonatan@gmail.com </span>
        and will send <br /> updates in the run up to the event.
      </p>

      <TicketData />

    </section>
  )
}
export { Ticket };