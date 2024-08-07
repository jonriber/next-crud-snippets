"use server"
import { db } from "@/db";
import { redirect } from "next/navigation";
import { type } from "os";



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

export async function createSnippet(formState:{message:string},formData: FormData) {

   

    try{
        const title = formData.get("title");
        const code = formData.get("code");

        
        if(typeof title !== "string" || title.length < 3) {
            return {message: "Title must be at least 3 characters long"};
        }
    
        if(typeof code !== "string" || code.length < 10) {
            return {message: "Code must be at least 10 characters long"};
        }
    
        const snippet = await db.snippet.create({ 
          data: {
            title, 
            code 
          }
        });
        console.log("Snippet created", snippet);

    } catch (error:unknown){
        if(error instanceof Error){
            console.error(error.message);
            return {message: error.message};
        }else{
            return{message: "An error occurred"};
        }
    }
    
    redirect("/");
  }