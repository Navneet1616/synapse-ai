export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard Overview</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="card">Revenue: $5,000</div>
        <div className="card">Users: 1,200</div>
      </div>
    </main>
  );
}