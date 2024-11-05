import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div >
      <section className='w-[100%] h-auto  md:flex ' >
        <div  >
        <div className='w-full  h-[189px] mt-[300px] md:pl-[150px] md:flex flex-col justify-center items-start  '>
      <h1 className='md:font-[700px] text-5xl md:text-5xl  text-[#000000] md:leading-[65.8px] 
      md:tracking-[2.5%] font-[Rye] md:my-[20px]'>IMPECCABLE <br></br> CRAFTSMANSHIP AND <br></br>FINESSE </h1>
      </div>
      <div className='w-full  h-[150px] py-[20px] md:my-[15px] mt-[30px]'>
      <p className='text-[25px]  md:text-[25px]  md:pl-[150px] w-full h-auto font-[Libre Bodoni]
       md:font-[500px]  md:font-[Rye] md:leading-[43.35px] md:tracking-[2.5%] text-[#787054]'>
      An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of ourdesirable collection.
       </p>
      </div>
       <div className='w-[288px]  h-[58px] md:ml-[150px]  
      font-[Rye] font-[500px] text-[27px]  text-[white] leading-[37.35px] rounded-[10px] gap-[10px] p-[10px] bg-[#A29875]  md:mt-[60px] md:my-[100px] mt-[100px]' >
      <div className='w-[100%]  h-[38px]  pl-[60px]' >Explore Now</div>

        </div>
        </div>
           
         
          <div className="flex justify-center items-center  md:my-[150px] mt-[100px] md:ml-[150px] md:w-[100%] ">
          <div className='md:w-full h-auto rounded-tl-[150px] rounded-br-[150px]'>
          <Image
            src={'/images/figma-images1.svg'}
            alt="hero image"
            width={480}
            height={667}
          />
          </div>
          </div>
     



      </section>
    </div>
  )
}

export default Hero


