import landingHeroImage from "/images/LandingHero.jpg"
import landingHeroImageMobile from "/images/LandingHeroMobile.jpg"
import Image from "next/image"

export default function LandingHero() {
    return (
        <div className="flex items-center flex-col lg:flex-row py-[32px] px-[64px]">
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
            <div className="bg-blue-900 text-white lg:bg-transparent flex flex-col justify-center gap-[24px] max-w-[1120px]">
                <div className="flex flex-col max-w-[650px] gap-[32px]">
                    <h1 className="text-h2 text-start font-bold lg:text-h1 text-center">We&apos;re more than an answering service</h1>
                    <p className="p text-sub2 text-start font-semibold">Answering Legal has everything you need to make sure your firm never misses another opportunity.</p>
                    <div className="flex flex-col-reverse lg:flex-col">
                        <div className="flex flex-col">
                            <h3 className="text-h3 font-bold">Excellent 4.84</h3>
                            <p className="text-h2 lg:text-h1 text-yellow-600 font-bold">★★★★★</p>
                            <p className="text-sub2 font-semibold">based on 230 reviews</p>

                        </div>
                    </div>
                    <button className="btn text-sub1 rounded-[12px] gap-[32px] py-[8px] px-[24px]">See our pricing</button>
                </div>

            </div>

        </div>

    )
}