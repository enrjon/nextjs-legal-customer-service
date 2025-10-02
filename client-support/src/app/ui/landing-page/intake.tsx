import Image from "next/image"

export default function Intake() {
    return (
        <div className="flex justify-center gap-[50px] p-[32px] lg:py-[64]">
            <div className="flex flex-col-reverse items-center lg:flex-row gap-[32px]">
                <div className="flex flex-col max-w-[534px]">
                    <div className="flex flex-col gap-[32px] py-[32px]">
                        <h3 className="text-h2 font-bold">Design your perfect legal intake process</h3>
                        <div className="w-full h-[2px] divider"></div>
                        <p className="text-b2">Get everything you need out of every new client call. The virtual receptionists at our legal intake call center will use your unique specifications to perform a legal intake for every new client caller.</p>
                    </div>
                    <button className="cursor-pointer btn self-start px-[24px] py-[11px] text-sub1 gap-[10px] rounded-[12px]">
                        See our pricing</button>
                </div>
                <Image
                    src='/images/Receptionist_IMG.png'
                    width={534}
                    height={453}
                    alt="Receptionist answering phone"
                ></Image>
            </div>
        </div>
    )
}