import notes from "@/data/notes.json";

export type Note = {
  id: string;
  title: string;
  body: string;
  tag: string;
  author: string;
};

export function getNotes(): Note[] {
  return notes;
}
