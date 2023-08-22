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
    const response = await fetch(`${process.env.SERVER_DOMAIN}/api/${id}`);
    var { news } = await response.json();
  } catch (error) {
    console.log("===== some error occured =====", error);
  }

  return {
    title: `News | ${news.metadata.title}`,
    description: news.metadata.description,
    keywords: news.metadata.keywords.join(","),
    authors: news.metadata.author,
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
      <p>
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
          accusantium molestiae nisi, earum facilis quos quia possimus obcaecati
          dolore totam dolorem? Libero pariatur voluptatibus debitis maxime?
          Aperiam corrupti nesciunt at nisi, veniam dolor voluptatum, aliquid,
          quam repellendus eligendi inventore minima deserunt blanditiis
          corporis ipsa! Assumenda eligendi vero nam explicabo neque amet cumque
          sequi atque laborum eius harum dolorum quo sed impedit, corporis minus
          optio deserunt inventore cum maiores quam necessitatibus. Quasi
          cumque, amet illum velit libero sequi doloribus iste omnis, ratione ut
          nobis error enim! Debitis, libero beatae ullam neque voluptates, illo
          reiciendis quam adipisci et tenetur velit quidem ipsam modi minima
          consectetur optio! Nam voluptatem illum fuga ea eligendi consectetur
          suscipit provident sint cum alias beatae, sapiente, rerum deleniti.
          Cumque corporis illum iste eveniet distinctio tenetur minima excepturi
          quo animi totam dolores fugiat veritatis, quasi libero aut
          necessitatibus quas adipisci ab deleniti voluptates inventore eum?
          Harum officiis placeat nihil odit temporibus dolorum, ducimus et quo
          possimus eaque nam dolor fugiat dolores commodi incidunt quis officia
          cum, consequatur laudantium voluptate quia explicabo ratione, unde
          est. Enim tempora excepturi tenetur quis earum ducimus id saepe fuga a
          corrupti minus doloribus ipsa hic eos pariatur nemo molestias ratione,
          perspiciatis dolore voluptate maiores nihil magnam aperiam facilis.
          Nobis quasi sapiente corporis saepe explicabo veritatis voluptas
          veniam voluptatum modi tenetur dolorem, quaerat ipsam reiciendis
          beatae sed cumque, natus eligendi labore numquam atque illum autem!
          Quam ex officiis veritatis, odio ea illo sint, ipsum nisi inventore,
          nesciunt iure sunt voluptates ut aut saepe eius laudantium eum.
          Similique ducimus aliquid voluptatibus, quod est vel perspiciatis
          maxime ut sapiente adipisci optio at, tempora nostrum velit, nulla
          molestias! Ipsum sequi dolorem temporibus aliquid natus blanditiis
          iste illo cupiditate et rem nobis totam qui aperiam eum provident
          suscipit excepturi quam quia veritatis in, dolores alias? Molestias
          laudantium delectus sapiente voluptate quas incidunt amet, optio eius
          assumenda, adipisci fuga tempora, nulla quasi ducimus at omnis
          blanditiis quae veniam? Officia illo fugit temporibus et adipisci
          sequi laboriosam suscipit. Illo sequi dignissimos voluptatem fuga
          commodi atque maxime laudantium, ab quia, dolore veniam rem excepturi
          recusandae placeat reiciendis debitis assumenda qui error totam non
          cumque dolores quo repudiandae obcaecati. Corrupti numquam non aliquam
          nemo, hic sapiente, in quae tempora repudiandae quas fugiat optio
          suscipit deleniti. Minus deleniti id at quibusdam facilis. A tempora
          commodi quos fuga sapiente rem, dolore ratione quas architecto
          inventore blanditiis omnis? Perferendis obcaecati corporis dolorum
          cupiditate ad veniam beatae nemo odit eos nostrum alias officia, saepe
          voluptatum aut voluptate ipsum dignissimos blanditiis debitis rerum
          asperiores consequatur tempora, ipsam necessitatibus unde! Labore
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
          possimus sunt praesentium alias quis aut quae provident, libero animi
          inventore numquam quas, dignissimos doloribus itaque iusto, voluptatum
          distinctio officiis autem. Labore consequatur tempore itaque fugiat
          voluptatem officiis voluptas doloribus cumque, repellat earum amet
          error, nesciunt doloremque voluptates quis nisi reprehenderit.
          Officiis cum eligendi autem quasi. Dicta dolorum quo corrupti
          temporibus esse perspiciatis eveniet minima, voluptate, saepe expedita
          voluptatibus vero similique, culpa tempore. Optio pariatur, similique
          mollitia incidunt possimus provident ut in sunt corrupti, molestiae
          doloremque omnis deserunt modi hic voluptatem velit quo at, expedita
          tempore? Cum hic veniam adipisci maiores, qui odio fugit quidem
          repellendus, dolorem, repellat fuga vero aperiam. Sint ducimus
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
          voluptates quia quisquam. Repudiandae soluta natus pariatur amet
          reprehenderit, ut molestias quam aperiam a quisquam, quos recusandae
          autem, voluptatum totam magnam cum! Obcaecati odio provident sed
          delectus qui et, expedita sequi porro fugiat iste veritatis quos
          dolorum quibusdam impedit sunt! Consequuntur iste dolor similique
          placeat impedit, corporis eligendi recusandae ipsa saepe maiores
          itaque in ut illum fugit vero voluptatibus quibusdam enim ullam dicta.
          Dolorem quam libero assumenda officiis, autem ullam quod architecto
          excepturi, nihil molestias sed vero ipsam iure necessitatibus,
          reprehenderit soluta itaque provident. Tempore, nesciunt perspiciatis
          illum enim quos aliquam! Mollitia, vel accusantium. Fuga incidunt
          ullam dolorem fugiat{" "}
        </p>
        <p>
          {" "}
          odit impedit explicabo perspiciatis, ipsam odio deserunt tempora
          laboriosam placeat? Incidunt, magnam delectus harum, ut soluta fuga
          laborum vero accusantium voluptas officia sequi, dolor tempore
          inventore odit. Debitis corrupti nobis, esse minus iusto excepturi
          totam similique distinctio. Vitae iste molestias distinctio non, id
          ducimus officiis vel modi iusto, natus aliquid ipsam voluptates
          aliquam error labore cumque autem officia. Dolorum inventore
          aspernatur odit repellat harum excepturi consequatur culpa? Placeat,
          facilis sequi?
        </p>
      </p>
    </>
  );
};

export default NewsPage;
