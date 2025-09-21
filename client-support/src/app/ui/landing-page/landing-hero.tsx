import landingHeroImage from "/images/LandingHero.jpg"
import landingHeroImageMobile from "/images/LandingHeroMobile.jpg"
import Image from "next/image"

export default function LandingHero() {
    return (
        <div className="relative flex justify-center">
            <Image
                src='/images/LandingHero.jpg'
                alt='Landing Page Hero image'
                fill
                style={{
                    objectFit: 'cover',
                }}
                className="-z-10 hidden md:inline-flex"
            >
            </Image>
            <Image
                src='/images/LandingHeroMobile.jpg'
                alt='Landing Page Hero image for mobile'
                fill
                style={{
                    objectFit: 'cover',
                }}
                className="-z-10 inline-flex md:hidden"
            >
            </Image>
            <div className="text-white py-5">
                <h1 className="text-h2 ">We&apos;re more than an answering service</h1>
                <p className="py-2 text-b1">Answering Legal has everything you need to make sure your firm never misses another opportunity.</p>
                <div className="flex flex-col w-80">
                    <h3 className="text-h3 font-bold">Excellent 4.84</h3>
                    <p className="text-h2 text-yellow-600 font-bold">★★★★★</p>
                    <p className="text-sub2">based on 230 reviews</p>
                    <button className="btn">See our pricing</button>
                </div>
            </div>
        </div>

    )
}
