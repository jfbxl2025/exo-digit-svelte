<script lang="ts">
	import ProgressBarResult from "$lib/UI/ProgressBarResults.svelte";
	let { data } = $props();
	let steps = $state(data.game.steps);

	const results: Array<boolean> = $state([]);

	// $effect(() => {
	// 	steps = Number(new URL(window.location.href).searchParams.get("steps"));
	// });

	function setNextResult(result: boolean) {
		results.push(result);
	}
</script>

<data.component eventHandler={setNextResult} />
<ProgressBarResult {results} maxResults={steps} />
<div>level: {data.level}</div>

<!-- <button onclick={() => setNextResult(true)}>✔️</button> -->
<!-- <button onclick={() => setNextResult(false)}>❌</button> -->
