import DashboardLayout from "../../components/layout/dashboard-layout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="rounded-lg bg-white p-6 shadow">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-4">Welcome to your dashboard!</p>
      </div>
    </DashboardLayout>
  );
}