// Simulates a fetch to the blog API
export const blogFetch = Array(5).fill({
  section: "LAWYER WELLNESS",
  date: "June 6, 2024",
  title: "How Viable Is Remote Work For Lawyers?",
  img: "/images/Article_img_placeholder.jpg",
  content:
    "This month on the Legal Support's blog, we’ll be covering remote work in the legal world. Since the rapid adaptations required by quarantine during the COVID-19 pandemic, remote work has steadily been on the rise across all sectors of the economy, both private and public.",
  link: "https://localhost:3000/blog",
});

export interface Blog {
    section: string;
    date: string;
    title: string;
    img: string;
    content: string;
    link: string;
}