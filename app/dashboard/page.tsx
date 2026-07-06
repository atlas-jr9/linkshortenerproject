import { auth } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) {
    return redirectToSignIn();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-24 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">Dashboard</h1>
    </main>
  );
}
