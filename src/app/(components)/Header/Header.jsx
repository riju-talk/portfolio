import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header className="text-white py-6 mt-9">
      <div className="max-w-3xl mx-auto px-4">
        <nav className="flex justify-start items-center space-x-12">
          <Link href="/" className="text-gray-300 hover:text-white text-lg uppercase tracking-wider font-bold">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white text-lg uppercase tracking-wider font-bold">
            About
          </Link>
        </nav>
        <div className="h-1 w-full mt-4 bg-gray-300"></div>
      </div>
    </header>
  );
}