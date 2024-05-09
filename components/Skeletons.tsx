import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "./ui/card";

export function PostSkeleton() {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>

      <Skeleton className="h-[450px]" />
    </div>
  );
}

export function PostsSkeleton() {
  return (
    <>
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </>
  );
}

export function EditPostSkeleton() {
  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit info</DialogTitle>
        </DialogHeader>

        <AspectRatio ratio={1 / 1} className="relative h-full">
          <Skeleton className="h-full w-full" />
        </AspectRatio>

        <Skeleton className="h-10 w-full" />
      </DialogContent>
    </Dialog>
  );
}

export function ViewPostSkeleton() {
  return (
    <Dialog open>
      <DialogContent className="flex gap-0 flex-col md:flex-row items-start p-0 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl h-full max-h-[500px] lg:max-h-[700px] xl:max-h-[800px]">
        <Skeleton className="relative overflow-hidden h-96 md:h-[500px] lg:h-[700px] xl:h-[800px] max-w-3xl w-full rounded-r-none" />

        <div className="flex flex-col h-full py-4 pl-3.5 pr-6 flex-1">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>

          <Skeleton className="flex-1 my-4" />

          <div className="flex items-center w-full space-x-4">
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-full flex-1" />
              <Skeleton className="h-4 w-[300px]" />
              <Skeleton className="h-4 w-[300px]" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function UserAvatarSkeleton() {
  return (
    <div className="flex items-center space-x-2">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export function SinglePostSkeleton() {
  return (
    <Card className="max-w-3xl lg:max-w-4xl mx-auto hidden md:flex">
      <div className="relative overflow-hidden h-[450px] max-w-sm lg:max-w-lg  w-full">
        <Skeleton className="h-full w-full" />
      </div>

      <div className="flex max-w-sm flex-col flex-1">
        <div className="flex items-center justify-between border-b px-5 py-3">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
        </div>

        <div className="px-5 space-y-3 mt-8">
          <UserAvatarSkeleton />
          <UserAvatarSkeleton />
          <UserAvatarSkeleton />
          <UserAvatarSkeleton />
        </div>
      </div>
    </Card>
  );
}

export function MorePost() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Skeleton className="h-44 md:h-64 lg:h-80"></Skeleton>
      <Skeleton className="h-44 md:h-64 lg:h-80"></Skeleton>
      <Skeleton className="h-44 md:h-64 lg:h-80"></Skeleton>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="flex flex-col h-screen relative md:flex-row md:overflow-hidden">
      <div className="flex-none w-20 lg:w-64 md:border-r">
        <Skeleton className="h-full" />
      </div>
      <div className="flex-grow flex-1 w-full mt-12 md:mt-0 md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-[150px] w-[150px] rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[450px]" />
              <Skeleton className="h-4 w-[400px]" />
            </div>
          </div>
          <Skeleton className="h-4 w-full" />
          <MorePost />
        </div>
      </div>
    </div>
  );
}

export default function EditSkeleton() {
  return (
    <div className="px-24 space-y-12">
      <Skeleton className="h-4 w-[250px]" />
      <div className="flex items-center space-x-2">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
      </div>
      <Skeleton className="h-6 w-[350px]" />
      <Skeleton className="h-16 w-[350px]" />
      <Skeleton className="h-6 w-[350px]" />
      <Skeleton className="h-[45px] w-[100px]" />
    </div>
  );
}
