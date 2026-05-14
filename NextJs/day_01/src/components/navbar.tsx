// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-white border-b">
      <div className="flex gap-8">
        <Link href="/products" className="font-semibold hover:text-blue-600">Products</Link>
        <Link href="/" className="hover:text-blue-600 text-gray-500 text-sm">Home</Link>
      </div>
      <div className="flex gap-4">
        <Link href="/login" className="px-4 py-2 border rounded-md">Login</Link>
        <Link href="/register" className="px-4 py-2 bg-blue-600 text-white rounded-md">Register</Link>
      </div>
    </nav>
  );
}