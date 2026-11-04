import PostsCard, { type PostType } from "@/_components/PostsCard";
import RenderAllPosts from "@/_components/RenderAllPosts";
import { SkeletonDemo } from "@/_components/Skeletons/postsSkeleton";
import { Suspense } from "react";

export default async function page() {
  const waitThreeSeconds = new Promise((resolve) => {
    setTimeout(() => {
      resolve("3 seconds have passed!");
    }, 3000);
  });
  const wait = await waitThreeSeconds;
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      <Suspense fallback={<SkeletonDemo />}>
        <RenderAllPosts />
      </Suspense>
    </div>
  );
}
