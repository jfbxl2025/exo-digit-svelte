<script lang="ts">
	const games = ["game1", "game2", "game3", "game4"];
</script>

<h1>home</h1>
<p>this is the home page.</p>
<h2>Jeux</h2>
<ul>
	{#each games as game}
		<li>
			<a href={`/${game}/levels`}>{game}</a>
		</li>
	{/each}
</ul>
