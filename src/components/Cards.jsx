import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-32  pt-10'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card relative w-full h-full rounded-xl bg-[#004d43] flex items-center justify-center'>
                <img className="w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
                <button className='absolute left-10 bottom-10 px-5 py-1 border text-[#cdea67] border-[#cdea67]  rounded-xl'>&copy;2021-25</button>
            </div>
            
        </div>
        <div className='cardcontainer h-[50vh] w-1/2 flex gap-5'>
            <div className='card relative w-full h-full bg-[#212121] rounded-xl flex items-center justify-center'>
            <img className="w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"></img>
            <button className='absolute left-5 bottom-5 px-5 py-1 border text-uppercase text-[#fbfcfa] border-[#fafbf9]  rounded-xl'>Rating 5.0 on clutch</button>
            </div>
            <div className='card relative w-full h-full bg-[#212121] rounded-xl flex items-center justify-center'>
            <img className="h-24 w-24 " src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"></img>
            <button className='absolute left-5 bottom-5 px-5 py-1 border text-uppercase text-[#fbfcfa] border-[#fafbf9]  rounded-xl'>business bootcamp alumini</button>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
