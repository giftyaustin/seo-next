import Link from "next/link"

interface News{
    id: string;
    headline: string;
    content: string;
    metadata: {
        title: string;
        description: string;
        keywords: string[];
    };
}

const fetchNews = async()=>{
    const response = await fetch(`${process.env.SERVER_DOMAIN}/api/news`)
    const res = await response.json()
    return res.news
}


const page = async () => {
    const news = await fetchNews()
  return (
    <>
    <ul>
        {news.map((c:News)=>{
            return(
                <li key={c.headline}><Link href={`/${c.id}`}>{c.headline}</Link></li>
            )
        })}
    </ul>
    </>
  )
}

export default page
