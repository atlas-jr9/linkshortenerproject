import { eq } from "drizzle-orm";
import { db } from "@/db/index";
import { links } from "@/db/schema";

const BASE62 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function randomCode(length = 8) {
  let result = "";
  for (let i = 0; i < length; i += 1) {
    result += BASE62[Math.floor(Math.random() * BASE62.length)];
  }
  return result;
}

export interface CreateLinkInput {
  clerkUserId: string;
  url: string;
  code?: string;
}

export async function findLinkByCode(code: string) {
  const link = await db.select().from(links).where(eq(links.code, code)).limit(1);
  return link[0] ?? null;
}

export async function createLink({ clerkUserId, url, code }: CreateLinkInput) {
  const normalizedCode = code?.trim();
  const generatedCode = normalizedCode || randomCode(8);

  const finalCode = normalizedCode ? normalizedCode : generatedCode;

  try {
    const rows = await db
      .insert(links)
      .values({
        userid: clerkUserId,
        clerk_user_id: clerkUserId,
        url,
        code: finalCode,
      })
      .returning();

    return rows[0];
  } catch (error) {
    throw new Error("Failed to create link. The code may already exist.");
  }
}
