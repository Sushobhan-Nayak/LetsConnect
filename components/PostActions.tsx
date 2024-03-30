// import { PostWithExtras } from "@/lib/definitions";
// import LikeButton from "./LikeButton";
// import Link from "next/link";

// type Props = {
//   post: PostWithExtras;
//   userId?: string;
//   className?: string;
// };

// export default function PostActions({ post, userId, className }: Props) {
//   return (
//     <div className={cn("relative flex items-start w-full gap-x-2", className)}>
//       <LikeButton post={post} userId={userId} />
//       <Link href={`/dashboard/p/${post.id}`}>
//         <ActionIcon>
//           <MessageCircle className={"h-6 w-6"} />
//         </ActionIcon>
//       </Link>
//       <ShareButton postId={post.id} />
//       <BookmarkButton post={post} userId={userId} />
//     </div>
//   );
// }
