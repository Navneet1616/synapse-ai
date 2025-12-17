import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';

// Absolute imports for components used globally
// import Dashboard from '@/dashboard/dashboard';
// import Sidebar from '@/components/layout/Sidebar.jsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Synapse AI',
  description: 'Your AI-Powered Productivity Companion',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          {children} 
        </div>
      </body>
    </html>
  );
}