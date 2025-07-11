import RegisterForm from "@/components/RegisterForm";
import { Card } from "@heroui/react";

export default function RegisterPage() {
  return (
    <Card className="max-w-md mx-auto mt-24 p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">Register</h1>
      <RegisterForm />
    </Card>
  );
}
