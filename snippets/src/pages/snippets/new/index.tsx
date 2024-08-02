export default function NewSnippet() {
  return (
    <form>
        <h3 className="font-bold m-3">Create a Snippet</h3>
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <label className="w-12" htmlFor="title">Title</label>
                <input 
                    className="border rounded p-2 w-full"
                    type="text" 
                    id="title" 
                    name="title" 
                    />
            </div>

            <div className="flex gap-4">
                <label className="w-12" htmlFor="code">Code</label>
                <textarea 
                    className="border rounded p-2 w-full"
                    id="code" 
                    name="code" 
                    />
            </div>

            <button type="submit" className="rounded p-2 bg-blue-200">
                Create
            </button>
        </div>
    </form>
  );
}