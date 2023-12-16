import { writable } from 'svelte/store';
export const count = writable<Record<number, number>>({
	1: 1,
	2: 2,
	3: 3,
});
