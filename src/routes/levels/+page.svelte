<h1>Levels</h1>

<ul>
	{#each { length: 8 }, level}
		<li>
			<a href={`/levels/level?steps=${level}`}>level {level}</a>
		</li>
	{/each}
</ul>
