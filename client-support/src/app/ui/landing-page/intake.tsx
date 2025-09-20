import Image from "next/image"

export default function Intake() {
    return (
        <div className="bg-white ">
            <div>
                <h3 className="text-h3">Design your perfect legal intake process</h3>
                <p>Get everything you need out of every new client call. The virtual receptionists at our legal intake call center will use your unique specifications to perform a legal intake for every new client caller.</p>
                <button className="bg-blue-500 rounded text-white px-3 py-1 font-semibold">See our Pricing</button>
            </div>
            <Image
                src='/images/Receptionist_IMG.png'
                sizes="100pvw"
                width={10}
                height={10}
                style={{
                    width: '40%',
                    height: 'auto',
                }}
                alt="Receptionist answering phone"
            ></Image>
        </div>
    )
}