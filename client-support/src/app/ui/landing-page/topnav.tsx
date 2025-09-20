'use client'
import Link from "next/link"
import Image from "next/image"
import React, { useState } from 'react';
//import logo from '../../../../public/assets/Answering_LegalTM_Blue.png'
//import searchIcon from '../../../../public/assets/Search.svg'

export default function TopNav() {

    const [collapse, setCollapse] = useState(true);

    return (
        <nav className="flex inline-flex justify-between bg-white ">
            <Image
                src='/images/Answering_LegalTM_Blue.png'
                width={300}
                height={10}
                alt="Answering Legal Logo"
            ></Image>
            <div className="flex hidden px-3 justify-between md:inline-flex">
                <div className="flex pr-8 hidden md:inline-flex">
                    {
                        ["Products", "About", "Resources"].map((name) => {
                            return <div key={name} className="px-5 self-center">
                                        {name}
                                    </div>
                        })
                    }
                    <div className="self-center">
                        Pricing
                    </div>
                </div>
                <div>
                    <div>
                        <Link href={''}>Support</Link>
                        <Link href={''}>(631) 686-9700</Link>
                    </div>
                    <div className="flex">
                        <Image 
                            width={30}
                            height={30}
                            src='/images/Search.svg'
                            alt="search icon"/>
                        <Link href={''}>
                            <button className="flex bg-blue-500 rounded text-white px-2 py-1 font-bold">Try for free</button>
                        </Link>

                    </div>
                </div>
            </div>
            <button data-collapse-toggle="mobile-menu" type="button"
                    className="btn inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="mobile-menu" aria-expanded="true">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"></path>
                    </svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                    </svg>
                </button>
        </nav>
    )
}