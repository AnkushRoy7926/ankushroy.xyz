import { notFound } from "next/navigation";
import {poems} from "@data/poems.js";
import "@styles/writing.css";

interface PoemPageParams {
  params: Promise<{
    id: string;
  }>;
}

export default async function PoemPage({ params }: PoemPageParams) {
  
  const { id } = await params;
  const poem = poems.find((p) => p.title === (id).replaceAll("%20", " "));

  if (!poem) return notFound();

  return (
    <div className="bgMainWrit">

      <div className="pic" style={{backgroundImage: `url(/poems_stories/${(poem.title).replaceAll(" ", "%20")}.png)`}}>
        <h1 className="title">{poem.emoji} {poem.title}<span className="date">{poem.date}</span></h1>
      </div>

      <div className="content">
        <pre className="writ-content">{poem.content}</pre>
      </div>

    </div>
  );
}
