
"use client";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="max-w-md mx-auto p-8 shadow-lg rounded-xl mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Connexion</h2>
      <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
    </div>
  );
}
