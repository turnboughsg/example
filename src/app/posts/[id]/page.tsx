import { notFound } from "next/navigation";
import * as queries from '@/graphql/queries';
import config from '@/amplifyconfiguration.json';
import { generateClient } from 'aws-amplify/api';
import { cookies } from 'next/headers';

const client = generateClient();

type PostPageProps = {
    params: {
        id: string;
    };
};

export default async function PostsPage({ params }: PostPageProps) {
    const post = await client.graphql({
        query: queries.getPost,
        variables: {'id': `${params.id}`}
    });


    if (!post.name) {
        return notFound();
    }
    return (
        <main className="text-center pt-24 px-7">
            <h1 className="text-5xl font-semibold mb-7">{post.name}</h1>
            <p className="max-w-[700px] mx-auto">{post.body}</p>
        </main>
    )
};