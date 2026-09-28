import { appConfig } from "@/app.config";
import { FeatureCard } from "@/components/FeatureCard";

export default function DashboardPage() {
  const [nextFeature] = appConfig.upcomingFeatures;

  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
      <div className="rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
        <strong>Heads up:</strong> this page is supposed to be for signed-in
        users only, but anyone with the link can see it right now. Your job
        today: lock it down with Clerk.
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-4xl" aria-hidden>
          🚧
        </span>
        <h1 className="text-3xl font-bold">Welcome!</h1>
        <p className="text-lg text-black/70">
          {appConfig.name} is coming soon. You&apos;re on the early-access list.
          Here&apos;s what we&apos;re building next:
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {appConfig.upcomingFeatures.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
      {nextFeature && (
        <div className="rounded-2xl border border-dashed border-accent/40 bg-accent/5 px-5 py-4 text-sm">
          <strong className="text-accent">Keep building:</strong> open Devin and
          ask it to &ldquo;Build &lsquo;{nextFeature.title}&rsquo; from the
          Coming soon page.&rdquo;
        </div>
      )}
    </section>
  );
}
