import { SignIn } from "@clerk/nextjs";
import { clerkAppearance } from "@/app.config";

export default function SignInPage() {
  return (
    <div className="flex justify-center px-6 py-16">
      <SignIn appearance={clerkAppearance} />
    </div>
  );
}
