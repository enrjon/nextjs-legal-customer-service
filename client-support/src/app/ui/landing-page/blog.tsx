import BlogCard from "@/app/components/blog-card"

export default function Blog() {
    // Simulates a fetch to the blog API
    const blogFetch = Array(3).fill(
        {
            section: 'LAWYER WELLNESS',
            date: 'June 6, 2024',
            title: 'How Viable Is Remote Work For Lawyers?',
            img: '/images/Article_img_placeholder.jpg',
            content: 'This month on the Answering Legal blog, we’ll be covering remote work in the legal world. Since the rapid adaptations required by quarantine during the COVID-19 pandemic, remote work has steadily been on the rise across all sectors of the economy, both private and public.',
            link: 'https://localhost:3000/blog',
        }
    )

    return (
        <div className="bg-white flex flex-col ">
            <h2 className="flex text-h3 font-bold flex justify-center">Want to learn more? Read our articles on legal intake.</h2>
            <div className="flex flex-row justify-center">
                {
                    blogFetch.map((data, i) => {
                        return <BlogCard key={`blog-card-${i}`} {...data} />
                    })
                }
            </div>
            <button className="btn flex justify-center">Go to blog</button>
        </div>

    )
}