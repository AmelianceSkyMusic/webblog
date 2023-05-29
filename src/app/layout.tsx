import { Metadata } from 'next/types';
import './globals.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ameliance SkyMusic',
	description: 'Ameliance SkyMusic template',
	icons: { icon: '/favicon.svg' },
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
