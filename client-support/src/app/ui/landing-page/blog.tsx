import BlogCard from "@/app/components/blog-card"
import Image from "next/image"
import { blogFetch } from "@/app/util/blog"

export default function Blog() {
    return (
        <div className="bg-white flex flex-col items-center gap-[32px] px-[16px] py-[64px]">
            <h2 className="text-h3 font-bold text-center">Want to learn more? Read our articles on legal intake.</h2>
            <div className="flex gap-[64px] lg:hidden">
                <button>
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
            <div className="flex flex-row justify-center gap-[24px]">
                <button>
                    <Image
                        src='/images/right-arrow.svg'
                        width={48}
                        height={48}
                        alt="left-arrow for carousel"
                        className="cursor-pointer rotate-180  hidden lg:inline-flex"
                    ></Image>
                </button>
                {
                    blogFetch.map((data, i) => {
                        return <BlogCard key={`blog-card-${i}`} {...data} />
                    })
                }
                <button>
                    <Image
                        src='/images/right-arrow.svg'
                        width={48}
                        height={48}
                        className="cursor-pointer"
                        alt="right-arrow for carousel  hidden lg:inline-flex"
                    ></Image>
                </button>
            </div>
            <button className="cursor-pointer btn text-sub1 rounded-[12px] px-[2px] py-[2px] w-[177px] h-[52px]">Go to blog</button>
        </div>

    )
}