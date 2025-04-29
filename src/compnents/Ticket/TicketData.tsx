import ticketImg from "../../assets/images/pattern-ticket.svg"
import LogoMark from "../../assets/images/logo-mark.svg"
import IconGitHub from "../../assets/images/icon-github.svg"
import { useContext } from "react";
import { Context } from "../../context/MyContext";

const TicketData = () => {

  const { submitData, imagePrevious } = useContext(Context)

  return (
    <div className="mt-14 relative">
      <img src={ticketImg} alt="ticket image" className="" />

      <div className="w-60 h-32 absolute top-3 left-3 flex flex-col justify-between">
        <div className="flex gap-5 ">
          <img src={LogoMark} alt="logo-mark" className="w-8 h-8" />
          <p className="text-Neutral-0 text-xl">
            Coding Conf <br />
            <span className="text-neutral-300 text-xs">Jan 31, 2025 / Austin, TX</span>
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <img src={imagePrevious ? imagePrevious : undefined} alt="avatar-image" className="w-10 h-10 rounded-md" />
          <p className="text-Neutral-0 text-xl">
            {submitData.fullName}
            <span className="flex items-center gap-1 text-neutral-300 text-xs">
              <img src={IconGitHub} alt="icon GitHub" />
              {submitData.userName}
            </span>
          </p>
        </div>
      </div>
      <p className="absolute right-0 top-16 text-xl text-Neutral-500 rotate-90">
        #01609
      </p>
    </div>
  );
};

export { TicketData };