import Link from 'next/link';

export default function Home() {
	return (
		<div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-50'>
			<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
				<h1 className='text-4xl font-bold text-black-600'>Demo Paginación</h1>

				<ul className='space-y-4 w-full max-w-xs'>
					<li>
						<Link href='/no-pagination'>1. Sin Paginación</Link>
					</li>
					<li>
						<Link href='/offset'>2. Paginación con Offset</Link>
					</li>
					<li>
						<Link href='/cursor'>3. Paginación con Cursor</Link>
					</li>
					<li>
						<Link href='/keyset'>4. Paginación con Keyset</Link>
					</li>
				</ul>
			</main>
		</div>
	);
}
