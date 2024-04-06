import MorePosts from "@/components/MorePosts";
import SinglePost from "@/components/SinglePost";
import { MorePost, SinglePostSkeleton } from "@/components/Skeletons";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";

export default function Postpage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<SinglePostSkeleton />}>
        <SinglePost id={id} />
      </Suspense>
      <Separator className="my-12 max-w-3xl lg:max-w-4xl mx-auto" />
      <Suspense fallback={<MorePost />}>
        <MorePosts postId={id} />
      </Suspense>
    </div>
  );
}
