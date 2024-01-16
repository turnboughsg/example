import Link from 'next/link';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import * as mutations from '@/graphql/mutations';
import * as queries from '@/graphql/queries';


type PostsListsProps = {
    posts: Post[];
};

export default function PostsList({ posts }: PostsListsProps) {

    return (
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
    )
};