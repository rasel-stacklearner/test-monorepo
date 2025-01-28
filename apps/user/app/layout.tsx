import { Toaster } from '@sl/ui/components/ui/sonner';
import { cn } from '@sl/ui/lib/utils';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('dark w-full', poppins.className)}
        suppressHydrationWarning
      >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
