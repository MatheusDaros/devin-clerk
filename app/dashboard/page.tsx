import { currentUser } from "@clerk/nextjs/server";
import { NoteCard } from "@/components/NoteCard";
import { getNotes } from "@/lib/notes";

export default async function DashboardPage() {
  const user = await currentUser();
  const name =
    user?.firstName ?? user?.primaryEmailAddress?.emailAddress.split("@")[0];
  const notes = getNotes();

  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
      <div>
        <h1 className="text-3xl font-bold">
          Welcome back, {name ?? "friend"}!
        </h1>
        <p className="text-black/60">Here are your latest ideas.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </section>
  );
}
