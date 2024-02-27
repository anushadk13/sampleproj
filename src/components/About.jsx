import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black font-light'>
      <h1 className="font-light text-[4vw] leading-[4.3vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need 
        to <span className=" hover:underline underline-offset-8 ">raise funds</span>,<span className=" hover:underline underline-offset-8 ">sell prod­ucts,ex­plain com­plex ideas</span>, and <span className="hover:underline underline-offset-8 ">hire great peo­ple</span>.
        </h1>
        <div className="w-full flex gap-5 border-t-[2px] border-[#a7ba68] mt-20 py-3">
          <div className="w-1/2" >
          <h1 className="text-[4.5vw] text-[#212121] font-light">Our approach:</h1>
          <button className="px-9 py-5 flex gap-10 items-center text-white border-[2px] bg-black  border-black  font-light text-md uppercase rounded-full">Read More
          <div className="w-2 h-2  rounded-full bg-white"></div>
          </button>
          </div>
          <div className= "w-1/2 h-[60vh] rounded-3xl bg-[#a7ba68]"></div>
        </div>
    </div>
  )
}

export default About
