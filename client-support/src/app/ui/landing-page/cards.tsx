import Image from "next/image"

export default function Cards() {
    const cards = [
        {
            label: "Legal answering service",
            description: "With 24/7 legal intake, you’ll never miss a potential client’s call.",
            image: "/images/AL_2ColorIcon-AnsweringService.svg",
        },
        {
            label: "Legal answering service",
            description: "With 24/7 legal intake, you’ll never miss a potential client’s call.",
            image: "/images/AL_2ColorIcon-AnsweringService.svg",
        },
        {
            label: "Legal answering service",
            description: "With 24/7 legal intake, you’ll never miss a potential client’s call.",
            image: "/images/AL_2ColorIcon-AnsweringService.svg",
        },
    ]

    return (
        <div>
            <h3 className="text-white">Here's what we can do for your law firm</h3>
            <div className="flex">
                {
                    cards.map((card, i) => {
                        return <div key={`card-${i}`} className="bg-white rounded grid justify-items-stretch">
                            <Image
                                src={card.image}
                                width={100}
                                height={100}
                                alt={`${card.label} vector image`}
                                className="flex justify-self-center"
                            ></Image>
                            <h2>{card.label}</h2>
                            <div className="w-full h-1 bg-blue-500"></div>
                            <p>{card.description}</p>
                        </div>
                    })
                }
            </div>

        </div>
    )
}