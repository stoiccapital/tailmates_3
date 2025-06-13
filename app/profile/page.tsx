import ProtectedRoute from '../../components/ProtectedRoute';

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <section>
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        {/* TODO: Add user profile form and settings */}
        <div className="text-gray-500">Profile settings coming soon.</div>
      </section>
    </ProtectedRoute>
  );
} 