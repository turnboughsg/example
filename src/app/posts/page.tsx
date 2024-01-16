// import PostsList from "@/components/posts-list";
import * as queries from '@/graphql/queries';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import * as mutations from '@/graphql/mutations';
import Link from 'next/link';


import config from '@/amplifyconfiguration.json';

const cookiesClient = generateServerClientUsingCookies({
    config,
    cookies
});

export default async function PostsPage() {
    const { data, errors } = await cookiesClient.graphql({
        query: queries.listPosts
    });

    const posts = data.listPosts.items;

    {
        (!posts || posts.length === 0 || errors) && (
            <div>
                <p>No posts, please add one.</p>
            </div>
        )
    }
    return (
        <main className="text-center pt-16 px-5">
            <h1 className="text-5xl font-semibold mb-7">All Blog Posts</h1>
            <>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id} className="max-w-[400x] mb-3 mx-auto">
                            <Link href={`/posts/${post.id}`}>
                                {post.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        </main>
    )
};