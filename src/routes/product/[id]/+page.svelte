<script lang="ts">
    import { preloadData, pushState, goto } from '$app/navigation';
    import { page } from '$app/stores';
    import Counterbtn from '../../../components/counterbtn.svelte';
    import type { PageData } from './$types';

    export let data: PageData = { pageNo: 1 };

    let pageLink = `/product/${data.pageNo + 1}`;

    $: showChildPage = $page.state.pageNo && $page.state.pageNo !== data.pageNo;

    async function openProductPage(e: MouseEvent & { currentTarget: HTMLAnchorElement }) {
        // bail if opening a new tab, or we're on too small a screen
        if (e.metaKey || e.ctrlKey) return;

        const { href } = e.currentTarget;

        // run `load` functions (or rather, get the result of the `load` functions
        // that are already running because of `data-sveltekit-preload-data`)
        const result = await preloadData(href);

        if (result.type === 'loaded' && result.status === 200) {
            pushState(href, { opened: true, ...result.data });
        } else {
            // something bad happened! try navigating
            goto(href);
        }
    }

    $: console.log($page.state.pageNo, data.pageNo);
</script>

<div class={showChildPage ? 'hidden' : ''}>
    <h1>Product page: {data.pageNo}</h1>
    <a href={pageLink} on:click|preventDefault={openProductPage}>Child product</a>
    <br/>
    <br/>
    <Counterbtn pageNo={data.pageNo} />
</div>

{#if showChildPage}
    <svelte:self data={{ pageNo: data.pageNo + 1 }} />
{/if}

<style>
    .hidden {
        visibility: hidden;
    }
    div {
        position: absolute;
        background-color: white;
    }
</style>
