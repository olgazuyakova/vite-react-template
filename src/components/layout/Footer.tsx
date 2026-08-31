import { Link } from 'react-router-dom';
import { URLS } from '@constants/urls';

export default function Footer() {
	return (
		<footer className="fixed right-0 bottom-0 left-0 flex justify-between text-sm py-2 px-6 border-t-1 border-gray-300 dark:border-gray-600 bg-app-white-themed">
      <span>© 2026 OZ<span className="text-[10px]">TECH</span> Consulting, Inc.</span>
      <Link {...URLS.PRIVACY}>Privacy Policy</Link>
      <Link {...URLS.TERMS}>Terms of Use</Link>
      <Link {...URLS.CONTACT}>Contact Us</Link>
      <Link {...URLS.ACCESSIBILITY}>Accessibility Statement</Link>
    </footer>
	);
}
