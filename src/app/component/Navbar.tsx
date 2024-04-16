"use client"
import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "../../../constants"
import Button from "./Button"
import React, { useState } from "react"

const navbar = () => {
  // const [navbarOpen, SetNavbarOpen]=useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-3 text-white bg-[#2f4f4f]">
      <Link href="\">
        <Image src="/adeel website logo.jpeg" alt="logo" width={74} height={29} className="rounded-full " /> 
      </Link>
      {/* <div className="mobile-menu block md:hidden">
        { 
        navbarOpen ?(
          <button></button>
        ):(
          <button></button>
        )
        }
      </div> */}
      <ul className=" h-full lg:gap-12 flex sm:gap-5">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-white flexCenter cursor-pointer pb-1.5  transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter ">
          <Link href="/login">
          <Button 
          type="button"
          title="Login"
          icon ="/user.svg"
          variant="btn_dark_green"
          />
          </Link>
        </div>
        

  
    </nav>
  )
 }


export default navbar