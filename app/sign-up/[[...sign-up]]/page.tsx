import { SignUp } from "@clerk/nextjs";
import { clerkAppearance } from "@/app.config";

export default function SignUpPage() {
  return (
    <div className="flex justify-center px-6 py-16">
      <SignUp appearance={clerkAppearance} />
    </div>
  );
}
