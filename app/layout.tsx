import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Provider from '@/components/Provider';
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';
import { EdgeStoreProvider } from '../lib/edgestore';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'ConNext',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className='root'>
                    <Provider>
                        <EdgeStoreProvider >
                            <TopNav />
                            <div className='childrenCont'>
                                <div className='children'>
                                    {children}
                                </div>
                            </div>
                            <Footer />
                        </EdgeStoreProvider>
                    </Provider>
                </main>
            </body>
        </html>
    );
}
