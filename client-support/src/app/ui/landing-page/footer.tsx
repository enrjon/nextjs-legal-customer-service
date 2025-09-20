import Link from "next/link"

export default function Footer() {
    const footer = [
        {
            head: 'Our Service',
            list: [
                { name: 'Who We Serve', link: 'who-we-serve' },
                { name: 'FAQs', link: 'faqs' },
                { name: 'Tutorials', link: 'tutorials' },
                { name: 'What Is An Answering Service?', link: 'what-is-an-answering-service' },
                { name: 'What Is A Legal Intake Receptionist?', link: 'what-is-a-legal-intake-receptionist' },
                { name: 'What Is A Virtual Receptionist?', link: 'what-is-a-virtual-receptionist' }
            ]
            ,
        },
        {
            head: 'Company',
            list: [
                { name: 'Meet The Team', link: 'meet-the-team' },
                { name: 'Our Authors', link: 'our-authors' }
            ],
        },
        {
            head: 'Partnerships',
            list: [
                { name: 'Integrations', link: 'integrations' },
                { name: 'Affiliate Program', link: 'affiliate-program' },
                { name: 'Law Firm Marketing', link: 'law-firm-marketing' }
            ],
        },
        {
            head: 'Resources',
            list: [
                { name: 'Blog', link: 'blog' },
                { name: 'Podcast', link: 'podcast' },
                { name: 'Videos', link: 'videos' },
                { name: "Let's Talk Legal", link: 'lets-talk-legal' },
                { name: 'Marketing', link: 'marketing' },
                { name: 'The Answering Legal', link: 'the-answering-legal' },
                { name: 'Book Club', link: 'book-club' },
                { name: 'Top Legal Softwares', link: 'top-legal-softwares' }
            ],
        },
        {
            head: 'Support',
            list: [
                { name: 'Contact Us', link: 'contact-us' },
                { name: 'Submit A Ticket', link: 'submit-a-ticket' },
                { name: 'Privacy Policy', link: 'privacy-policy' },
                { name: 'Terms Of Service', link: 'terms-of-service' },
                { name: 'Employment', link: 'employment' },
                { name: 'Opportunities', link: 'opportunities' }
            ],
        },
        {
            head: 'Follow Us',
            list: [
                { name: 'Twitter', link: 'twitter' },
                { name: 'Facebook', link: 'facebook' },
                { name: 'Instagram', link: 'instagram' },
                { name: 'LinkedIn', link: 'linkedin' }
            ],
        },
    ]
    return (
        <div className="flex flex-row text-white bg-blue-900">
            <div>
                <p>Have questions? Our team is here to help. Call 631-400-8888</p>
                <p>Monday to Friday from 9 am to 7 pm EST.</p>
            </div>
            <div className="flex">
                {
                    footer.map((section, i) => {
                        return (
                            <div key={`footer-${section.head}-${i}`}
                                className="flex ">
                                <h3>{section.head}</h3>
                                <ul>
                                    {section.list.map((li, i) => {
                                        return <li key={`footer-${li.name}-${i}`}>
                                            <Link

                                                href={`http://localhost:3000/landing-page/${li.link}`}
                                            >{li.name}</Link>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}