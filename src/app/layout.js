import '@/styles/globals.css';
import { Inter } from 'next/font/google';

// Absolute imports for components used globally
import Dashboard from '@/dashboard/dashboard';
// import Sidebar from '@/components/layout/Sidebar.jsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Next.js App',
  description: 'The root application layout.',
};

// **CRITICAL FIX:** This file MUST include <html> and <body> tags.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          
          {/* NOTE: You probably DON'T want the Navbar and Sidebar 
             on every page (like login or landing pages).
             If you ONLY want them on /dashboard, remove them here 
             and rely on the Nested Layout below.
          */}
          {/* {children} is all the content, including the DashboardLayout */}
          {children} 
        </div>
      </body>
    </html>
  );
}