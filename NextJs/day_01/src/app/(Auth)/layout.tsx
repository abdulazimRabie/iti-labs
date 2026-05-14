import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full flex flex-col">
      <nav className="flex items-center justify-between p-6 bg-white border-b shadow-sm">
        <div className="flex gap-8">
          <Link
            href="/login"
            className="px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Register
          </Link>
        </div>
        <Link
          href="/"
          className="font-semibold hover:text-blue-600 transition-colors"
        >
          Home
        </Link>
      </nav>
      <main className="flex-1">{children}</main>
    </div>
  );
}
