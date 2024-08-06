import { db } from "@/db";
import { redirect } from "next/navigation";
export default function NewSnippetPage() {

  async function createSnippet(formData: FormData) {
    "use server"

    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await db.snippet.create({ 
      data: {
        title, 
        code 
      }
    });
    console.log("Snippet created", snippet);
    redirect("/");
  }

  return (
    <form action={createSnippet}>
        <h3 className="font-bold m-3">Create a Snippet</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input 
              id="title"
              className="border rounded p-2 w-full" 
              name="title" 
              />
          </div>

          <div className="flex gap-4">
            <label className="w-12" htmlFor="code">
              Code
            </label>
            <textarea 
              id="code"
              className="border rounded p-2 w-full" 
              name="code" 
              />
          </div>
          <button type="submit" className="rounded p-2 bg-blue-200">Create Snippet</button>
        </div>
    </form>
  );
}