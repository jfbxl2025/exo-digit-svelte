<script lang="ts">
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();
</script>

<h1>Levels for {data.game.name}</h1>
<ul>
	{#each { length: 8 }, level}
		<li>
			<a href={`/${data.game.name}/${level}`}>go to {level}</a>
		</li>
	{/each}
</ul>
