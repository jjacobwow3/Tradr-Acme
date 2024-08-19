import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

const lusitana = Lusitana({
    subsets: ['latin'], // You can specify the subsets you need
    weight: ['400', '700'], // Optional: specify the font weights you want to use
  });