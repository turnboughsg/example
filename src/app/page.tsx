import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";
import config from "@/amplifyconfiguration.json";
import AddPostForm from "@/components/add-post-form";


const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies
});

export default async function Home() {
  return (
    <main className="text-center pt-48 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        Welcome to Dax&apos;s Blog
      </h1>
      <AddPostForm />
    </main>
  )
}
