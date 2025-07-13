import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios - Web Dev by Cam',
  description: 'Desarrollo web con WordPress, código puro y software a medida para tus necesidades.',
};

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-cosmic-purple p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-orbitron text-energy-cyan">Web Dev by Cam</h1>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-mystical-pink">Inicio</Link></li>
            <li><Link href="/services" className="hover:text-mystical-pink">Servicios</Link></li>
            <li><Link href="/products" className="hover:text-mystical-pink">Productos</Link></li>
            <li><Link href="/portfolio" className="hover:text-mystical-pink">Portafolio</Link></li>
            <li><Link href="/blog" className="hover:text-mystical-pink">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-mystical-pink">Contacto</Link></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4 flex-grow">
        <section className="py-16">
          <h2 className="text-4xl font-bold mb-4 text-mystical-gold text-center">Nuestros Servicios</h2>
          <ul className="list-disc list-inside text-neutral-gray max-w-2xl mx-auto">
            <li>Desarrollo web con WordPress</li>
            <li>Desarrollo web con código puro (HTML, CSS, JS, React, etc.)</li>
            <li>Software a medida para empresas</li>
            <li>Optimización SEO avanzada</li>
          </ul>
        </section>
      </main>
      <footer className="bg-cosmic-violet p-4 text-center">
        <p className="text-neutral-gray">&copy; 2025 Web Dev by Cam. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}