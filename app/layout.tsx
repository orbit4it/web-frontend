import Navbar from '@/components/navbar';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Footer from '@/components/footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
	title: 'ORBIT',
	description: 'Organization of Basic Information Technology ',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={
				`${montserrat.className}`
			}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
