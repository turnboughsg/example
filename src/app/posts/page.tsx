import AddPostForm from "@/components/add-post-form";
import PostsList from "@/components/posts-list";
import { Suspense } from "react";

export default async function PostsPage() {

    return (
        <main className="text-center pt-16 px-5">
            <AddPostForm />
            <h1 className="text-5xl font-semibold mb-7">All Posts</h1>
            <Suspense fallback="Loading...">
                <PostsList />
            </Suspense>
        </main>
    )
};