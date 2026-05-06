<script lang="ts">
	import { onMount } from 'svelte'
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let isMounted = $state(false)

	onMount(() => {
		isMounted = true
	})
</script>

{#if isMounted}
	{@render children?.()}
{/if}