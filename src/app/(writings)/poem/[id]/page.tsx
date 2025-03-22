import { notFound } from "next/navigation";
import {poems} from "@data/poems.js";
import "@styles/writing.css";

interface PoemPageParams {
  params: {
    id: string;
  };
}

export default function PoemPage({ params }: PoemPageParams) {
  let { id } = params;
  const poem = poems.find((p) => p.title === (id).replaceAll("%20", " "));

  if (!poem) return notFound();

  return (
    <div className="bgMainWrit">

      <div className="pic" style={{backgroundImage: `url(/${poem.title}).jpg`}}>
      </div>

      <div className="content">
        <h1 id="title">{poem.title}</h1>
        <pre id="writ-content">{poem.content}</pre>
      </div>
  
    </div>
  );
}
