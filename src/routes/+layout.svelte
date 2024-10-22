<script lang="ts">
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import { fly, fade, scale } from 'svelte/transition';
	import msotLogo from "$lib/assets/icons/logos/msot_logo.svg"
	import sdvosbLogo from "$lib/assets/icons/logos/sdvosb-white.svg"
	import "../app.css";
  import ContentWidth from '$lib/components/ContentWidth/ContentWidth.svelte';
  import { onMount } from 'svelte';
  import OnMount from '$lib/components/OnMount.svelte';
  import { onNavigate } from '$app/navigation';

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

	let main:HTMLElement | null;
	let isScrolledToTop = true;

	const handleScroll = () =>{
		if(main){
			if(main.getBoundingClientRect().top<-100){
				isScrolledToTop = false;
			}else{
				isScrolledToTop = true;
			}
			console.log("scrolled " + main.getBoundingClientRect().top)
		}
		
	}


  let isMounted = false;
  let isTransitioning = true;


  onMount(()=>{
	isMounted = true;

	window.addEventListener('scroll', handleScroll)

	setTimeout(()=>{
		isTransitioning = false;
	}, 2400)
  })

  onNavigate(()=>{
	isTransitioning = true;

	setTimeout(()=>{
		isTransitioning = false;
	}, 1050)
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

<!-- <button class="bg-black p-2 bump text-white z-50 fixed top-12 right-12" on:click={()=>isTransitioning=!isTransitioning}> {isTransitioning?"transitioning":" not transitioning"}</button> -->

{#if isTransitioning}
	<div class="bg-[#140F09] z-40 fixed w-screen h-screen top-0 left-0" out:fade={{duration:700, delay:350}} ></div>
{/if}

	{#if viewportWidth<1550}
		<OnMount>
			<div 
				in:fade={{duration:700}}
				class="fixed z-40 top-4 left-0 w-40 transition-transform transform-gpu duration-700 {isTransitioning?"delay-100 pointer-events-none":""}" 
				style={isTransitioning?"transform:translate( calc(50vw - 50%), calc(50vh - 50% - 16px)) scale(200%)":"transform:translate(4vw)"}
			>		
				<a href="/" class=" w-fit inline-block relative transition duration-300 ease-in {!isScrolledToTop&&!isTransitioning?"md:-translate-y-[112px]":""}"><img class="h-full {isTransitioning ? "pulse-always":""}" src={msotLogo} alt="msot logo"/></a>
			</div>
		</OnMount>
	{:else}
		<OnMount>
			<div 
				in:fade={{duration:700}}
				class="fixed z-40 top-4 left-0 w-40 transition-transform transform-gpu duration-700 {isTransitioning?"delay-100 pointer-events-none":""}" 
				style={isTransitioning?"transform:translate( calc(50vw - 50%), calc(50vh - 50% - 16px)) scale(200%)":"transform:translate(calc( (100vw - 1440px) / 2 ))"}
			>		
				<a href="/" class=" w-fit inline-block relative transition duration-300 ease-in {!isScrolledToTop&&!isTransitioning?"md:-translate-y-[112px]":""}"><img class="h-full transition duration-[1700ms] {isTransitioning ? "pulse-always":""}" src={msotLogo} alt="msot logo"/></a>
			</div>
		</OnMount>
	{/if}
	
	
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

<main bind:this={main}>
	<nav class="nav-text fixed top-0 w-full h-28 py-4 z-20 transition duration-300 ease-in {isScrolledToTop?"":"md:-translate-y-full"}">
		<ContentWidth class="h-full flex flex-row justify-between items-center">
		<div/>
			{#if viewportWidth>768}
			<div class="flex flex-row items-center justify-between gap-12 transition-transform ">
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

	<footer class=" h-56 md:h-48 py-6 bg-[#140F09]">
		<ContentWidth class="flex flex-row justify-between h-36 sm:h-full">
			<div class="flex flex-col justify-between items-start">
				<a href="/" class="bump self-start h-20 relative"><img class="h-full transitionn duration-700 ease-fast-slow delay-500" src={msotLogo} style="transform-origin:top left" alt="msot logo"/></a>
				{#if viewportWidth > 560}
				<div class="label text-white ">©2024 - Medical Solutions of Texas  |   All Rights Reserved</div>
				{/if}
			
			</div>
			<img src={sdvosbLogo} alt="sdvosb logo" class="h-24"/>
		</ContentWidth>
		{#if viewportWidth <= 560}
				<div class="label text-white w-full text-center px-2">©2024 - Medical Solutions of Texas  <br />   All Rights Reserved</div>
		{/if}
	</footer>
</main>
<PrismicPreview {repositoryName} />
