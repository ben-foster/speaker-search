import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
	return (
		<Link href="/" className="flex items-center">
			<Image
				src="/logo.png"
				alt="Speaker Search"
				width={160}
				height={40}
				className="h-10 w-auto"
			/>
		</Link>
	);
}
