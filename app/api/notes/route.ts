import { auth } from "@clerk/nextjs/server";
import { getNotes } from "@/lib/notes";

export async function GET() {
  const { isAuthenticated } = await auth();
  if (!isAuthenticated) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  return Response.json({ notes: getNotes() });
}
