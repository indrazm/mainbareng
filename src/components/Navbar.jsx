"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@heroui/react";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
  const pathname = usePathname();

  const isPublicPage = ["/", "/login", "/register"].includes(pathname);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md px-6 py-4 flex items-center justify-between shadow-sm">
      <Link href="/" className="text-xl font-bold text-blue-600">
        MainBareng
      </Link>

      {isPublicPage ? (
        <div className="space-x-2">
          <Link href="/login">
            <Button size="sm" variant="ghost">
              Log In
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm" color="primary">
              Sign Up
            </Button>
          </Link>
        </div>
      ) : (
        <LogoutButton />
      )}
    </nav>
  );
}
