import { fetchPosts } from "@/lib/data";
import Post from "./Post";

async function Posts() {
  const posts = await fetchPosts();
  // console.log(posts);
  if(posts.length == 0){
    return <div className="flex flex-col justify-center items-center">No posts to show.</div>
  }
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
}

export default Posts;
