import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div >
      <section className='w-[100%]  flex' >
        <div>
        <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] h-[189px] mt-[300px] pl-[170px] flex flex-col justify-center items-start '>
      <h1 className='font-[700px] text-[40px] md:text-[36px] sm:text-[36px] lg:text-[36px]  xl:text-[36px] text-[#000000] leading-[65.8px] 
      tracking-[2.5%] font-[Rye]'>IMPECCABLE <br></br> CRAFTSMANSHIP AND <br></br>FINESSE </h1>
      </div>
      <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] h-[200px] pt-[22px]'>
      <p className='text-[22px]  md:text-[17px] sm:text-[10px] lg:text-ellipsis  xl:text-[22px] pl-[171px] w-[100%] h-[147px] font-[Libre Bodoni]
       font-[500]  font-[Rye] leading-[44.35px] tracking-[2.5%] text-[#787054]'>
      An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of ourdesirable collection.
       </p>
      </div>
       <div className='w-[288px]  sm:w-[288px] md:w-[288px] lg:w-[288px] xl:w-[288px] h-[58px] ml-[176px] mt-[10px] 
      font-[Rye] font-[500px] text-[22px]  text-[white] leading-[37.3px] rounded-[10px] gap-[10px] p-[10px] bg-[#A29875] ' >
      <div className='w-[100%]  h-[38px] justify-between items-center pl-[60px]' >Explore Now</div>

        </div>
        </div>
           
         
          <div className="flex justify-center items-center  pt-[198px] pl-[90px] sm:w-[490px] md:w-[100%] lg:w-[100%] xl:w-[100%]">
          <div className='w-[490px] h-[667px] rounded-tl-[150px] rounded-br-[150px]'>
          <Image
            src={'/images/figma-images1.svg'}
            alt="hero image"
            width={442}
            height={667}
          />
          </div>
          </div>
     



      </section>
    </div>
  )
}

export default Hero


