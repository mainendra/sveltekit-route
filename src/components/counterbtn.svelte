<script lang="ts">
    import { count } from "../store";

    export let pageNo: number;

    function focus(e: HTMLButtonElement) {
        e.focus();
    }

</script>

<button use:focus on:click={() => count.set({ ...$count, [pageNo]: ($count[pageNo] ?? 0) + 1 })}>Count {$count[pageNo] ?? 0}</button>
