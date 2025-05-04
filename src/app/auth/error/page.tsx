import { Button } from "@/once-ui/components/Button";
import Link from "next/link";

export default function AuthError() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 rounded-lg border p-8 shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-destructive">
            Authentication Error
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            There was an error signing in. Please try again.
          </p>
        </div>
        <div className="mt-8 text-center">
          <Button variant="tertiary" href="/auth/signin">
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
} 