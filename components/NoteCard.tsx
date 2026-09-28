import type { Note } from "@/lib/notes";

export function NoteCard({ note }: { note: Note }) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <span className="w-fit rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
        #{note.tag}
      </span>
      <h3 className="text-lg font-semibold">{note.title}</h3>
      <p className="text-sm text-black/70">{note.body}</p>
      <p className="mt-auto text-xs text-black/50">by {note.author}</p>
    </article>
  );
}
