import { PostWithExtras } from "@/lib/definitions";
import { Card } from "./ui/card";
import { auth } from "@/auth";
import UserAvatar from "./UserAvatar";
import Timestamp from "./Timestamp";
import PostOptions from "./PostOptions";

async function Post({ post }: { post: PostWithExtras }) {
  const session = await auth();
  const userId = session?.user?.id;
  const username = post.user.username;
  if (!session?.user) return null;

  return (
    <div className="flex flex-col space-y-2.5">
      <div className="flex items-center justify-between px-3 sm:px-0">
        <div className="flex space-x-3 items-center">
          <UserAvatar user={post.user}></UserAvatar>
          <div className="text-sm">
            <p className="space-x-1">
              <span className="font-semibold">{username}</span>
              <span
                className="font-medium text-neutral-500 dark:text-neutral-400
                      text-xs
                    "
              >
                •
              </span>
              <Timestamp createdAt={post.createdAt} />
            </p>
            <p className="text-xs text-black dark:text-white font-medium">
              Pune, India
            </p>
          </div>
        </div>
        <PostOptions post={post} userId={userId} />
      </div>
    </div>
  );
}

export default Post;
