import Post from "@/components/Post";
import db from "@/db";
import { desc } from "drizzle-orm";
import { posts } from "../../db/schema";

export default async function Home() {
  const fetchedPosts = await db.select().from(posts)
    .orderBy(desc(posts.createdAt));

  return (
    <main className="flex flex-col items-center min-h-full gap-4 py-4">
      {fetchedPosts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </main>
  );
}
