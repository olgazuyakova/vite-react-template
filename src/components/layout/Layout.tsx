import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

// Header is 92px (-23)
// Footer is 36px (-9)
export default function Layout() {
	return (
		<>
			<Header />
			<Sidebar />
			<main className="mx-auto w-full flex flex-grow p-30 pb-18 bg-app-white-themed">
				<div className="max-w-220">
					<Outlet />
				</div>
			</main>
			<Footer />
		</>
	);
}
