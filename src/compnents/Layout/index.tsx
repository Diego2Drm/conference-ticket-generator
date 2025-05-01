import React from "react"
import { PatternLines } from "./Pattern-lines"
import bgMobile from "../../assets/images/background-mobile.png"
import bgTablet from "../../assets/images/background-tablet.png"
import bgDesktop from "../../assets/images/background-desktop.png"
import PatternSquigglyLineTop from "../../assets/images/pattern-squiggly-line-top.svg"
import PatternSquigglyLineBottomMobileTablet from "../../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg"


type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <section className="relative z-0 overflow-hidden ">
      <div className="absolute w-full h-full z-10 top-0 ">
        <PatternLines />
      </div>

      <div className="absolute z-10 top-7 right-0 w-1/2 h-20">
        <img src={PatternSquigglyLineTop} alt="pattern-squiggly-line-top"/>
      </div>

      <img src={bgMobile} alt="bg-mobile" className="md:hidden"/>
      <img src={bgTablet} alt="bg-tablet" className="hidden md:block xl:hidden"/>
      <img src={bgDesktop} alt="bg-desktop" className="hidden xl:block"/>

      <div className="absolute z-20 top-0 p-5 w-full lg:top-10">
        {children}
      </div>

      <div className="absolute z-10 bottom-0 left-0">
        <img src={PatternSquigglyLineBottomMobileTablet} alt="pattern-squiggly-line-bottom-mobile-tablet" />
      </div>

    </section>
  )

}

export { Layout };