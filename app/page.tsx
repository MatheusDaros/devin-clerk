import Link from "next/link";
import { appConfig } from "@/app.config";

const highlights = [
  { emoji: "🎟️", text: "Eventos de qualquer lugar do mundo" },
  { emoji: "🎯", text: "Filtrados pelo que te interessa" },
  { emoji: "🆓", text: "Grátis pra usar" },
];

export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-24 text-center">
      <span className="text-6xl" aria-hidden>
        {appConfig.emoji}
      </span>
      <h1 className="text-5xl font-bold tracking-tight">{appConfig.name}</h1>
      <p className="max-w-xl text-lg text-black/70">{appConfig.description}</p>
      <ul className="flex flex-wrap justify-center gap-3 text-sm">
        {highlights.map((item) => (
          <li
            key={item.text}
            className="rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5"
          >
            <span aria-hidden>{item.emoji}</span> {item.text}
          </li>
        ))}
      </ul>
      <Link
        href="/dashboard"
        className="rounded-full bg-accent px-6 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
      >
        Quero acesso antecipado →
      </Link>
      <p className="text-sm text-black/50">
        Crie sua conta pra acompanhar o lançamento e ver o que vem por aí.
      </p>
    </section>
  );
}
