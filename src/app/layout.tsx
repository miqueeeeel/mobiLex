
import type {Metadata} from 'next';
import { Inter } from 'next/font/google' // Using Inter as a professional sans-serif font
import './globals.css';
import { cn } from "@/lib/utils";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'LexMobilis - Asesoría Legal',
  description: 'Asesoría legal experta en Madrid. LexMobilis.',
  icons: { // Optional: Add a simple icon placeholder
    icon: "/favicon.ico", // You would need to create this file
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning> {/* Set language to Spanish */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster /> {/* Add Toaster component */}
      </body>
    </html>
  );
}
