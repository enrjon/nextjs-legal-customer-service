'use client'

import BlogCard from "@/app/components/blog-card"
import Image from "next/image"
import { blogFetch } from "@/app/util/blog"
import { useState } from "react"

export default function Blog() {
    const [blogPos, setBlogPos] = useState(1000);

    const blogSlide = () => {
        const blog = document.getElementById('blogSlide');
    }

    return (
        <div className="bg-white flex flex-col items-center gap-[32px] px-[16px] py-[64px]">
            <h2 className="text-h3 font-bold text-center">Want to learn more? Read our articles on legal intake.</h2>
            <div className="flex gap-[64px] lg:hidden">
                <button
                    onClick={() => { blogSlide() }}
                >
                    <Image
                        src='/images/right-arrow.svg'
                        width={48}
                        height={48}
                        alt="left-arrow for carousel"
                        className="cursor-pointer rotate-180"
                    ></Image>
                </button>
                <button>
                    <Image
                        src='/images/right-arrow.svg'
                        width={48}
                        height={48}
                        alt="right-arrow for carousel"
                        className="cursor-pointer"
                    ></Image>
                </button>

            </div>
            <div id='blogSlide' className="flex flex-row justify-center w-full">
                <button>
                    <Image
                        src='/images/right-arrow.svg'
                        width={48}
                        height={48}
                        alt="left-arrow for carousel"
                        className="cursor-pointer rotate-180  hidden lg:inline-flex"
                    ></Image>
                </button>
                <div className="flex gap-[24px] transition overflow-x-scroll snap-x snap-mandatory pb-2" aria-valuenow={100}>
                    {
                        blogFetch.map((data, i) => {
                            return <BlogCard key={`blog-card-${i}`} {...data} />
                        })
                    }
                </div>

                <button>
                    <Image
                        src='/images/right-arrow.svg'
                        width={48}
                        height={48}
                        className="cursor-pointer hidden lg:inline-flex"
                        alt="right-arrow for carousel"
                    ></Image>
                </button>
            </div>
            <button className="cursor-pointer btn text-sub1 rounded-[12px] px-[2px] py-[2px] w-[177px] h-[52px]">Go to blog</button>
        </div>

    )
}