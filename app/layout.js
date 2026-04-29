import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';


export const metadata = {
  title: 'Sidkron Cyber Security',
  description: 'Segurança cibernética com gestão contínua de risco',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}