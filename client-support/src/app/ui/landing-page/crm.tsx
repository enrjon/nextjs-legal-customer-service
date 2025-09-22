import Image from "next/image"

export default function CRM() {
    const crmList = [
        'Answering Legal’s receptionists take down exactly the information you need.',
        'Through native API integrations with our proprietary software, we make sure it’s immediately where you need it to be.',
        'All you’ll have to do is open your CRM and follow up to secure your new client’s business.',
    ]
    return (
        <div className="flex flex-col bg-white items-center justify-center gap-[50px] px-[16px] py-[32px]">
            <div className="flex flex-col items-center lg:flex-row gap-[32px] max-w-[1100px]">
                <Image
                    src='/images/CRM-Graphic.png'
                    width={534}
                    height={453}
                    alt="image of CRM messaging being utilized."
                    className=""
                    style={{
                        objectFit: 'contain'
                    }}
                ></Image>
                <div className="flex flex-col gap-[32px] py-[32px]">

                    <div className="flex flex-col gap-[24px]">
                        <h2 className="text-h2 font-bold">Your data’s in good hands</h2>
                        <div className="w-full h-[2px] divider rounded-[15px]"></div>
                        <h4 className="text-b2">Our partnership with your CRM enables a seamless flow of information.</h4>
                        <ul className="flex flex-col gap-[9px]">
                            {

                                crmList.map((li, i) => {
                                    return <div key={i} className="flex gap-[16px]">
                                        <Image
                                            src="/images/checkmark.svg"
                                            width={32}
                                            height={32}
                                            alt="Blue circle with white checkmark" />
                                        <div className="text-b1">
                                            {li}
                                        </div>
                                    </div>
                                })
                            }
                        </ul>
                    </div>


                    <div>
                        <button className="btn px-[24px] py-[11px] text-sub1 gap-[10px] rounded-[12px]">See our Pricing</button>
                    </div>

                </div>
            </div>

        </div>
    )
}