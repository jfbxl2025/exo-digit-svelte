<script>
	let { children } = $props();
</script>

<nav>
	<a href="/">home</a>
	<a href="/levels">levels</a>
</nav>

{@render children()}
