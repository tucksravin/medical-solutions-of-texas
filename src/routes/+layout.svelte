<script lang="ts">
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import { fly, fade } from 'svelte/transition';
	import msotLogo from "$lib/assets/icons/logos/msot_logo.svg"
	import sdvosbLogo from "$lib/assets/icons/logos/sdvosb-white.svg"
	import "../app.css";
  import ContentWidth from '$lib/components/ContentWidth/ContentWidth.svelte';
  import { onMount } from 'svelte';

  let isOverlayVisible = false;
  let viewportWidth:number;

  const NAV_LINKS=[
        {
            label:"About",
            href:"/about"
        },
        {
            label:"Partners",
            href:"/partners"
        },
        {
            label:"Process",
            href:"/process"
        },
        {
            label:"Rep Login",
            href:"/rep-login"
        },
        {
            label:"Contact",
            href:"/contact"
        },

    ];

  let isMounted = false;
  onMount(()=>{
	isMounted = true;
  })
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
	<meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no">
</svelte:head>

<svelte:window bind:innerWidth={viewportWidth} />

{#if isOverlayVisible}
<div class="w-screen h-screen fixed bg-dark z-30" transition:fly={{y:"-100%"}}>
	<ContentWidth class="flex flex-col items-center justify-center gap-12 h-full">
    {#each NAV_LINKS as item}
        <a on:click={()=>isOverlayVisible=false} href={item.href} class="text-light text-2xl">{item.label}</a>
    {/each}

    <button class="absolute top-5 right-5 opacity-60 hover:opacity-100 transition-all z-40" on:click={()=>isOverlayVisible=false}>
        <div in:fade={{delay: 1200}} out:fade class="text-white">
        <i class="fa-sharp fa-thin fa-close fa-3x" />
        </div>
      
    </button>
	</ContentWidth>
</div>
{/if}

<main>
	<nav class="nav-text fixed top-0 w-full h-28 py-4 z-20">
		<ContentWidth class="h-full flex flex-row justify-between items-center">
			<a href="/" class="bump self-start h-full relative"><img class="h-full transitionn duration-700 ease-fast-slow delay-500 {isMounted?"scale-[1]":"scale-[1.3333]"}" src={msotLogo} style="transform-origin:top left" alt="msot logo"/></a>
			{#if viewportWidth>768}
			<div class="hidden md:flex flex-row items-center justify-between gap-12">
				{#each NAV_LINKS as item}
					<a href={item.href}>{item.label}</a>
				{/each}
			</div>
			{:else}
				<button on:click={()=>isOverlayVisible=true}><i class="text-[#998B6A] md:hidden fa-sharp fa-thin fa-bars fa-3x"/></button>
			{/if}
		</ContentWidth>
	</nav>
	
	<slot />
	<footer class="h-48 py-4">
		<ContentWidth class="flex flex-row justify-between h-full">
			<div class="flex flex-col justify-between items-start">
				<a href="/" class="bump self-start h-20 relative"><img class="h-full transitionn duration-700 ease-fast-slow delay-500" src={msotLogo} style="transform-origin:top left" alt="msot logo"/></a>

				<div class="label text-white">©2024 - Medical Solutions of Texas  |   All Rights Reserved</div>
			
			</div>
			<img src={sdvosbLogo} alt="sdvosb logo" class="h-24"/>
		</ContentWidth>
	</footer>
</main>
<PrismicPreview {repositoryName} />
