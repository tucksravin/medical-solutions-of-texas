<script lang="ts">
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { repositoryName } from '$lib/prismicio';
	import { fly, fade, scale } from 'svelte/transition';
	import msotLogo from "$lib/assets/icons/logos/msot_logo.svg"
	import msotLogoSand from "$lib/assets/icons/logos/msot_logo_sand.svg"
	import msotLogoKhaki from "$lib/assets/icons/logos/msot_khaki.png"
	import "../app.css";
	import ContentWidth from '$lib/components/ContentWidth/ContentWidth.svelte';
	import { onMount } from 'svelte';
	import OnMount from '$lib/components/TriggerTransitionOnMount.svelte';
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
            label:"Reps",
            href:"/resources"
        },
        {
            label:"Contact",
            href:"/contact"
        },

    ];

	let main:HTMLElement | null;
	let showNav = true;

	let lastScrollY = 0;

	const handleScroll = () => {
		const currentScrollY = window.scrollY;
		
	
		if (Math.abs(currentScrollY - lastScrollY) > 10) {
			showNav = currentScrollY < lastScrollY;
		}

		
		lastScrollY = currentScrollY;
	}


  let isReady = false;
  let isTransitioning = false;

  function disableScroll() {
        if (browser) 
                window.onscroll = ()=> window.scrollTo(0, 0);
  }
            
        

    function enableScroll() {
        if (browser) {
            setTimeout( () => window.onscroll = () => {});
        }
    };

    $: if (!isReady||isTransitioning) {
        disableScroll();
    } else {
        enableScroll();
    }


  onMount(()=>{
	

	window.addEventListener('scroll', handleScroll)


	setTimeout(()=>{
		isReady = true;
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

{#if isTransitioning||!isReady}
	<div class="bg-[#140F09] z-40 fixed w-screen h-screen top-0 left-0 pointer-events-none" out:fade={{duration:700, delay:700}} ></div>
{/if}

{#if isReady}
	{#if viewportWidth<1550}
		<OnMount>
			<div 
				in:fade={{duration:700, delay:700}}
				class="fixed z-40 top-4 left-0 w-40 transition-transform transform-gpu duration-700 {isTransitioning?"delay-100 pointer-events-none":""}" 
				style={isTransitioning?"transform:translate( calc(50vw - 50%), calc(50vh - 50% - 16px)) scale(200%)":"transform:translate(4vw)"}
			>		
				<a href="/" class="h-40 w-fit inline-block relative transition duration-300 ease-in   {!showNav&&!isTransitioning?"-translate-y-[112px]":""}"><img class="h-40 {isTransitioning ? "pulse-always":""}" src={($page.data.title==="MSOT | Resources"||$page.data.title==="MSOT | Contact")&&!isTransitioning ? msotLogoKhaki : msotLogo } alt="msot logo"/></a>
			</div>
		</OnMount>
	{:else}
		<OnMount>
			<div 
				in:fade={{duration:700, delay:700}}
				class="fixed z-40 top-4 left-0 w-40 transition-transform transform-gpu duration-700 {isTransitioning?"delay-100 pointer-events-none":""}" 
				style={isTransitioning?"transform:translate( calc(50vw - 50%), calc(50vh - 50% - 16px)) scale(200%)":"transform:translate(calc( (100vw - 1440px) / 2 ))"}
			>		
				<a href="/" class=" w-fit inline-block relative transition duration-300 ease-in {!showNav&&!isTransitioning?"-translate-y-[112px]":""}"><img class=" transition duration-[1700ms] {isTransitioning ? "pulse-always":""}" src={($page.data.title==="MSOT | Resources"||$page.data.title==="MSOT | Contact")&&!isTransitioning ? msotLogoKhaki : msotLogo } alt="msot logo"/></a>
			</div>
		</OnMount>
	{/if}
{:else}
	<div transition:fade class="fixed w-2/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
		<img src={msotLogoSand} class="w-full h-full pulse-always" alt="msot logo"/>
	</div>
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

<main bind:this={main} >
	<nav class="nav-text fixed top-0 w-full h-28 py-4 z-20 transition duration-300 ease-in {showNav?"":"-translate-y-full"}">
		<ContentWidth class="h-full flex flex-row justify-between items-center">
		<div/>
			{#if viewportWidth>768}
			<div class="flex flex-row items-center justify-between gap-12 transition-transform ">
				{#each NAV_LINKS as item}
					<a href={item.href}>{item.label}</a>
				{/each}
			</div>
			{:else}
				<button on:click={()=>isOverlayVisible=true}><i class="text-[#998B6A] md:hidden fa-sharp fa-bars fa-3x"/></button>
			{/if}
		</ContentWidth>
	</nav>

	<slot />


</main>
<PrismicPreview {repositoryName} />
