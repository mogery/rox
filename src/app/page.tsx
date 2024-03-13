import Post from "@/components/Post";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-full gap-4 py-4">
      {new Array(100).fill(0).map((_, i) => (
        <Post key={i} />
      ))}
    </main>
  );
}
