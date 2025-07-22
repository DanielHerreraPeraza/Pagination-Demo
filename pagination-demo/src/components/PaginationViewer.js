import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function PaginationViewer({ items }) {
	return (
		<div>
			<p className='mt-2'>Total devueltos: {items.length}</p>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell align='right'>Id</TableCell>
							<TableCell align='right'>Name</TableCell>
							<TableCell align='right'>CreatedAt</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{items.map((row) => (
							<TableRow
								key={row.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell align='right'>{row.id}</TableCell>
								<TableCell align='right'>{row.name}</TableCell>
								<TableCell align='right'>{row.createdAt}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
