'use client'
import Link from "next/link"
import Image from "next/image"
import React, { useState } from 'react';

export default function TopNav() {

    const [collapse, setCollapse] = useState([
        {
            label: 'Products',
            selected: false,
        },
        {
            label: 'About',
            selected: false,
        },
        {
            label: 'Resources',
            selected: false,
        },
    ]);


    return (
        <div>
            <Link href={'/try-for-free'}
                            className="btn text-sub2 font-bold flex justify-center w-full gap-[10px] px-[24px] py-[24px] lg:hidden">
                            Try for free 
                            <Image
                                src='/images/try-arrow.svg'
                                width={14}
                                height={10}
                                alt="arrow pointing right"
                            ></Image>
                        </Link>
            <nav className="flex flex-col justify-between bg-white gap-[16px] px-[20px] py-[10px]">            
            <div className="hidden flex lg:inline-flex justify-end gap-[32px]">
                <Link href={''} className="" style={{color: "rgba(153, 153, 153, 1);"}}>Support</Link>
                <Link href={''}>(631) 686-9700</Link>
            </div>
            <div className="flex justify-between ">
                <Image
                    src='/images/Answering_LegalTM_Blue.png'
                    width={293}
                    height={48}
                    style={{
                        objectFit: 'contain',
                    }}
                    className=""
                    alt="Answering Legal Logo"
                ></Image>
                <div className="flex hidden px-3 justify-between px-[32px] lg:inline-flex">
                    <div className="flex pr-8 hidden lg:inline-flex font-semibold">
                        {
                            collapse.map((drop) => {
                                return <button
                                    key={drop.label}
                                    id={drop.label}
                                    className={`px-5 flex self-center text-center gap-[8px] hover:text-blue-500`}
                                    onClick={(e) => {
                                        const menu = document.getElementById(drop.label)
                                        const tickElem = document.getElementById(`${drop.label}-tick`)
                                        menu?.classList.toggle('selected');
                                        if(menu?.classList.contains('selected')){
                                            (tickElem as HTMLDivElement).innerHTML = '⌃';
                                        } else {
                                            (tickElem as HTMLDivElement).innerHTML = '⌄';
                                        }
                                            
                                        
                                    }}>
                                    <div id={`${drop.label}-arrow`}>
                                        {drop.label}
                                    </div>
                                    <div id={`${drop.label}-tick`}>
                                        ⌄
                                    </div>
                                </button>
                            })
                        }
                        <div className="self-center">
                            Pricing
                        </div>
                    </div>

                </div>
                <div>
                    <div className="flex hidden lg:inline-flex content-center justify-end lg:gap-[3px] lg:gap-[9.2px]">
                        <Image
                            width={32}
                            height={32}
                            src='/images/Search.svg'
                            alt="search icon" />
                        <Link href={'/try-for-free'}
                            className="btn text-sub2 font-bold inline-block content-center align-middle px-[20px]  py-[8px] rounded-[11.03px]">
                            Try for free
                        </Link>

                    </div>
                </div>

                <button data-collapse-toggle="mobile-menu" type="button"
                    className=" inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="mobile-menu" aria-expanded="true">
                    <span className="sr-only">Open main menu</span>
                    <Image
                        src='/images/hamburger.svg'
                        width={58}
                        height={48}
                        alt="hamburger menu icon"
                    ></Image>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>

        </nav>
        </div>
        
    )
}