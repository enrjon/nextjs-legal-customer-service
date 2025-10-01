'use client'
import Link from "next/link"
import Image from "next/image"
import React, { useState } from 'react';
import { collapse } from "@/app/util/collapse";

export default function TopNav() {
    const [hamburger, setHamburger] = useState(false);

    return (
        <div>
            <Link href={'/try-for-free'}
                className="btn text-sub2 font-bold flex justify-center w-full gap-[10px] px-[24px] py-[24px] lg:hidden">
                Try for free here
                <Image
                    src='/images/try-arrow.svg'
                    width={14}
                    height={10}
                    alt="arrow pointing right"
                ></Image>
            </Link>
            <nav className="flex flex-col justify-between bg-white gap-[16px] px-[20px] py-[10px]">
                <div className="hidden flex lg:inline-flex justify-end gap-[32px]">
                    <Link href={''} className="gray-text underline">Support</Link>
                    <Link href={''}>(888) 888-8888</Link>
                </div>
                <div className="flex justify-between">
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
                    <div className={`flex  px-3 hidden justify-between px-[32px] lg:inline-flex`}>
                        <div className={`flex pr-8  hidden lg:inline-flex font-semibold`}>
                            {
                                collapse.map((drop) => {
                                    return <button
                                        key={drop.label}
                                        id={drop.label}
                                        className={`px-5 flex self-center text-center gap-[8px] hover:text-blue-500`}
                                        onClick={() => {
                                            const menu = document.getElementById(drop.label)
                                            menu?.classList.toggle('selected');

                                            if (drop.options?.length > 0) {
                                                const tickElem = document.getElementById(`${drop.label}-tick`)
                                                if (menu?.classList.contains('selected')) {
                                                    (tickElem as HTMLDivElement).innerHTML = '⌃';
                                                } else {
                                                    (tickElem as HTMLDivElement).innerHTML = '⌄';
                                                }
                                            }

                                        }}>
                                        <div id={`${drop.label}-arrow`}>
                                            {drop.label}
                                        </div>
                                        {
                                            (drop.options?.length > 0) && <div id={`${drop.label}-tick`}>⌄</div>
                                        }

                                    </button>
                                })
                            }
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

                    <button data-collapse-toggle="mobile-menu"
                        type="button"
                        className="cursor-pointer flex self-center p-[2px] text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="mobile-menu"
                        aria-expanded="true"
                        onClick={() => { setHamburger(!hamburger) }}>
                        <span className="sr-only">Open main menu</span>
                        <Image
                            src='/images/hamburger.svg'
                            width={58}
                            height={48}
                            alt="hamburger menu icon"
                            className={`flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden ${hamburger && 'bg-blue-100'}`}
                        ></Image>
                    </button>
                </div>
                <div className={`flex flex-col items-start lg:hidden gap-[13px] pb-2 ${!hamburger && 'hidden'}`}>
                    {collapse.map((drop, i) => {
                        return <div key={i}
                            className="cursor-pointer flex flex-col text-h3 ps-4 font-bold hover:text-blue-400 w-[100%] gap-[4px] hover:gap-[8px]">
                            <li className="flex">{drop.label}</li>
                            <div className="bg-stone-200 h-[2px] "></div>
                        </div>

                    })}
                </div>
            </nav>
        </div>

    )
}