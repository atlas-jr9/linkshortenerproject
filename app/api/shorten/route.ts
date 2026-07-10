import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createLink } from "@/lib/shortener";

export async function POST(request: Request) {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) {
    return redirectToSignIn();
  }

  const body = await request.json().catch(() => null);

  if (!body || typeof body.url !== "string") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const url = body.url.trim();

  if (!url || !/^https?:\/\//.test(url)) {
    return NextResponse.json({ error: "URL must start with http:// or https://" }, { status: 400 });
  }

  try {
    const link = await createLink({ clerkUserId: userId, url, code: body.code });
    return NextResponse.json({ link }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Could not create link" }, { status: 500 });
  }
}
