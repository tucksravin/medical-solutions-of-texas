<script lang="ts">
	import { SliceSimulator } from '@slicemachine/adapter-sveltekit/simulator';
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
</script>

<SliceSimulator>
	{#snippet children({ slices }: { slices: any[] })}
		<SliceZone {slices} {components} />
	{/snippet}
</SliceSimulator>
