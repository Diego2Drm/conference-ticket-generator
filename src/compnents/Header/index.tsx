import { Logo } from "../utils/Logo";


const Header = () => {
  return (
    <header className="flex flex-col items-center w-full pt-5">
      <Logo />
      <h2 className="text-Neutral-0 font-bold capitalize text-3xl mt-10 text-center
      lg:text-5xl
      ">
        Your journey to coding conf <br className="hidden lg:block"/> 2025 starts here!
      </h2>

      <p className="text-Neutral-300 text-center text-lg lg:mt-5 lg:text-xl">Secure your spot at netx yaer's biggest coding conference.</p>

    </header>
  )
}

export { Header };