<script lang='ts'>
//icons

//images
import soldiersVideoPlaceholder from "$lib/assets/images/home/bgVideoPlaceholder.jpg"
  import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";
//components
  import ScreenWidthImage from "$lib/components/ScreenWidth/ScreenWidthImage.svelte";

  //modules
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { fade } from "svelte/transition";
  


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

<ScreenWidthImage class="overflow-y-scroll hide-scrollbar" src={soldiersVideoPlaceholder}>
	<div class="h-[200%]"> 
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
		<div class="w-full h-screen flex justify-center items-center">

		</div>

	</div>
</ScreenWidthImage>