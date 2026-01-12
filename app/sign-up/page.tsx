

"use client";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="max-w-md mx-auto p-8 shadow-lg rounded-xl mt-20 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">S'inscrire</h2>
      <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
    </div>
  );
}
