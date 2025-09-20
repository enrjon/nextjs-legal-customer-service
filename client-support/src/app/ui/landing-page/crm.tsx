import Image from "next/image"
import crmImage from '/images/CRM-Graphic/png'

export default function CRM(){
    const crmList = [
                            'Answering Legal’s receptionists take down exactly the information you need.',
                            'Through native API integrations with our proprietary software, we make sure it’s immediately where you need it to be.',
                            'All you’ll have to do is open your CRM and follow up to secure your new client’s business.',
                        ]
    return (
        <div className="flex bg-white justify-center">
            <Image
                src='/images/CRM-Graphic.png'
                width={534}
                height={453}
                
                alt="image of CRM messaging being utilized."
            ></Image>
            <div className="w-110">
                <h2 className="text-h3 font-bold">Your data’s in good hands</h2>
                <h4>Our partnership with your CRM enables a seamless flow of information.</h4>
                <ul>
                    {
                        
                        crmList.map((li, i)=>{
                            return <div key={i}>
                                <Image 
                                    src="/images/checkmark.svg"
                                    width={32}
                                    height={32}
                                    alt="Blue circle with white checkmark" />
                                    {li}
                                </div>
                        })
                    }
                </ul>
                <button className="btn">See our Pricing</button>
            </div>
        </div>
    )
}