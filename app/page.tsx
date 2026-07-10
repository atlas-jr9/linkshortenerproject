import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  Link2,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Link2,
    title: "Shorten instantly",
    description: "Turn long URLs into clean, memorable links in a single click.",
  },
  {
    icon: ShieldCheck,
    title: "Secure access",
    description: "Protect your workspace with Clerk authentication and safe link management.",
  },
  {
    icon: BarChart3,
    title: "Organize your links",
    description: "Keep all your URLs in one polished dashboard and control every campaign.",
  },
];

const steps = [
  {
    icon: Rocket,
    title: "Create a short link",
    description: "Paste your URL, choose a code, and generate a branded link instantly.",
  },
  {
    icon: BadgeCheck,
    title: "Share securely",
    description: "Use authenticated redirects so every shared link stays reliable and safe.",
  },
  {
    icon: Sparkles,
    title: "Manage with ease",
    description: "Review and reuse your saved links from one clean dashboard.",
  },
];

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="flex-1 bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/20 to-transparent blur-3xl" />
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-2xl text-left">
              <div className="mb-6 inline-flex items-center rounded-full border border-border/70 bg-card px-3 py-1 text-sm text-muted-foreground">
                <Sparkles className="mr-2 h-4 w-4" />
                Built for teams and creators
              </div>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Shorten links, secure access, and manage every campaign from one workspace.
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Link Shortener helps you create clean URLs, protect them with Clerk authentication, and keep every link organized in one polished dashboard.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
                  <Button size="lg" className="rounded-full px-6 shadow-sm">
                    Start for free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </SignUpButton>
                <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                  <Button variant="outline" size="lg" className="rounded-full px-6">
                    Sign in
                  </Button>
                </SignInButton>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                No complicated setup — just fast, secure link creation and management.
              </p>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-sm">
              <div className="rounded-[1.75rem] border border-border/60 bg-background p-8">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">Live preview</p>
                  <span className="rounded-full border border-border/70 px-2.5 py-1 text-xs text-muted-foreground">
                    Example
                  </span>
                </div>
                <div className="space-y-5">
                  <div className="rounded-2xl border border-border/70 bg-card/70 p-5">
                    <p className="text-sm text-muted-foreground">Original URL</p>
                    <p className="mt-3 truncate text-sm font-medium text-foreground">
                      https://example.com/products/launch-campaign/overview
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                    <p className="text-sm text-muted-foreground">Short link</p>
                    <p className="mt-3 text-lg font-semibold text-primary">ls.sh/launch</p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-card/70 p-5">
                    <p className="text-sm text-muted-foreground">Why it works</p>
                    <ul className="mt-3 space-y-2 text-sm text-foreground">
                      <li>• Fast, memorable URLs</li>
                      <li>• Secure authentication built in</li>
                      <li>• Clean management interface</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">{feature.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <section className="rounded-[2rem] border border-border/70 bg-card p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-3">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="rounded-3xl border border-border/70 bg-background p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
