<script lang="ts">
	interface Props {
		eventHandler: (result: boolean) => void;
	}

	let { eventHandler }: Props = $props();

	$effect(() => {
		console.log("on Game3");
		return () => console.log("end game 3");
	});
</script>

<h1>Game 3</h1>

<button onclick={() => eventHandler(true)}>✔️</button>
<button onclick={() => eventHandler(false)}>❌</button>
