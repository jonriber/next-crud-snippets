"use client"

import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client"
import { useState } from "react";

interface SnippetEditFormProps {
    snippet: Snippet;
}

export default function SnippetEditForm({snippet}: SnippetEditFormProps) {
    const [code,setCode] = useState<string | undefined>(snippet.code);
    function handleEditorChange(value: string | undefined) {
        // console.log(value);
        setCode(value);
    }
    return (
        <>
            <Editor
                height={"40vh"}
                theme="vs-dark"
                defaultLanguage="javascript"
                defaultValue={snippet.code}
                options={{minimap: {enabled: false}}}
                onChange={handleEditorChange}
            />
        </>
    )
}