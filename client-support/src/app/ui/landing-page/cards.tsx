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
        <div className="flex justify-center flex-wrap gap-[36px]">
            <h3 className="text-h3 font-bold text-white flex">Here&apos;s what we can do for your law firm</h3>
            <div className="flex gap-[32px]">
                {
                    cards.map((card, i) => {
                        return <div key={`card-${i}`} className="card px-[16px] py-[32px] justify-between">
                            <Image
                                src={card.image}
                                width={100}
                                height={100}
                                alt={`${card.label} vector image`}
                                className="flex"
                            ></Image>
                            <h2 className="text-h3 text-center font-bold">{card.label}</h2>
                            <div className="w-full h-1 bg-blue-300"></div>
                            <p>{card.description}</p>
                        </div>
                    })
                }
            </div>

        </div>
    )
}