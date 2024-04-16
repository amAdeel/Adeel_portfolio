"use client";
import Image from 'next/image'
import Button from './Button'
import { TypeAnimation } from 'react-type-animation';



const Hero = () => {
  return (
    <section className=" max-container padding-container flex flex-col gap-20 py-02 pb-32 md:gap-28 lg:py-0 xl:flex-row ">
      <div className="hero-map " />
      <div className='flex flex-col lg:flex-row'>

      <div className="relative z-20 flex flex-1 flex-col  xl:w-1/2 ">
        
        <h1 className="bold-52 lg:bold-88">
          <span>Hello, I am {" "}</span>
          <br/>
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Adeel',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Mob Developer',
        1000,
        'Game Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        Adeel, a versatile developer passionate about crafting exceptional digital experiences. With expertise in web, mobile, and UI/UX development, Adeel thrives on transforming ideas into elegant and user-friendly solutions. Whether it is designing intuitive interfaces or building seamless applications, Adeel is dedicated to delivering excellence at every step of the journey. 
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-yellow-600">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-5 sm:flex-row">
          <Button 
            type="button" 
            title="Download CV" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="Hire Me" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>
      <div className="col-span-5 flexCenter mt-4 lg:mt-0 ">
          <Image className="rounded-full w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"
          src="/mypersonalpic.jpeg"
          alt="mypic"
          width={300}
          height={300}
          />
        </div>
        </div>
        <div className='flex flex-col lg:flex-row  relative lg:justify-center lg:items-center'>
        <Image className='rounded-3xl w-full  h-[250px] lg:w-[250px] lg:h-[250px]'
        src="/boylaptop.jpg"   
        alt="laptop pic"
        width={300}
        height={300}
        />
        <p className='text-gray-30 flex-grow my-4 lg:px-12 w-full lg:mx-20'><strong>Adeel</strong>, a versatile developer passionate about crafting exceptional digital experiences. With expertise in web, mobile, and UI/UX development, Adeel thrives on transforming ideas into elegant and user-friendly solutions. Whether it is designing intuitive interfaces or building seamless applications, Adeel is dedicated to delivering excellence at every step of the journey. Just as we aspire to explore the beauty of nature, Adeel is committed to embarking on each digital journey with you, ensuring satisfaction through unparalleled craftsmanship and innovation.
        </p>
        </div>  
        <div className='flex flex-col lg:flex-row  relative lg:justify-center lg:items-center'>
        <Image className='rounded-3xl w-full  h-[250px] lg:w-[250px] lg:h-[250px]'
        src="/ai photo.jpg"   
        alt="aiphoto pic"
        width={300}
        height={300}
        />

        <p className='text-gray-30 flex-grow my-4 lg:px-12 w-full lg:mx-20'>My feature plan includes a dedication to mastering AI technologies. Just as we aspire to explore the beauty of nature, my commitment to learning AI will enable me to embark on each digital journey with you, ensuring satisfaction through unparalleled craftsmanship and innovation.
        </p>
  
        </div>  


    </section>
  )
}

export default Hero