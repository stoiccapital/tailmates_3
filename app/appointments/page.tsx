import ProtectedRoute from '../../components/ProtectedRoute';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Appointments - Vet Companion',
  description: 'Schedule and manage veterinary appointments.',
};

export default function AppointmentsPage() {
  return (
    <ProtectedRoute>
      <main className="container mx-auto px-4 py-8">
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Appointments</h2>
          {/* TODO: Add calendar UI and fetch appointments from Supabase */}
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500 text-center">Appointments calendar coming soon.</p>
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
} 