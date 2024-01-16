// import SubmitBtn from './submit-btn';
// import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';
import config from '@/amplifyconfiguration.json';
import * as mutations from '@/graphql/mutations';

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies
});
export default async function AddPostForm() {
    const createPost = async (formData: FormData) => {
        "use server";

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const { data } = await cookiesClient.graphql({
            query: mutations.createPost,
            variables: {
                input: {
                    name: formData.get("name")?.toString() ?? '',
                    body: formData.get("body")?.toString()?? '',
                }
},
        });
        console.log('Created Post: ', data?.addPost);
        revalidatePath("/");
    }

    return (
        <form
            action={createPost}
            className="flex flex-col rounded max-w-[500px] mb-10 mx-auto space-y-2">
            <input
                type="text"
                name="name"
                placeholder="Blog Post Title"
                className="border rounded h-10 px-3"
                required />
            <textarea
                name="body"
                placeholder="Body"
                className="border rounded p-3"
                rows={5}
                required />
            <button type="submit" className="bg-zinc-900 disabled:bg-zinc-500 transition text-white font-bold py-2 px-3 rounded">
                Create Blog Post
            </button>
        </form>
    );
}