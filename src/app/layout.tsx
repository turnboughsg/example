import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Container from '../components/container';
import Header from '../components/header';
import Footer from '../components/footer';
import ConfigureAmplifyClientSide from '@/components/ConfigureAmplifyClientSide';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dax\'s Blog',
  description: 'Welcome to Dax\'s blog where we discuss Dax\'s thoughts on the world.',
}

export default function RootLayoutThatConfiguresAmplifyOnTheClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-100 text-zinc-900`}>
        <Container>
          <Header />
          <ConfigureAmplifyClientSide />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
