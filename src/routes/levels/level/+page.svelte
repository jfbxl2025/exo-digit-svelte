<script lang="ts">
	import ProgressBarResults from "$lib/UI/ProgressBarResults.svelte";

	let steps = $state(0);

	const results: Array<boolean> = $state([]);

	$effect(() => {
		steps = Number(new URL(window.location.href).searchParams.get("steps"));
	});
	function setNextResult(result: boolean) {
		results.push(result);
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
	documentation
</p>
<ProgressBarResults {results} maxResults={steps} />

<button onclick={() => setNextResult(true)}>✔️</button>
<button onclick={() => setNextResult(false)}>❌</button>
