"use client";

import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-zinc-900 disabled:bg-zinc-500 transition text-white font-bold py-2 px-3 rounded">
            Create New Post
        </button>
    )
};