import landingHeroImage from "/images/LandingHero.jpg"
import landingHeroImageMobile from "/images/LandingHeroMobile.jpg"
import Image from "next/image"

export default function LandingHero() {
    return (
        <div className="relative">
            <Image
                src='/images/LandingHero.jpg'
                alt='Landing Page Hero image'
                height={100}
                width={2000}           
                className="-z-10 hidden md:inline-flex fixed"
                objectFit={'contain'}
            >
            </Image>
            <Image
                src='/images/LandingHeroMobile.jpg'
                alt='Landing Page Hero image for mobile'
                height={100}
                width={2000} 
                objectFit={'contain'}
                className="-z-10 inline-flex md:hidden"
            >
            </Image>
            <div className="text-white">
                <h1 className="text-h1">We're more than an answering service</h1>
                <p>Answering Legal has everything you need to make sure your firm never misses another opportunity.</p>
                <div>
                    <h3>Excellent 4.84</h3>
                    <div></div>
                    <p>based on 230 reviews</p>
                    <button className="bg-blue-500 rounded">See our pricing</button>
                </div>
            </div>
        </div>

    )
}
