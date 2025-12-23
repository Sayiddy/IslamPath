import { useEffect, useRef } from "react"
import NavBar from "../components/NavBar"
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from '@emailjs/browser';
import bbr from "../assets/bbr.png";
import mbbr from "../assets/mbbr.png";

export default function BookTrialClass() {
  const [phone, setPhone] = useState('');
  const ref = useRef();
  const sendingRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    sendingRef.current = ref.current;

    console.log(sendingRef.current);

    emailjs
      .sendForm('service_ygl711p', 'template_oj49v7e', ref.current, {
        publicKey: 'MmoXW1AoCXa8QGoMr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
    emailjs
      .sendForm('service_ygl711p', 'template_ufk60q6', ref.current, {
        publicKey: 'MmoXW1AoCXa8QGoMr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <>
      <NavBar currentPage=""/>
      <img src={bbr} alt="" className="hidden lg:block absolute right-0 bottom-0 opacity-20 -z-10 pointer-events-none h-[135%] lg:w-1/2 w-full" style={{transform: 'translate(0%, 35%)'}}/>
      <img src={mbbr} alt="" className="hidden lg:block absolute left-0 bottom-0 opacity-20 -z-10 pointer-events-none h-[135%] lg:w-1/2 w-full" style={{transform: 'translate(0%, 35%)'}}/>
      <div className="bg-white rounded-2xl lg:w-3/4 sm:w-4/5 my-8 sm:my-[82px] text-center mx-4 sm:mx-auto p-10 sm:p-16 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.25)] font-sans z-30">
        <h1 className="text-4xl text-cYellow font-bold font-sans">Book Your Free Trial Class Today!</h1>
        <p className="text-cGery text-[18px] my-4 font-sans">Take the first step towards deepening your understanding of the Quran with our free trial class.<br></br>No commitment, just pure learning!</p>
        <form className="flex flex-col gap-4 text-left" onSubmit={sendEmail} ref={ref}>
            <div className="lg:flex-row flex-col lg:gap-10 flex w-full">
                <div className="lg:flex-1 w-full min-w-0">
                <label className="text-left font-sans text-[18px] text-cBlack">Student Name</label><br/>
                <input required name="Name" type="text" className="w-full text-[18px] border-2 border-cLightGery placeholder:text-cLightGery rounded-lg p-2 mt-2 mb-4" placeholder="Student Name"/>
              </div>

              <div className="lg:flex-row flex-col lg:gap-10 flex lg:flex-1 w-full min-w-0">
                <div className="lg:flex-1 w-full min-w-0">
                  <label className="text-left2 font-sans text-[18px] text-cBlack">Student Age</label><br/>
                  <input required name="Age" type="number" className="w-full text-[18px] border-2 border-cLightGery placeholder:text-cLightGery rounded-lg p-2 mt-2 mb-4" placeholder="Student Age"/>
                </div>

                <div className="lg:flex-1 w-full min-w-0">
                  <label className="text-left font-sans text-[18px] text-cBlack">Student Gender</label><br/>
                  <select required name="Gender" className="w-full text-[18px] border-2 border-cLightGery placeholder:text-cLightGery rounded-lg p-2 mt-2 mb-4" placeholder="Student Gender">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="lg:flex-row flex-col lg:gap-10 flex w-full">
              <div className="w-full">
                <label className="text-left font-sans text-[18px] text-cBlack">Student Email</label><br/>
                <input required name="Email" type="email" className="w-full text-[18px] border-2 border-cLightGery placeholder:text-cLightGery rounded-lg p-2 mt-2 mb-4" placeholder="Student Email"/>
              </div>

              <div className="w-full">
                <label className="text-left2 font-sans text-[18px] text-cBlack">Phone Number (WhatsApp)</label><br/>
                <PhoneInput
                  country={'eg'}
                  value={phone}
                  onChange={setPhone}
                  inputProps={{
                    name: 'Phone',
                    required: true,
                    autoFocus: false
                  }}
                  containerClass="w-full! border-2! border-cLightGery! placeholder:text-cLightGery! rounded-lg! mt-2 mb-4! text-[18px]!"
                  inputClass="w-full! h-fit! font-sans! text-[18px]/normal! border-none! my-2! bg-transparent!"
                  buttonClass="rounded-l-md! border-l-0! border-t-0! border-b-0!"
                  dropdownClass=""
                />
              </div>
            </div>

            <div className="lg:flex-row flex-col lg:gap-10 flex w-full">
              <div className="w-full">
                <label className="text-left font-sans text-[18px] text-cBlack">Country Of Residence</label><br/>
                <input required name="Country" type="text" className="w-full text-[18px] border-2 border-cLightGery placeholder:text-cLightGery rounded-lg p-2 mt-2 mb-4" placeholder="Country Of Residence"/>
              </div>

              <div className="w-full">
                <label className="text-left font-sans text-[18px] text-cBlack">Select Timezone</label><br/>
                <select required name="Timezone" className="w-full text-[18px] border-2 border-cLightGery placeholder:text-cLightGery rounded-lg p-2 mt-2 mb-4">
                  <option value="UTC-12:00">UTC-12:00</option>
                  <option value="UTC-11:00">UTC-11:00</option>
                  <option value="UTC-10:00">UTC-10:00</option>
                  <option value="UTC-09:30">UTC-09:30</option>
                  <option value="UTC-09:00">UTC-09:00</option>
                  <option value="UTC-08:00">UTC-08:00</option>
                  <option value="UTC-07:00">UTC-07:00</option>
                  <option value="UTC-06:00">UTC-06:00</option>
                  <option value="UTC-05:00">UTC-05:00</option>
                  <option value="UTC-04:30">UTC-04:30</option>
                  <option value="UTC-04:00">UTC-04:00</option>
                  <option value="UTC-03:30">UTC-03:30</option>
                  <option value="UTC-03:00">UTC-03:00</option>
                  <option value="UTC-02:00">UTC-02:00</option>
                  <option value="UTC-01:00">UTC-01:00</option>
                  <option value="UTC+00:00">UTC+00:00</option>
                  <option value="UTC+01:00">UTC+01:00</option>
                  <option value="UTC+02:00">UTC+02:00</option>
                  <option value="UTC+03:00">UTC+03:00</option>
                  <option value="UTC+03:30">UTC+03:30</option>
                  <option value="UTC+04:00">UTC+04:00</option>
                  <option value="UTC+04:30">UTC+04:30</option>
                  <option value="UTC+05:00">UTC+05:00</option>
                  <option value="UTC+05:30">UTC+05:30</option>
                  <option value="UTC+05:45">UTC+05:45</option>
                  <option value="UTC+06:00">UTC+06:00</option>
                  <option value="UTC+06:30">UTC+06:30</option>
                  <option value="UTC+07:00">UTC+07:00</option>
                  <option value="UTC+08:00">UTC+08:00</option>
                  <option value="UTC+08:45">UTC+08:45</option>
                  <option value="UTC+09:00">UTC+09:00</option>
                  <option value="UTC+09:30">UTC+09:30</option>
                  <option value="UTC+10:00">UTC+10:00</option>
                  <option value="UTC+10:30">UTC+10:30</option>
                  <option value="UTC+11:00">UTC+11:00</option>
                  <option value="UTC+12:00">UTC+12:00</option>
                  <option value="UTC+12:45">UTC+12:45</option>
                  <option value="UTC+13:00">UTC+13:00</option>
                  <option value="UTC+14:00">UTC+14:00</option>
                </select>
              </div>
            </div>

            <div className="lg:flex-row flex-col lg:gap-10 flex w-full">
              <div className="lg:flex-1 w-full min-w-0">
                <label className="text-left font-sans text-[18px] text-cBlack">Select Course</label><br/>
                <select required name="Course" className="w-full text-[18px] border-2 border-cLightGery placeholder:text-cLightGery rounded-lg p-2 mt-2 mb-4" placeholder="Select Course">
                  <option value="Quran recitation: kids">Quran recitation: kids</option>
                  <option value="Quran recitation: adults">Quran recitation: adults</option>
                  <option value="Quran recitation: beginners">Quran recitation: beginners</option>
                  <option value="Quran recitation: Ijazah course">Quran recitation: Ijazah course</option>
                  <option value="Quran recitation: Qira'at course">Quran recitation: Qira'at course</option>
                  <option value="Quran recitation: nour al bayan course">Quran recitation: nour al bayan course</option>
                  <option value="Quran recitation: Qa'idah nouraniyyah course">Quran recitation: Qa'idah nouraniyyah course</option>
                  <option value="Quran memorisation: kids">Quran memorisation: kids</option>
                  <option value="Quran memorisation: adults">Quran memorisation: adults</option>
                  <option value="Quran memorisation: females">Quran memorisation: females</option>
                  <option value="Quran memorisation: intensive memorisation program">Quran memorisation: intensive memorisation program</option>
                  <option value="Quran with Tajweed: Tajweed for beginners">Quran with Tajweed: Tajweed for beginners</option>
                  <option value="Quran with Tajweed: Tajweed for adults">Quran with Tajweed: Tajweed for adults</option>
                  <option value="Quran with Tajweed: advanced Tajweed">Quran with Tajweed: advanced Tajweed</option>
                  <option value="Arabic language: reading & speaking">Arabic language: reading & speaking</option>
                  <option value="Arabic language: quranic Arabic">Arabic language: quranic Arabic</option>
                  <option value="Arabic language: Arabic grammar">Arabic language: Arabic grammar</option>
                  <option value="Arabic language: intensive Arabic course">Arabic language: intensive Arabic course</option>
                  <option value="Islamic studies: Aqeedah">Islamic studies: Aqeedah</option>
                  <option value="Islamic studies: Tafsir">Islamic studies: Tafsir</option>
                  <option value="Islamic studies: Fiqh">Islamic studies: Fiqh</option>
                  <option value="Islamic studies: Hadith">Islamic studies: Hadith</option>
                  <option value="Islamic studies: Du'as">Islamic studies: Du'as</option>
                  <option value="Islamic studies: Seerah">Islamic studies: Seerah</option>
                </select>
              </div>
              
              <div className="lg:flex-row flex-col lg:gap-10 flex lg:flex-1 w-full min-w-0">
                <div className="lg:flex-1 w-full min-w-0">
                  <label className="text-left2 font-sans text-[18px] text-cBlack">Date & Time</label><br/>
                  <input required name="DateTime" type="datetime-local" className="w-full text-[18px] border-2 border-cLightGery placeholder:text-cLightGery rounded-lg p-2 mt-2 mb-4" placeholder="Student Age"/>
                </div>

                <div className="lg:flex-1 w-full min-w-0">
                  <label className="text-left font-sans text-[18px] text-cBlack">Teacher Gender</label><br/>
                  <select required name="TeacherGender" className="w-full text-[18px] border-2 border-cLightGery placeholder:text-cLightGery rounded-lg p-2 mt-2 mb-4" placeholder="Student Gender">
                    <option>Any</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
          <input required type="submit" value="Book Trial Class" className="bg-cBronze hover:bg-transparent border-3 border-transparent hover:border-cYellow hover:text-cBlack text-white text-[20px] rounded-[15px] px-6 py-3 mt-4 mx-auto cursor-pointer transition-all duration-300"/>
        </form>
      </div>
    </>
  )
}