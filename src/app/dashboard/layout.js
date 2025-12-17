// src/app/dashboard/layout.js
import Navigationbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column min-vh-100">
        <Navigationbar />
        <main className="p-4 bg-light flex-grow-1">
          {children}
        </main>
      </div>
    </div>
  );
}