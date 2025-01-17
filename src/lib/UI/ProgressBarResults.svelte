<script lang="ts">
	interface Props {
		maxResults: number;
		results: Array<boolean>;
	}
	const textDisplay = "Progress bar Result";

	let { maxResults, results }: Props = $props();
	let rest = $derived(maxResults - results.length);
</script>

<div>
	<p>{textDisplay}</p>
	{#each results as result}
		<span>
			{#if result}
				✔️
			{:else}
				❌
			{/if}
		</span>
	{/each}
	{#each { length: rest }}
		<span>💤</span>
	{/each}
</div>
