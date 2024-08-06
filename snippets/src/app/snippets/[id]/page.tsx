import { db } from "@/db";
import { notFound } from "next/navigation";
interface SnippetProps {
    params: {
        id: string;
    }
}

export default async function Snippet(props: SnippetProps) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const snippet = await db.snippet.findFirst({
        where: {
            id: parseInt(props.params.id)
        }
    });

    if (!snippet) {
        notFound(); 
    }

    return (
        <>
            <div>
                <h2>Snippet {snippet.id}</h2>
                <h3>{snippet.title}</h3>
                <p>{snippet.code}</p>
            </div>
        </>
        
    );
}