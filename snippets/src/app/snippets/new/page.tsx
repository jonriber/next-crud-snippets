export default function NewSnippetPage() {
  return (
    <form>
        <h3>Create a Snippet</h3>
        <label>
            Title
            <input type="text" name="title" />
        </label>
        <label>
            Description
            <input type="text" name="description" />
        </label>
        <label>
            Code
            <textarea name="code" />
        </label>
        <button type="submit">Create Snippet</button>
    </form>
  );
}