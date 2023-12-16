// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface PageState {
			opened?: boolean,
			pageNo?: number
		}
		// interface Platform {}
	}
}

export {};
