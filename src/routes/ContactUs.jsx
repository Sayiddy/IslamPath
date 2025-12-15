import { useEffect } from "react"
import NavBar from "../components/NavBar"

export default function ContactUs() {
  return (
    <>
      <NavBar currentPage="Contact Us"/>
            {/* <img src={goldPattern} alt="" className="absolute left-0 bottom-0 opacity-30 z-0 pointer-events-none size-44" style={{transform: 'translate(55%, 50%)'}}/>
            <img src={goldPattern} alt="" className="absolute left-0 bottom-0 opacity-30 z-0 pointer-events-none size-64" style={{transform: 'translate(-50%, 30%)'}}/>
            <img src={goldPattern} alt="" className="absolute left-0 bottom-0 opacity-15 z-0 pointer-events-none size-28" style={{transform: 'translate(0%, -100%)'}}/>
            <img src={goldPattern} alt="" className="absolute right-0 top-0 opacity-22 z-0 pointer-events-none size-60 rotate-180" style={{transform: 'translate(-40%, -40%)'}}/>
            <img src={goldPattern} alt="" className="absolute right-0 top-0 opacity-17 z-0 pointer-events-none size-44 rotate-180" style={{transform: 'translate(30%, 35%)'}}/> */}
      <div className="grid grid-cols-1 gap-4 py-[82px]">
        <h1 className="text-[32px] font-sans text-center font-bold text-cYellow">Contact Islam Path</h1>
        <p className="text-[18px] font-sans text-center text-cGery">Have a question or you want to get in touch? Here’s how</p>
      </div>
      
    </>
  )
}