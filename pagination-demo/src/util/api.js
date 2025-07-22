const BASE_URL = 'http://localhost:8080/api';

export async function fetchNoPagination() {
	const res = await fetch(`${BASE_URL}/noPagination`);
	return res.json();
}

export async function fetchOffset(page, size) {
	const res = await fetch(`${BASE_URL}/offset?page=${page}&size=${size}`);
	return res.json();
}

export async function fetchCursor(after, size) {
	const url = `${BASE_URL}/cursor?${
		after ? `after=${after}&` : ''
	}size=${size}`;
	const res = await fetch(url);
	return res.json();
}

export async function fetchKeyset(afterId, size) {
	const url = `${BASE_URL}/keyset?${
		afterId ? `afterId=${afterId}&` : ''
	}size=${size}`;
	const res = await fetch(url);
	return res.json();
}
