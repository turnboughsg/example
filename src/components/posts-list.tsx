import Link from 'next/link';
import prisma from '@prisma/client';


export default async function PostsList() {
await new Promise(resolve => setTimeout(resolve, 1000));
    const posts = await prisma.post.findMany();
    return (
        <>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="max-w-[400x] mb-3 mx-auto">
                        <Link href={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                )
                )}
        </ul>
        </>
    )
};