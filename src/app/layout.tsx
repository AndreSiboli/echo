import { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import '@/styles/pages/globals.scss';

import MainContainer from '@/components/layout/MainContainer';

const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Echo',
  description: 'This is a fictional site about photograph.',
  creator: 'André Siboli',
  keywords: 'fashion, clothes, woman, women, man, mens, photograph, camera, photo',
  icons: {
    icon: 'public/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
