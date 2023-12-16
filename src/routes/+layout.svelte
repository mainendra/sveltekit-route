<script>

    import Counterpage from "../components/counterpage.svelte";

</script>
<ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/settings">Settings</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/product/1">Product</a></li>
</ul>
<Counterpage />
<slot />
