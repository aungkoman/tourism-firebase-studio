import type {Metadata} from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Wanderlust Myanmar - Discover the Golden Land',
  description: 'Explore Myanmar: Your ultimate guide to destinations, experiences, and travel planning in the Golden Land. Powered by Firebase Studio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-8 fade-in">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
