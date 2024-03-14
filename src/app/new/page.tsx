import db from "@/db";
import { redirect } from "next/navigation";
import { posts } from "../../../db/schema";

export default function NewPage() {
    async function newPost(formData: FormData) {
        'use server'

        const data = {
            user: formData.get("user"),
            content: formData.get("content"),
        };

        if (typeof data.user !== "string" || typeof data.content !== "string") {
            throw new Error("bad data");
        }

        await db.insert(posts).values({
            user: data.user,
            content: data.content,
        });

        redirect("/");
    }

    return (
        <main className="flex w-full h-full items-center justify-center">
            <form action={newPost} className="flex flex-col gap-2">
                <input name="user" placeholder="Username" className="bg-transparent border px-2 py-1 rounded" />
                <textarea name="content" placeholder="What's on your mind?" className="bg-transparent border px-2 py-1 rounded" />
                <input type="submit" className="bg-transparent border px-2 py-1 rounded" />
            </form>
        </main>
    )
}
