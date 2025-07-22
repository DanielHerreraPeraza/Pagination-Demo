import { useState } from 'react';
import { fetchCursor } from '../../util/api';
import PaginationViewer from '../../components/PaginationViewer';

export default function CursorPage() {
	const [after, setAfter] = useState('2020-01-01T00:01:00');
	const [size, setSize] = useState(10);
	const [items, setItems] = useState([]);

	const loadData = async () => {
		const data = await fetchCursor(after || null, size);
		setItems(data);
	};

	return (
		<div className='p-8'>
			<h1 className='text-2xl font-bold mb-4'>Paginación con Cursor</h1>
			<div className='mb-4 space-x-4'>
				<label>
					Timestamp (after):
					<input
						type='text'
						value={after}
						onChange={(e) => setAfter(e.target.value)}
						placeholder='e.g. 2024-07-22T10:00:00Z'
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
					className='bg-green-600 text-white px-4 py-2 rounded'
				>
					Buscar
				</button>
			</div>
			<PaginationViewer items={items} />
		</div>
	);
}
