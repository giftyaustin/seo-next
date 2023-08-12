import { Metadata, ResolvingMetadata } from "next"



const fetchNewsItem = async(id:String)=>{
    const res = await fetch(`${process.env.SERVER_DOMAIN}/api/${id}`)
    const news = await res.json()
    return news
}

type Props = {
    params: { id: string }
  }
   
  export async function generateMetadata(
    { params}: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const id = params.id
   
    // fetch data
try {
    const response = await fetch(`${process.env.SERVER_DOMAIN}/api/${id}`)
    var news = await response.json()
    console.log(news.metadata)
} catch (error) {
    console.log(error)
}


   
   

   
    return {
      title: `News | ${news.metadata.title}`,
      description:news.metadata.description,
      keywords:news.metadata.keywords.join(',')
    }
  }

const NewsPage = async ({params}:Props) => {

   const newsItem =  await fetchNewsItem(params.id)

  return (
    <>
    <h1>{newsItem.headline}</h1>
    <p>{newsItem.content}</p>
    </>
  )
}

export default NewsPage
