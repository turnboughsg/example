import Link from 'next/link';

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
                            {post.title}
                        </Link>
                    </li>
                ))}
        </ul>
        </>
    )
};