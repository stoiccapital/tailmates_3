import ProtectedRoute from '../../components/ProtectedRoute';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Patients - Vet Companion',
  description: 'Manage your veterinary patients and their records.',
};

export default function PatientsPage() {
  return (
    <ProtectedRoute>
      <main className="container mx-auto px-4 py-8">
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Patients</h2>
          {/* TODO: Fetch and display list of patients from Supabase */}
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500 text-center">Patient list coming soon.</p>
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
} 