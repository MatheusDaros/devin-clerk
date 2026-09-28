import { NoteCard } from "@/components/NoteCard";
import { getNotes } from "@/lib/notes";

export default function DashboardPage() {
  const notes = getNotes();

  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
      <div className="rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
        <strong>Heads up:</strong> this board is supposed to be private, but anyone
        with the link can see it right now. Your job today: lock it down with Clerk.
      </div>
      <div>
        <h1 className="text-3xl font-bold">Your board</h1>
        <p className="text-black/60">Welcome back! Here are your latest ideas.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </section>
  );
}
