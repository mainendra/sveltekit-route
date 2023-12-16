<script lang="ts">
    import { preloadData, pushState, goto } from '$app/navigation';
    import { page } from '$app/stores';
    import Product from '../product/[id]/+page.svelte';

    async function openProductPage(e: MouseEvent & { currentTarget: HTMLAnchorElement }) {
        // bail if opening a new tab, or we're on too small a screen
        if (e.metaKey || e.ctrlKey) return;

        const { href } = e.currentTarget;

        // run `load` functions (or rather, get the result of the `load` functions
        // that are already running because of `data-sveltekit-preload-data`)
        const result = await preloadData(href);

        if (result.type === 'loaded' && result.status === 200) {
            pushState(href, { opened: true });
        } else {
            // something bad happened! try navigating
            goto(href);
        }
    }

    $: console.log($page);
</script>

<h1>Settings</h1>
<a href="/product/1" on:click|preventDefault={openProductPage}>Child product</a>

{#if $page.state.opened}
    <Product data={{ pageNo: 1 }} />
{/if}
