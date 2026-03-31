import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/[0.06] dark:border-white/[0.06] bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-8 py-5">
        <Link href="/" className="group flex items-center">
          <span className="text-sm font-bold tracking-[0.2em] text-gray-900 dark:text-white transition-opacity duration-200 group-hover:opacity-70">
            Payment Demos
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
