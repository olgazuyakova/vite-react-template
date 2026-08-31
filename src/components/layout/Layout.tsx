import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// Header is 92px (-23)
// Footer is 36px (-9)
export default function Layout() {
	return (
		<>
			<Header />
			<main className="mx-auto w-full p-20 pt-30">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
