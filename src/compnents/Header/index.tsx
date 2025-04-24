import Logo from "../../assets/images/logo-full.svg"

const Header = () => {
  return (
    <header className="flex flex-col items-center w-full pt-5">
      <img src={Logo} alt="logo coding conf" />

      <h2 className="text-Neutral-0 font-bold capitalize text-3xl mt-10 text-center">Your journey to coding conf 2025 starts here!</h2>

      <p className="text-Neutral-300 text-center text-lg mt-5">Secure your spot at netx yaer's biggest coding conference.</p>
      
    </header>
  )
}

export { Header };