import Image from "next/image"

export default function Cards() {
    const cards = [
        {
            label: "Legal answering service",
            description: "With 24/7 legal intake, you’ll never miss a potential client’s call.",
            image: "/images/AL_2ColorIcon-AnsweringService.svg",
        },
        {
            label: "AI intake chatbot",
            description: "With 24/7 legal intake, you’ll never miss a potential client’s call.",
            image: "/images/AL_2ColorIcon-Chatbot.svg",
        },
        {
            label: "Live translation services",
            description: "With 24/7 legal intake, you’ll never miss a potential client’s call.",
            image: "/images/AL_2ColorIcon-LVCv2.svg",
        },
    ]

    return (
        <div className="flex justify-center flex-col gap-[36px]">
            <div className="flex flex-col gap-[24px] p-[80px] items-center">
                <h3 className="text-h3 font-bold flex text-center md:text-white">Here{`'`}s what we can do for your law firm</h3>
                <div className="w-full bg-blue-500 h-[2px]"></div>
            </div>

            <div className="flex gap-[32px] flex-col lg:flex-row items-center justify-center">
                {
                    cards.map((card, i) => {
                        return <div key={`card-${i}`} className="card px-[16px] py-[32px] justify-between gap-[8px]">
                            <Image
                                src={card.image}
                                width={100}
                                height={100}
                                alt={`${card.label} vector image`}
                                className="flex"
                            ></Image>
                            <h2 className="text-h2 text-center font-bold">{card.label}</h2>
                            <div className="w-full h-1 bg-blue-300"></div>
                            <p className="text-sub2 font-semibold">{card.description}</p>
                        </div>
                    })
                }
            </div>

        </div>
    )
}