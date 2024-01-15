

type PostPageProps = {
    params: {
        id: string;
    };
};

export default async function PostsPage({ params }: PostPageProps) {
    const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
    const data = await response.json();

    return (
        <main className="text-center pt-24 px-7">
            <h1 className="text-5xl font-semibold mb-7">{data.title}</h1>
            <p className="max-w-[700px] mx-auto">{data.body}</p>
        </main>
    )
};