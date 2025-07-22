import { useState } from 'react';
import { fetchKeyset } from '../../util/api';
import PaginationViewer from '../../components/PaginationViewer';

export default function KeysetPage() {
	const [afterId, setAfterId] = useState('');
	const [size, setSize] = useState(10);
	const [items, setItems] = useState([]);

	const loadData = async () => {
		const data = await fetchKeyset(afterId ? Number(afterId) : null, size);
		setItems(data);
	};

	return (
		<div className='p-8'>
			<h1 className='text-2xl font-bold mb-4'>Paginación con Keyset</h1>
			<div className='mb-4 space-x-4'>
				<label>
					ID (afterId):
					<input
						type='number'
						value={afterId}
						onChange={(e) => setAfterId(e.target.value)}
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
					className='bg-purple-600 text-white px-4 py-2 rounded'
				>
					Buscar
				</button>
			</div>
			<PaginationViewer items={items} />
		</div>
	);
}
