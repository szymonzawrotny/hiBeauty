import type { Metadata } from "next";
import { Poppins, Montserrat } from 'next/font/google';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "REVIX",
  description: "Revix web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${poppins.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
