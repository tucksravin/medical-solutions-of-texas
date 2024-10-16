<script lang='ts'>
//icons
import usFlag from "$lib/assets/icons/logos/usFlag.svg"
import txFlag from "$lib/assets/icons/logos/txFlag.svg"
import sdvosbLogo from "$lib/assets/icons/logos/sdvosb-white.svg";

//images
import soldiersVideoPlaceholder from "$lib/assets/images/home/bgVideoPlaceholder.jpg"

  
//components
  import ScreenWidthImage from "$lib/components/ScreenWidth/ScreenWidthImage.svelte";
  import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";

  //modules
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { fade } from "svelte/transition";
  import BracketButton from "$lib/components/Buttons/BracketButton.svelte";
  


let viewportWidth:number;

let isMounted = false;
let showSubtitle = false;

let middleTitleLine:HTMLElement |  null;

let middleTitleLineWidth = writable(3000);

const handleResize = () => {
  if (middleTitleLine) {
    const width = middleTitleLine.getBoundingClientRect().width;
    middleTitleLineWidth.set(width || 3000);
    console.log("Middle title line width:", width);
  } else {
    console.log("Middle title line element not found");
  }
}
		
onMount(() => {




	isMounted = true;

    window.addEventListener('resize', handleResize);

	
	setTimeout(()=>{
		handleResize()
	}, 20)

	setTimeout(()=>{
		showSubtitle = true;
	}, 1400)





  return () => {
    window.removeEventListener('resize', handleResize);
	isMounted = false;
  };
});


</script>

<svelte:window bind:innerWidth={viewportWidth} />

<ScreenWidthImage class="fixed -z-10" src={soldiersVideoPlaceholder} vimeoId="1019997263" darken backdrop>
	
</ScreenWidthImage>
<ContentWidth> 
	<div class="w-full h-screen">
		{#if isMounted}
		<div class="w-full h-full flex flex-col justify-end py-20 relative"  transition:fade={{duration:700}}>
			{#if viewportWidth>768 }
				<h1 class="text-mid transition-opacity duration-700 ease-fast-slow delay-700 {isMounted ? "opacity-50":"opacity-0"}">Connecting DoD + VA</h1>
				<h1 bind:this={middleTitleLine} class="text-mid  w-fit transition-opacity duration-700 ease-fast-slow delay-700 {isMounted ? "opacity-50":"opacity-0"}">Hospitals with</h1>
				<h1 class="text-mid  transition-opacity duration-700 ease-fast-slow delay-700 {isMounted ? "opacity-50":"opacity-0"}"> Med-Surg Suppliers</h1>
				{#if showSubtitle}
				<div transition:fade={{duration:700}} class="text-white text-nowrap
						md:absolute md:w-[20%] md:bottom-[204px] md:text-[10px] md:leading-tight 
						lg:bottom-[248px] lg:text-[13.3px] 
						xl:bottom-[292.8px] xl:text-[17px]" 
					style={viewportWidth > 768 ? `left: ${$middleTitleLineWidth+20}px;` : ""}
				>
					We bridge the gap between <br/> clinical demand and government <br/>  procurement to support <br/>  America’s Armed Services and <br/>   our Veterans.
				</div>
				{/if}
				
			{:else}
				<h1 class="text-mid  mb-12 opacity-50">Connecting <br/> DoD + VA <br/> Hospitals <br/> w/ Med-Surg <br/> Suppliers</h1>
				<div class="text-white transition-opacity duration-700 ease-fast-slow {showSubtitle? "opacity-100":"opacity-0"}">We bridge the gap between clinical demand and government procurement to support America’s Armed Services and our Veterans.</div>
			{/if}
		</div>
		{/if}
		
	</div>
	<div class="w-full flex justify-center items-center">
		<div class="w-full p-6 sm:p-12  lg:px-40 border-mid border-b-[6px] border-x-[6px] relative flex flex-col items-center justify-center gap-10 mb-12">
			<div class="absolute top-0 left-0 w-6 sm:w-1/6 md:w-1/4 lg:w-1/3 h-0 border-mid border-t-[6px]" />
			<div class="absolute top-0 right-0 w-6 sm:w-1/6 md:w-1/4 lg:w-1/3 h-0 border-mid border-t-[6px]" />
			<h4 class="text-mid absolute top-0 left-1/2 text-nowrap" style="transform:translate(-50%, calc(-50% + 3px))">Your Trusted Partner</h4>

			<div class="flex flex-row items-center justify-center gap-5">
				<img src={usFlag} alt="us flag" class="opacity-50"/>
				<img src={sdvosbLogo} alt="service disabled veteran owned small business logo" />
				<img src={txFlag} alt="texas flag" class="opacity-50"/>
			</div>
			<p class="text-white text-center text-[24px]">Our expertise, SDVOSB (Service Disabled Veteran Owned Small Business) status, and deep network of relationships allows us to offer solutions where others hit roadblocks.</p>
			<div class="flex flex-col md:flex-row justify-center items-center gap-8">
				<BracketButton href="/" class="text-mid button-text">Contact Us</BracketButton>
				<BracketButton href="/" class="text-mid button-text">Capabilities Statement</BracketButton>
			</div>
		</div>
	</div>

</ContentWidth>