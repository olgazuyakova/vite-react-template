import ReactIcon from '@svg/react.svg?react';
import GithubIcon from '@svg/github.svg?react';
import ViteIcon from '@svg/vite.svg?react';
import TailwindIcon from '@svg/tailwind.svg?react';
import FigmaIcon from '@svg/figma.svg?react';
import CloudflareIcon from '@svg/cloudflare.svg?react';
import NodejsIcon from '@svg/nodejs.svg?react';
import TanstackIcon from '@svg/tanstack.svg?react';
import MongodbIcon from '@svg/mongodb.svg?react';

export default function Tools() {
	return (
    <div className="flex gap-4 items-center pe-4">
      <a href="https://tanstack.com" target="_blank" rel="noopener noreferrer">
        <TanstackIcon className="h-6" />
			</a>
      <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer">
        <CloudflareIcon className="h-6" />
			</a>
      <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
        <NodejsIcon className="h-6" />
			</a>
      <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">
        <MongodbIcon className="h-6" />
			</a>
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <ReactIcon className="h-6" />
			</a>
      <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
        <TailwindIcon className="h-6" />
			</a>
      <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
        <ViteIcon className="h-6" />
			</a>
      <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
        <FigmaIcon className="h-6" />
			</a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <GithubIcon className="h-6 fill-app-black-themed" />
			</a>
		</div>
	);
}
