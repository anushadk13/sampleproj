import React from 'react'

function Feautred() {
  return (
    <div className='w-full py-20 bg-black'>
        <div className = 'w-full px-20 border-b-[2px] border-zinc-700 pb-20'>
            <h1 className='text-7xl  font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
        </div>
        <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
            
                <div className='cardcontainer relative rounded-xl w-1/2 h-[75vh] bg-red-500 overflow-hidden' >
                 <h1 className='absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2  text-[#CDEA68] leading-none tracking-tight z-[8] text-6xl'>FYDE
                 {"FYDE".split('').map((item,index)=><span>{item}</span>) }
                 </h1>
                
                 <div className='w-full h-full bg-green-500'>
                    <img className='h-full w-full bg-cover' src ="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"></img>
                 </div>
                </div>

                <div className='cardcontainer relative rounded-xl w-1/2 h-[75vh] bg-red-500 overflow-hidden' >
                <h1 className='absolute right-full top-1/2 -translate-x-1/2 -translate-y-1/2  text-[#CDEA68] leading-none tracking-tight z-[8] text-6xl'>VYSE
                {"VISE".split('').map((item,index)=><span>{item}</span>) }
                </h1>
                 <div className='w-full h-full bg-green-500'>
                    <img className='h-full w-full bg-cover' src ="https://ochi.design/wp-content/uploads/2022/09/VISE1-scaled.jpg"></img>
                 </div>
                </div>
                
            </div>
        </div>
        
      
    </div>
  )
}

export default Feautred
