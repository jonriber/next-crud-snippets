"use server"
import { db } from "@/db";
import { redirect } from "next/navigation";



export async function editSnippet(id: number, code: string|undefined) {
    const snippet = await db.snippet.update({
        where: {
            id
        },
        data: {
            code
        }
    });

    console.log("Snippet updated", snippet);
    redirect(`/snippets/${id}`);

}

export async function deleteSnippet(id: number|undefined) {
    const snippet = await db.snippet.delete({
        where: {
            id
        }
    });

    console.log("Snippet deleted", snippet);
    redirect("/");
}