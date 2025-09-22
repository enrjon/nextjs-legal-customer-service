import { url } from "inspector"
import Link from "next/link"
import { footer } from "@/app/util/footer"

export default function Footer() {
    return (
        <footer className="flex flex-col gap-[32px] lg:gap-[45px] px-[16px] py-[72px] lg:px-[106px] py-[100px] items-center">
            <div className="flex flex-col gap-[13px]">
                <h3 className="text-h3 font-bold text-center">Have questions? Our team is here to help. Call 631-400-8888</h3>
                <p className="text-sm1 text-center text-blue-400 font-extrabold">Monday to Friday from 9 am to 7 pm EST.</p>
            </div>
            <div className="bg-blue-800 h-[2px] w-full"></div>
            <div className="hidden flex lg:inline-flex w-full justify-between gap-[15px]">
                {
                    footer.map((section, i) => {
                        return (
                            <div key={`footer-${section.head}-${i}`}
                                className="text-sub1 font-semibold gap-[5px] flex flex-col">
                                <h3 className="">{section.head}</h3>
                                <ul>
                                    {section.list.map((li, i) => {
                                        return <li key={`footer-${li.name}-${i}`}>
                                            <Link
                                                className="text-b1"
                                                href={`http://localhost:3000/landing-page/${li.link}`}
                                            >{li.name}</Link>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className="grid grid-cols-2 gap-[32px] lg:hidden">
                {
                    footer.map((section, i) => {
                        return (
                            <div key={`footer-${section.head}-${i}`}
                                className="text-sub1 font-semibold text-center">
                                <Link href={`/${section.url}`}>{section.head}</Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className="bg-blue-800 h-[2px] w-full"></div>
            <p>© 2024 Answering Legal · All Rights Reserved</p>
        </footer>
    )
}