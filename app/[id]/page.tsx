import { Metadata, ResolvingMetadata } from "next";

const fetchNewsItem = async (id: String) => {
  const res = await fetch(`${process.env.SERVER_DOMAIN}/api/${id}`);
  const { news } = await res.json();
  return news;
};

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  try {
    const response = await fetch(`${process.env.SERVER_DOMAIN}/api/${id}`,{cache:'no-cache'});
    var { news } = await response.json();
  } catch (error) {
    console.log("===== some error occured =====", error);
  }

  return {
    title: `News | ${news.metadata.title}`,
    description: news.metadata.description,
    keywords: news.metadata.keywords.join(","),
    authors:{name:news.metadata.author},
    category: news.metadata.category,
  };
}

const NewsPage = async ({ params }: Props) => {
  const newsItem = await fetchNewsItem(params.id);

  return (
    <>
      <h1 className="text-2xl bg-emerald-950 text-slate-50 my-3 rounded-md p-4">{newsItem.headline}</h1>
      <p>{newsItem.content}</p>
      <br />
      
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde sed
        quasi, corrupti molestias in laborum vitae nemo quas dolor saepe? Amet
        corrupti, iure nemo modi culpa dolorum velit commodi impedit? Lorem
        ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Minima doloremque architecto tenetur, commodi ut et sint,
        blanditiis adipisci dolorum veniam cupiditate? Obcaecati ullam iste
        consequuntur consectetur corrupti similique odit voluptatum sed
        architecto. Aliquam repellendus dolorem voluptas rem eius aperiam quia
        accusantium repellat commodi harum voluptates consequuntur eligendi,
        pariatur explicabo, asperiores in ea necessitatibus fugit praesentium
        vitae natus architecto nihil quam tempora. Consequuntur explicabo libero
        dolorum sit quidem nisi velit{" "}
        <p>
          {" "}
          distinctio repellat pariatur quos blanditiis et, sed at, rerum
          dignissimos. Nam in quas corrupti et perferendis reprehenderit
          accusant est vel perspiciatis
          maxime ut sapiente adipisci optio at, tempora nostrum velit, nulla
          molestias! tempora, ipsam necessitatibus unde! Labore
          repellat debitis pariatur vitae velit cupiditate impedit eveniet ad
          laudantium quaerat magnam sapiente similique, aut consectetur corporis
          saepe! Labore sit hic, dolores amet corrupti asperiores tempora
          maiores rerum iusto vel in iure repellendus esse reprehenderit
          laboriosam alias vitae quae incidunt harum expedita cumque ea. Fugit
          accusamus maiores dicta dolore optio delectus fugiat minima, eveniet
          cum aliquid, dignissimos ratione nemo adipisci quod quia distinctio
          possimus ex debitis eum laboriosam sed repellendus, magnam beatae
          provident. Explicabo distinctio veniam, quo consequuntur culpa cumque
          alias laudantium similique iure minima, numquam aliquid. Tempora
          aliquam iste magnam sit, non facere cumque rerum provident perferendis
          assumenda pariatur a porro!{" "}
        </p>
        <p>
          At animi, sapiente laudantium ipsam necessitatibus a! Officia, soluta
          iusto aliquid a, placeat facilis cum delectus aliquam consequuntur est
          voluptate magnam blanditiis, ab iste! A aspernatur tempore saepe cum
          possimut fuga vero aperiam. Sint ducimus
          officiis harum optio tenetur esse culpa nisi non dignissimos, fuga
          quisquam dolorum libero ab. Temporibus esse ab ut eaque unde
          perferendis exercitationem tempore, repudiandae, placeat eveniet
          corrupti quaerat ea? Ab beatae doloremque eligendi inventore similique
          perspiciatis error corrupti labore ratione reprehenderit amet
          repudiandae expedita hic autem deserunt sit, placeat ea. Laborum,
          libero delectus fugiat totam ad impedit quia ipsa? Veritatis, ipsam
          eos id iure, minima in, delectus accusantium pariatur odit dignissimos
          asperiores consequatur laudantium corrupti veniam? Reiciendis magnam
          quo natus expedita iusto mollitia dicta corporis eveniet soluta at
          error a dolorem, quibusdam aspernatur voluptate eaque nobis ipsam nisi
          vol{" "}
        </p>
        <p>
          {" "}
          odit impedit explicabo perspiciatis, ipsam odio deserunt tempora
          laboriosam placeat? Incidunt, magnam delectus harum, ut soluta fuga
          laborum vero accusantium voluptas officia sequi, dolor tempore
          inventore odi vel modi iusto, natus aliquid ipsam voluptates
          aliquam error labore cumque autem officia. Dolorum inventore
          aspernatur odit repellat harum excepturi consequatur culpa? Placeat,
          facilis sequi?
        </p>
      
    </>
  );
};

export default NewsPage;
