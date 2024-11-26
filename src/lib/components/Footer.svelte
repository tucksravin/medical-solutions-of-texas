<script lang="ts">
    import ContentWidth from "./ContentWidth/ContentWidth.svelte";
    import BracketButton from "./Buttons/BracketButton.svelte";
    import sdvosbLogo from "$lib/assets/icons/logos/sdvosb-white.svg"
    import msotLogo from "$lib/assets/icons/logos/msot_logo.svg"
    import { onMount } from "svelte";


let viewportWidth:number;
let viewportHeight:number;

let ctaTrigger:HTMLElement | null;
let isCtaActive = false;

const handleScroll = () => {
    if(ctaTrigger){
            const ctaBottom =ctaTrigger.getBoundingClientRect().bottom

            if(ctaBottom<viewportHeight){
                isCtaActive=true;
            }else{
                isCtaActive=false;
            }
        }
};
		
onMount(() => {
	window.addEventListener('scroll', handleScroll);
});

</script>

<svelte:window bind:innerWidth={viewportWidth} bind:innerHeight={viewportHeight}/>

<section class="bg-[#998B6A] py-44">
    <ContentWidth>
	<div class="h-44 overflow-hidden relative w-full">
	
			<h1 class=" text-mid add-outline absolute bottom-0 left-0 opacity-40">let’s get started</h1>
			<h1 class="outlined absolute bottom-0 left-0 transition-opacity duration-1000 {isCtaActive ? "opacity-100  delay-700" : "opacity-0"}">let’s get started</h1>
			<h1 class=" text-mid add-outline absolute bottom-0 left-0 transition-opacity duration-1000   {isCtaActive ? "opacity-100 delay-[1400ms]" : "opacity-0"}">let’s get started</h1>
		
	</div>
	<div class="flex flex-row gap-6 ml-2 w-full" bind:this={ctaTrigger}>
		<BracketButton class="text-mid" href="/contact">Contact Us</BracketButton>
		<BracketButton class="text-mid" href="/process">Learn More</BracketButton>
	</div>
    </ContentWidth>
</section>


<footer class=" h-56 md:h-48 bg-[#998B6A]">
	<ContentWidth class="flex flex-row justify-between  py-6 h-36 sm:h-full border-t-2 border-white">
		<div class="flex flex-col justify-between items-start">
			<a href="/" class="bump self-start h-16 md:h-20 relative"><img class="h-full transitionn duration-700 ease-fast-slow delay-500" src={msotLogo} style="transform-origin:top left" alt="msot logo"/></a>
			{#if viewportWidth > 560}
			<div class="label text-white ">©2024 - Medical Solutions of Texas  |   All Rights Reserved</div>
			{/if}
		
		</div>
		<img src={sdvosbLogo} alt="sdvosb logo" class="h-16 md:h-24"/>
	</ContentWidth>
	{#if viewportWidth <= 560}
			<div class="label text-white w-full text-center px-2">©2024 - Medical Solutions of Texas  <br />   All Rights Reserved</div>
	{/if}
</footer>