import Image from "next/image"
import crmImage from '/images/CRM-Graphic/png'

export default function CRM(){
    return (
        <div className="flex bg-white">
            <Image
                src='/images/CRM-Graphic.png'
                width={534}
                height={453}
                style={{
                    width: '30%',
                    height: 'auto',
                }}  
                alt="image of CRM messaging being utilized."
            ></Image>
            <div>
                <h2>Your data’s in good hands</h2>
                <h4>Our partnership with your CRM enables a seamless flow of information.</h4>
                <ul>
                    <li>Answering Legal’s receptionists take down exactly the information you need.</li>
                    <li>Through native API integrations with our proprietary software, we make sure it’s immediately where you need it to be.</li>
                    <li>All you’ll have to do is open your CRM and follow up to secure your new client’s business.</li>
                </ul>
                <button className="bg-blue-500 rounded">See our Pricing</button>
            </div>
        </div>
    )
}