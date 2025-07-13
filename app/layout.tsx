import { Inter, Orbitron, JetBrains_Mono } from '@next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata = {
  title: 'Web Dev by Cam - Desarrollo Web y Software a Medida',
  description: 'Servicios profesionales de desarrollo web con WordPress, código puro y software a medida. Hosting, dominios y más.',
  keywords: ['desarrollo web', 'WordPress', 'software a medida', 'hosting', 'dominios', 'Next.js'],
  openGraph: {
    title: 'Web Dev by Cam',
    description: 'Desarrollo web y software a medida con un enfoque en calidad y SEO.',
    url: 'https://yourdomain.com', // Replace with your Vercel domain
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${orbitron.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}