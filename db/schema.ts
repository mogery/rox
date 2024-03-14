import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    user: varchar('user', { length: 256 }).notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
});

export type PostType = typeof posts.$inferSelect;
