import Link from "next/link";
import { appConfig } from "@/app.config";

export function Header() {
  return (
    <header className="border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span aria-hidden>{appConfig.emoji}</span>
          {appConfig.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/dashboard" className="hover:text-accent">
            Dashboard
          </Link>
          {/* AUTH CONTROLS GO HERE */}
        </nav>
      </div>
    </header>
  );
}
