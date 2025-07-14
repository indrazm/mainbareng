"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/actions/registerUser";
import { Card, Input, Button } from "@heroui/react";

export default function RegisterForm() {
  const router = useRouter();
  const initialState = { success: false, error: null };

  async function handleRegister(_, formData) {
    try {
      await registerUser(formData);
      router.push("/login");
      return { success: true, error: null };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  const [state, formAction] = useActionState(handleRegister, initialState);

  return (
    <Card className="w-full max-w-md mx-auto">
      <form action={formAction} className="space-y-2 p-4">
        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        <Input
          isRequired
          errorMessage="Please enter your password"
          label="Password"
          name="password"
          placeholder="Enter your password"
          type="password"
        />
        <Input
          label="First Name"
          name="first_name"
          placeholder="Enter your first name"
          type="text"
        />
        <Input
          label="Last Name"
          name="last_name"
          placeholder="Enter your last name"
          type="text"
        />
        <Button type="submit" color="primary" className="w-full">
          Register
        </Button>

        {state.error && (
          <p className="text-sm text-red-600 text-center">{state.error}</p>
        )}
      </form>
    </Card>
  );
}
