import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Button } from "@/once-ui/components/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 rounded-lg border p-8 shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to your account
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <Button
            variant="secondary"
            className="w-full"
            href="/api/auth/signin/google"
          >
            <FcGoogle className="mr-2 h-5 w-5" />
            Continue with Google
          </Button>
          <Button
            variant="secondary"
            className="w-full"
            href="/api/auth/signin/apple"
          >
            <FaApple className="mr-2 h-5 w-5" />
            Continue with Apple
          </Button>
        </div>
      </div>
    </div>
  );
} 