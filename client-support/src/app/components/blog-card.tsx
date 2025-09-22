import Image from "next/image"
//import blogImage from '/images/Article_img_placeholder.jpg'
import Link from "next/link"

interface Blog {
    section: string;
    date: string;
    title: string;
    img: string;
    content: string;
    link: string;
}

export default function BlogCard(blogData: Blog) {
    return (
        <div>
            <div className="card gap-[8px] p-[16px]">
                <Image
                    src={blogData.img}
                    width={320}
                    height={193}
                    alt="Man talking on phone"
                    className="rounded-[20px]"
                    style={{
                        objectFit: 'contain'
                    }}
                />
                <h5 className="self-start text-sub2 font-bold selected">{blogData.section}</h5>
                <div className="gap-[16px] flex">
                    <div className="w-[2px] h-full bg-blue-500 rounded-[15px]"></div>
                    <div className="gap-[12px]">
                        <time className="gray-text text-sub2">{blogData.date}</time>
                        <h4 className=" text-sub1 font-semibold">{blogData.title}</h4>
                    </div>

                </div>
                <p className="overflow-hidden text-ellipsis text-b1">{blogData.content}</p>
                <Link
                    href={''}
                    className="text-sub2 self-start selected font-bold"
                >[Read More{`>`}]</Link>
            </div>
        </div>

    )
}