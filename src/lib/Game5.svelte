<script lang="ts">
	interface Props {
		eventHandler: (result: boolean) => void;
	}

	let { eventHandler }: Props = $props();

	$effect(() => {
		console.log("on Game5");
		return () => console.log("end game 5");
	});
</script>

<h1>Game 5</h1>

<button onclick={() => eventHandler(true)}>✔️</button>
<button onclick={() => eventHandler(false)}>❌</button>
