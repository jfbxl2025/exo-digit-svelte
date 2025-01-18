<script lang="ts">
	interface Props {
		eventHandler: (result: boolean) => void;
	}

	let { eventHandler }: Props = $props();

	$effect(() => {
		console.log("on Game2");
		return () => console.log("end game 2");
	});
</script>

<h1>Game 2</h1>

<button onclick={() => eventHandler(true)}>✔️</button>
<button onclick={() => eventHandler(false)}>❌</button>
