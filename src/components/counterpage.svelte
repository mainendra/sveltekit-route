<script lang="ts">
    import { count } from "../store";

    let pageNo: number = 1;;

</script>

<input type="number" bind:value={pageNo}>
<button on:click={() => count.set({ ...$count, [pageNo]: ($count[pageNo] ?? 0) + 1 })}>Count {$count[pageNo] ?? 0}</button>
