<script lang="ts">
	interface Props {
		eventHandler: (result: boolean) => void;
	}

	let { eventHandler }: Props = $props();

	$effect(() => {
		console.log("on Game4");
		return () => console.log("end game 4");
	});
</script>

<h1>Game 4</h1>

<button onclick={() => eventHandler(true)}>✔️</button>
<button onclick={() => eventHandler(false)}>❌</button>
