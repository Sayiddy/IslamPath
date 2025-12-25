import { AiFillInstagram, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook, BsTelephoneFill, BsYoutube } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import logo from '../assets/logo.jpg';
import goldPattern from '../assets/pngtree-circle-islamic-pattern-green-gold-luxury-design-vector-png-image_20475958.png';

export default function Footer() {
  return(
    <div className="relative overflow-hidden h-fit sm:h-[550px] py-10 w-full bg-cBronze text-center text-white flex flex-row justify-center items-center text-[18px] gap-20 w-full bottom-0">
      {/* decorative background patterns */}
      <img src={goldPattern} alt="" className="absolute left-0 bottom-0 opacity-30 z-0 pointer-events-none size-44" style={{transform: 'translate(55%, 50%)'}}/>
      <img src={goldPattern} alt="" className="absolute left-0 bottom-0 opacity-30 z-0 pointer-events-none size-64" style={{transform: 'translate(-50%, 30%)'}}/>
      <img src={goldPattern} alt="" className="absolute left-0 bottom-0 opacity-15 z-0 pointer-events-none size-28" style={{transform: 'translate(0%, -100%)'}}/>
      <img src={goldPattern} alt="" className="absolute right-0 top-0 opacity-22 z-0 pointer-events-none size-60 rotate-180" style={{transform: 'translate(-40%, -40%)'}}/>
      <img src={goldPattern} alt="" className="absolute right-0 top-0 opacity-17 z-0 pointer-events-none size-44 rotate-180" style={{transform: 'translate(30%, 35%)'}}/>
      <div className="hidden sm:flex flex-col z-10">
        <img src={logo} alt="Islam Path Logo" className="h-36 m-2.5 mx-auto rounded-2xl"/>
        <p className='font-semibold mt-5'>
          Deepen your connection <br/>
          with the Quran through <br/>
          expert-led lessons. <br/>
          Accessible, engaging, <br/>
          and tailored to help <br/>
          you grow in knowledge <br/>
          and faith
        </p>
      </div>
      <div className="flex flex-col z-10">
        <h2 className="font-bold text-4xl text-left ">Contact Us</h2>
        <hr className="w-full border-t-2 border-white my-4"/>
        <div className='flex flex-col gap-2'>
          <a href='mailto:Islampathacademy@gmail.com' className='flex gap-3 items-center'>
            <AiFillMail className='fill-cYellow text-2xl'/>
            <p className='font-semibold'>Islampathacademy@gmail.com</p>
          </a>
          <a href='tel:+201095283906' className='flex gap-3 items-center'>
            <BsTelephoneFill className='fill-cYellow text-2xl'/>
            <p className='font-semibold'>+201095283906</p>
          </a>
          <a href='https://wa.me/201095283906' className='flex gap-3 items-center'>
            <RiWhatsappFill className='fill-cYellow text-2xl'/>
            <p className='font-semibold'>+201095283906</p>
          </a>
        </div>
        <h2 className="font-bold text-4xl mt-5 text-left">Social Media</h2>
        <hr className="w-full border-t-2 border-white my-4"/>
        <div className='flex flex-row items-center text-2xl gap-4 fill-cYellow'>
          <BsYoutube className='fill-cYellow'/>
          <BsFacebook className='fill-cYellow'/>
          <AiFillInstagram className='fill-cYellow'/>
          <AiFillTwitterCircle className='fill-cYellow'/>
        </div>
      </div>
    </div>
  )
}