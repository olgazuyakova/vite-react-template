import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ThemeToggle from '@shared/ThemeToggle';

// Header is 92px (-23)
// Footer is 36px (-9)
export default function Layout() {
	return (
		<>
			<Header />
			<main className="mx-auto w-full flex flex-grow p-22 pt-30">
				<Outlet />
        <ThemeToggle />
			</main>
			<Footer />
		</>
	);
}
