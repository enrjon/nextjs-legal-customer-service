import landingHeroImage from "/images/LandingHero.jpg"
import landingHeroImageMobile from "/images/LandingHeroMobile.jpg"
import Image from "next/image"

export default function LandingHero() {
    return (
        <div className="flex items-center flex-col lg:flex-row">
            <Image
                src='/images/LandingHero.jpg'
                alt='Landing Page Hero image'
                fill
                style={{
                    objectFit: 'cover'
                }}
                className="-z-10 hidden flex lg:inline-flex min-w-[400px] h-[750px]"
            >
            </Image>
            <Image
                src='/images/LandingHeroMobile.jpg'
                alt='Landing Page Hero image for mobile'
                height={1000}
                width={1000}
                style={{
                    objectFit: 'cover',
                }}
                className="-z-10 inline-flex lg:hidden"
            >
            </Image>
            <div className="text-white bg-[#161641] lg:bg-transparent flex flex-col justify-center gap-[24px] px-[16px] lg:px-[64px] py-[32px] w-full">
                <div className="flex flex-col gap-[32px] max-w-[650px]">
                    <div className=" lg:order-3 flex flex-row lg:flex-col items-center lg:items-start">
                        <h3 className="text-h3 font-bold w-1/2 text-center lg:text-start">Excellent 4.84</h3>
                        <p className="text-h2 lg:text-h1 text-yellow-600 font-bold w-1/2 text-center lg:text-start">★★★★★ <br />
                        <span className="text-white text-sub2 font-semibold ">based on 230 reviews</span></p>
                    </div>

                    <h1 className="lg:order-1 text-h2 text-center lg:text-start font-bold lg:text-h1">We&apos;re more than an answering service</h1>
                    <p className="lg:order-2 text-sub2 text-center lg:text-start font-semibold">Legal Support has everything you need to make sure your firm never misses another opportunity.</p>

                    <button className="cursor-pointer lg:order-4 btn text-sub1 flex justify-center lg:self-start rounded-[12px] gap-[32px] py-[16px] px-[24px]">See our pricing</button>
                </div>

            </div>

        </div>

    )
}