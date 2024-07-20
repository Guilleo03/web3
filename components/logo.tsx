import Link from "next/link";

export function Logo() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block font-bold text-2xl">
          Food<span className="text-primary">AI</span>
        </span>
      </Link>
    </div>
  );
}
