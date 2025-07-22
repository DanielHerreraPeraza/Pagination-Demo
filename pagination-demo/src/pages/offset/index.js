import { useState } from 'react';
import { fetchOffset } from '../../util/api';
import PaginationViewer from '../../components/PaginationViewer';

export default function OffsetPage() {
	const [page, setPage] = useState(0);
	const [size, setSize] = useState(10);
	const [items, setItems] = useState([]);

	const loadData = async () => {
		const data = await fetchOffset(page, size);
		setItems(data);
	};

	return (
		<div className='p-8'>
			<h1 className='text-2xl font-bold mb-4'>Paginación con Offset</h1>
			<div className='mb-4 space-x-4'>
				<label>
					Página:
					<input
						type='number'
						value={page}
						onChange={(e) => setPage(Number(e.target.value))}
						className='ml-2 border px-2 py-1'
					/>
				</label>
				<label>
					Tamaño:
					<input
						type='number'
						value={size}
						onChange={(e) => setSize(Number(e.target.value))}
						className='ml-2 border px-2 py-1'
					/>
				</label>
				<button
					onClick={loadData}
					className='bg-blue-600 text-white px-4 py-2 rounded'
				>
					Buscar
				</button>
			</div>
			<PaginationViewer items={items} />
		</div>
	);
}
