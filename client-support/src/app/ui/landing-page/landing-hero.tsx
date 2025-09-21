import landingHeroImage from "/images/LandingHero.jpg"
import landingHeroImageMobile from "/images/LandingHeroMobile.jpg"
import Image from "next/image"

export default function LandingHero() {
    return (
        <div className="flex content-center flex-col md:flex-row ">
            <Image
                src='/images/LandingHero.jpg'
                alt='Landing Page Hero image'
                fill
                style={{
                    objectFit: 'cover'
                }}
                className="-z-10 hidden flex md:inline-flex "
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
                className="-z-10 inline-flex md:hidden"
            >
            </Image>
            <div className="bg-blue-900 md:bg-transparent flex flex-col justify-center px-[16px] py-[32px] gap-[24px] max-w-[650]">
                <div className="flex flex-col-reverse md:flex-col text-white">
                    <div className="flex flex-col ">
                        <h1 className="text-h2 lg:text-h1 text-center">We&apos;re more than an answering service</h1>
                        <p className="p text-sub2">Answering Legal has everything you need to make sure your firm never misses another opportunity.</p>
                    </div>

                    <div className="flex flex-row justify-center gap-[16px]">
                        <h3 className="text-h3 font-bold text-center content-center">Excellent 4.84</h3>
                        <div className="flex flex-col text-center">
                            <p className="text-h3 lg:text-h2 text-yellow-600 font-bold">★★★★★</p>
                            <p className="text-sub2">based on 230 reviews</p>
                        </div>
                    </div>
                </div>
                <button className="btn rounded-[12px] py-2">See our pricing</button>
            </div>

        </div>

    )
}