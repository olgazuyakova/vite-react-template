import ThemeToggle from '@shared/ThemeToggle';

export default function Sidebar() {
	return (
		<div className="fixed w-23 left-0 top-23 bottom-9 border-r border-t border-app-gray-300-themed bg-custom">
      <ThemeToggle />
		</div>
	);
}
