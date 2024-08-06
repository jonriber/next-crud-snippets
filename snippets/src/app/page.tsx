import { db } from "@/db";
export default async function Home() {

  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) =>{
    return (
      <div key={snippet.id}>
        <h3>{snippet.title}</h3>
        <p>{snippet.code}</p>
      </div>
    )
  })
  return (
    <>
      <div>
        Home Page
      </div>
      <div>
        {renderedSnippets}
      </div>
    </>
    
  );
}
