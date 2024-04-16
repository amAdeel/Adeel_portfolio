import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Emailsection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 mx-4'>
        <div><h5 className='text-xl font-bold text-white my-2'>Lets connect </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>I am currently looking for new opportunities, my inbox is always open, Whether you have a queston or just want to say hi, i will try my best to get back to you.</p>
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
                    </ul></div>
                <div>
                    <form className="flex flex-col gap-6 sm:mt-20 lg:mt-0">
                        <div><label htmlFor='email' typeof='email' className='text-white font-medium '>Your Email</label>
                        <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  text-gray-100 text-sm rounded-lg block w-full p-2.5' type="email" id='email' required placeholder='thisisadeelashraf@gmail.com' /></div>
                        <div> <label htmlFor='text' typeof='subject' className='text-white font-medium'>Subject</label>
                        <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  text-gray-100 text-sm rounded-lg block w-full p-2.5' type="subject" id='subject' required placeholder='say Hello!' /></div>
                        <div>
                        <label htmlFor='email' typeof='email' className='text-white font-medium'>Message</label>
                        <textarea name="message" id="message" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder="let's talk About..."></textarea></div>
                        <button type='submit' className='bg-green-50 px-8 py-4  transition-all hover:bg-white hover:text-green-50 hover:text-bold text-gray-100  text-sm rounded-lg block w-full p-2.5 text-[18px]'>
                            Send Message
                        </button>



                    </form>
                </div>    
        
    </section>
  )
}

export default Emailsection