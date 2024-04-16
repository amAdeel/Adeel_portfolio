import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
<div className="flex justify-center items-center h-screen max-container padding-container flex-col gap-20 mt-5 pb-0  mb-0 md:gap-28 lg:py-0 xl:flex-col ">
<div className='flex flex-col justify-center items-center my-5 mt-20 bg-[#2f4f4f] rounded-lg min-h-screen shadow-md  px-8 pt-6 pb-8 mb-4 w-96'>
              <h1 className="text-[40px] font-bold py-4 ">
                Login  </h1>
                
      
    <form className="flex flex-col gap-6  lg:mt-0 w-full ">
                        <div> 
                            <label htmlFor='text' typeof='subject' className='text-white font-medium'>Name</label>
                        <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  text-gray-100 text-sm rounded-lg block w-full p-2.5' type="subject" id='subject' required placeholder='Enter your Name' />
                        </div>
                
                        <div>
                        <label htmlFor='email' typeof='email' className='text-white font-medium '>Your Email</label>
                        <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  text-gray-100 text-sm rounded-lg block w-full p-2.5' type="email" id='email' required placeholder='Enter Gmail' />
                        </div>   
                        <div> 
                            <label htmlFor='email' typeof='email' className='text-white font-medium'>Password</label>
                        <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  text-gray-100 text-sm rounded-lg block w-full p-2.5' type="password" id='password' required placeholder='Enter Password' />
                        <p className='text-[#9CA2A9] text-sm flex float-end'>Forget password?</p>
                        </div>
                        <button type='submit' className='bg-green-50 px-8 py-4  transition-all hover:bg-white hover:text-green-50 hover:text-bold text-gray-100  rounded-lg block w-full p-2.5 text-[20px] '>
                            Login
                        </button>
</form>
    <div className='pt-6'>
    <ul className="regular-14 flex gap-4 text-gray-30">
                    <Link href="https://www.facebook.com/maher.adeel.96199/">
                      <Image src="/facebook.svg" alt="logo" width={24} height={24} />
                    </Link>
                    <Link href="https://www.instagram.com/maher_adeel_6421/">
                      <Image src="/instagram.svg" alt="logo" width={24} height={24} />
                    </Link>
                    <Link href="/">
                      <Image src="/twitter.svg" alt="logo" width={24} height={24} />
                    </Link>
                    <Link href="https://www.youtube.com/@thisisMrAdeeel">
                      <Image src="/youtube.svg" alt="logo" width={24} height={24} />
                    </Link>
                    </ul>
    </div>
    </div>
    </div>             

     )
}

export default Login