import './global.css';
import { Toaster } from 'react-hot-toast';
import { Metadata } from 'next';
import { M_PLUS_Rounded_1c } from 'next/font/google';
import { Children } from '@/fe/utils/aliases.types';
import { Header } from '@/fe/components/organisms/header.organism';
import { Footer } from '@/fe/components/organisms/footer.organism';
import { RowAtom } from '@/fe/components/atoms/layout/row.atom';
import { Providers } from '../components/providers/providers';

const rubik = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'CompanyNameHere',
  description: 'Page description',
};

export default async function RootLayout({ children }: { children: Children }) {
  return (
    <html lang="en">
      <head title={'CompanyNameHere'}>
        <title>CompanyNameHere</title>
      </head>
      <body className={`${rubik.className} bg-dominant`}>
        <Providers>
          <Toaster position="bottom-right" reverseOrder={false} />
          <Header />
          <RowAtom className="!items-start !gap-0 overflow-y-scroll no-scrollbar">
            {children}
          </RowAtom>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
