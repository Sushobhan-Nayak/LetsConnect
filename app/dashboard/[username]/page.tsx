import PostsGrid from "@/components/PostsGrid";
import { fetchPostsByUsername } from "@/lib/data";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

async function page({
  params: { username },
}: {
  params: { username: string };
}) {
  const posts = await fetchPostsByUsername(username);
  
  return <PostsGrid posts={posts} />;
}

export default page;
