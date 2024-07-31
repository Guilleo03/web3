import Link from "next/link";

export function Logo() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block font-bold text-2xl">
          Food
          <span className="bg-gradient-to-r from-primary to-[#29c233] inline-block text-transparent bg-clip-text dark:from-[#29c233] dark:to-[#29c233]">
            AI
          </span>
        </span>
      </Link>
    </div>
  );
}
