import React from 'react'



function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className ='textstructure mt-48 px-20 '>
        {["We Create","Eye Opening","Presentations"].map((item,index)=>{
          return (
          <div className ='masker '>
            <div className="w-0fit flex items-center overflow-hidden">
              {index == 1 &&(<div className=" mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative -top-[0.5vw] bg-red-500"></div>)}
            <h1 className= " flex items-center uppercase text-[8vw] h-full leading-[7vw]  font-['Founders_Grotesk_X-Condensed'] font-bold ">
            {item} </h1>
            </div>
          </div>
       );
      })}
      </div>
          
      <div className = "border-t-[1px] border-zinc-800 mt-20 flex justify-between items-centre py-12">
        {[
          "For public and private companies",
          "From the first pitch to IPO"
        ].map((item,index)=>(
          <p className = "text-md font-light tracking-tight leading-none">{item}</p>
        ))}

        <div className="start flex items-center gap-4">
          <div className="px-[-2] py-[-2]  border-[2px]  border-zinc-500  font-light text-sm uppercase rounded-full ">start the project</div>
          <div className="w-3 h-3  border-[2px]  border-zinc-400 rounded-full">
           <span className="rotate-[45deg]">
           </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage
