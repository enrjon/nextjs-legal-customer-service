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
        <div className="bg-white rounded md:w-100 ">
            <Image
                src={blogData.img}
                width={320}
                height={193}
                alt="Man talking on phone"
            />
            <h5>{blogData.section}</h5>
            <time >{blogData.date}</time>
            <h4>{blogData.title}</h4>
            <p>{blogData.content}</p>
            <Link
                href={''}
            >[Read More{`>`}]</Link>
        </div>
    )
}