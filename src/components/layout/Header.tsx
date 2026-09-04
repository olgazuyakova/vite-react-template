import { Link } from 'react-router-dom';
import { URLS } from '@constants/urls';
import LogoIcon from '@svg/oz-logo.svg?react';
import Tools from './Tools';

export default function Header() {
	return (
		<header className="fixed right-0 top-0 left-0 flex justify-between p-4 border-b-1 border-app-gray-300-themed bg-custom">
      <div className="flex gap-4 items-center">
        <Link {...URLS.HOME}><LogoIcon /></Link>
        <div className="text-lg">OZ<span className="text-xs">TECH</span> Consulting</div>
      </div>
      <Tools />
    </header>
	);
}
