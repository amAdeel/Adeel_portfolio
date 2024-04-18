"use client"
import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "../../../constants"
import Button from "./Button"
import React, { useState } from "react"

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-3 text-white bg-[#2f4f4f]">
      <Link href="/">
        <Image src="/adeel website logo.jpeg" alt="logo" width={74} height={29} className="rounded-full" /> 
      </Link>
      <ul className=" h-full flex flex-row  lg:gap-12   md:gap-12 md:flexCenter md:flex  xs:gap-6 lg:flex ">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="lg:text-[20px] text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold xs:text-[15px] xs:ml-1 xs:border-2 xs:border-white xs:rounded-lg xl:text-[40px] ">
            {link.label}
          </Link>
        ))}
      </ul>
      {/* <div className="mobile-menu flex md:hidden ">
        <button onClick={() => setNavbar(!navbar)} >
          {navbar ? (
            <Image src="/cross.svg" width={32} height={32} alt="logo" className=" cursor-pointer lg:hidden flex    pl-[300px] " />
          ) : (
            <Image 
              src="/menu.svg"
              alt="menu"
              width={32}
              height={32}
              className=" cursor-pointer lg:hidden"
            />
          )}
        </button>
      </div>
      <div className={`flex-1  justify-self-center md:block ${navbar ? ' md:p-0 ' : 'hidden'}`}>
        <ul className="lg:flexCenter lg:h-full lg:gap-12 lg:flex sm:gap-5 flex flex-row flexCenter pr-5 mr-10">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} onClick={() => setNavbar(!navbar)} className="regular-16 text-white flexCenter cursor-pointer pb-1.5  transition-all hover:font-bold ">
              {link.label}
            </Link>
          ))}
        </ul> */}
      {/* </div> */}
      <div className="lg:flexCenter hidden">
        <Link href="/login" >
          <Button 
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </Link>
      </div>
      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className=" cursor-pointer hidden"
      />
    </nav>
  )
}

export default Navbar
