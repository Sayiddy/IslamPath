import { AiFillInstagram, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook, BsTelephoneFill, BsYoutube } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
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

      <div className='flex flex-col justify-center gap-[82px] pb-[82px]'>
        <div className="flex flex-row justify-center gap-16">
          <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[0px_0px_20px_2px_rgba(0,0,0,0.25)] px-16 py-8 w-[491px] h-[136px]">
            <h1 className="flex font-semibold font-sans text-[32px] justify-center leading-none">Call Us</h1>
            <div className='flex gap-3 items-center justify-center'>
              <BsTelephoneFill className='fill-cYellow text-2xl'/>
              <p className='font-semibold text-cGold'>+201095283906</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[0px_0px_20px_2px_rgba(0,0,0,0.25)] px-16 py-8 w-[491px] h-[136px]">
            <h1 className="flex font-semibold font-sans text-[32px] justify-center leading-none">Text us on Whatsapp</h1>
            <div className='flex gap-3 items-center justify-center'>
              <RiWhatsappFill className='fill-cYellow text-2xl'/>
              <p className='font-semibold text-cGold'>+201095283906</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-16">
          <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[0px_0px_20px_2px_rgba(0,0,0,0.25)] px-16 py-8 w-[491px] h-[136px]">
            <h1 className="flex font-semibold font-sans text-[32px] justify-center leading-none">Send us an Email</h1>
            <div className='flex gap-3 items-center justify-center'>
              <AiFillMail className='fill-cYellow text-2xl'/>
              <p className='font-semibold text-cGold'>Islampathacademy@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}