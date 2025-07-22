import { useState } from 'react';
import { fetchNoPagination } from '../../util/api';
import PaginationViewer from '../../components/PaginationViewer';

export default function NoPaginationPage() {
	const [items, setItems] = useState([]);

	const loadData = async () => {
		const data = await fetchNoPagination();
		setItems(data);
	};

	return (
		<div className='p-8'>
			<h1 className='text-2xl font-bold mb-4'>Sin Paginación</h1>
			<div className='mb-4 space-x-4'>
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
