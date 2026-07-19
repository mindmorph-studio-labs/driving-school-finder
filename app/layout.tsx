import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { XPProvider } from '@/components/XPProvider';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Jamaica Driving School Finder',
  description: 'A premium, modern directory for driving schools across Jamaica.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#111] antialiased flex flex-col min-h-screen">
        <XPProvider>
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </XPProvider>
      </body>
    </html>
  );
}
