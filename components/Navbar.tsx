import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow mb-4">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">Vet Companion</Link>
        <div className="space-x-4">
          <Link href="/patients" className="hover:text-blue-500">Patients</Link>
          <Link href="/appointments" className="hover:text-blue-500">Appointments</Link>
          <Link href="/profile" className="hover:text-blue-500">Profile</Link>
        </div>
        {/* TODO: Show login/logout based on auth state */}
      </div>
    </nav>
  );
} 