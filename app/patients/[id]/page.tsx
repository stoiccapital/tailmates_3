export default function PatientDetailPage({ params }: { params: { id: string } }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Patient Details</h2>
      {/* TODO: Fetch and display details for patient with ID: {params.id} from Supabase */}
      <div className="text-gray-500">Patient detail view coming soon.</div>
    </section>
  );
} 