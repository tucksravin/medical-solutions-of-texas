<script lang='ts'>
//icons
import usFlag from "$lib/assets/icons/logos/usFlag.svg"
import txFlag from "$lib/assets/icons/logos/txFlag.svg"
import sdvosbLogo from "$lib/assets/icons/logos/sdvosb-white.svg";
import revogenLogo from "$lib/assets/icons/logos/revogenLogo.png" 

//images
import soldiersVideoPlaceholder from "$lib/assets/images/home/bgVideoPlaceholder.jpg"
import surgeonsVideoPlaceholder from "$lib/assets/images/home/surgeonsPlaceholder.png"
import timeline1 from "$lib/assets/images/home/timeLine.svg"
import timeline1_mobile from "$lib/assets/images/home/timeline1_mobile.svg"
import timeline2 from "$lib/assets/images/home/timeline2.svg"
import timeline3 from "$lib/assets/images/home/timeline3.svg"
import ctaImage from "$lib/assets/images/home/doctor.png"

  
//components
  import ScreenWidthImage from "$lib/components/ScreenWidth/ScreenWidthImage.svelte";
  import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";

  //modules
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { fade } from "svelte/transition";
  import BracketButton from "$lib/components/Buttons/BracketButton.svelte";
  


let viewportWidth:number;
let viewportHeight:number;

let isMounted = false;
let showSubtitle = false;

let middleTitleLine:HTMLElement |  null;

let middleTitleLineWidth = writable(3000);

let weGetIndex = 0;

let weGetTrigger:HTMLElement | null;

const runWeGetAnimation = () => {
	if(weGetIndex!=2){
		weGetIndex=1;
		setTimeout(()=>weGetIndex=2,1600)
	}
}

const runReverseWeGetAnimation = () => {

	if(weGetIndex!=0){
		weGetIndex=1;
		setTimeout(()=>weGetIndex=0,1600)
	}
}

let painTrigger:HTMLElement | null;
let isPainActive = false;

let threeStepTrigger:HTMLElement | null;
let isthreeStepActive = false;

let ctaTrigger:HTMLElement | null;
let isCtaActive = false;


const handleResize = () => {
  if (middleTitleLine) {
    const width = middleTitleLine.getBoundingClientRect().width;
    middleTitleLineWidth.set(width || 3000);
    console.log("Middle title line width:", width);
  } else {
    console.log("Middle title line element not found");
  }
}

const handleScroll = () => {
	if(weGetTrigger){
		const weGetRect = weGetTrigger.getBoundingClientRect();
		const weGetBottom = weGetRect.bottom
		const weGetHeight = weGetRect.height

		if(weGetBottom<viewportHeight + (weGetHeight/3)){
			runWeGetAnimation()
		}else{
			runReverseWeGetAnimation()
		}
	}

	if(painTrigger){
		const painBottom =painTrigger.getBoundingClientRect().bottom

		if(painBottom<viewportHeight){
			isPainActive=true;
		}else{
			isPainActive=false;
		}
	}

	if(threeStepTrigger){
		const threeStepRect = threeStepTrigger.getBoundingClientRect()
		const threeStepBottom =threeStepRect.bottom
		const threeStepHeight =threeStepRect.height

		if(threeStepBottom<viewportHeight + (threeStepHeight/2)){
			isthreeStepActive=true;
		}else{
			isthreeStepActive=false;
		}
	}


	if(ctaTrigger){
		const ctaBottom =ctaTrigger.getBoundingClientRect().bottom

		if(ctaBottom<viewportHeight){
			isCtaActive=true;
		}else{
			isCtaActive=false;
		}
	}
}
		
onMount(() => {




	isMounted = true;

    window.addEventListener('resize', handleResize);
	window.addEventListener('scroll', handleScroll);

	
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

<svelte:window bind:innerWidth={viewportWidth} bind:innerHeight={viewportHeight}/>

<ScreenWidthImage class="fixed -z-10" src={soldiersVideoPlaceholder} vimeoId="1019997263" darken backdrop>
	
</ScreenWidthImage>
<ContentWidth> 
	<div class="w-full h-screen">
		{#if isMounted}
		<div class="w-full h-full flex flex-col justify-end py-20 relative"  transition:fade={{duration:700}}>
			{#if viewportWidth>768 }
				<h1 class="text-mid transition-opacity duration-1000 ease-out  delay-700 {isMounted ? "opacity-50":"opacity-0"}">Connecting DoD + VA</h1>
				<h1 bind:this={middleTitleLine} class="text-mid  w-fit transition-opacity duration-1000 ease-out  delay-700 {isMounted ? "opacity-50":"opacity-0"}">Hospitals with</h1>
				<h1 class="text-mid  transition-opacity duration-1000 ease-outdelay-700 {isMounted ? "opacity-50":"opacity-0"}"> Med-Surg Suppliers</h1>
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
				<h1 class="text-mid  mb-12 opacity-60">Connecting <br/> DoD + VA <br/> Hospitals <br/> w/ Med-Surg <br/> Suppliers</h1>
				<div class="text-white transition-opacity duration-1000 ease-out  {showSubtitle? "opacity-100":"opacity-0"}">We bridge the gap between clinical demand and government procurement to support America’s Armed Services and our Veterans.</div>
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
			<div class="text-white text-center leading-normal md:text-[24px]">Our expertise, SDVOSB (Service Disabled Veteran Owned Small Business) status, and deep network of relationships allows us to offer solutions where others hit roadblocks.</div>
			<div class="flex flex-col md:flex-row justify-center items-center gap-8">
				<BracketButton href="/" class="text-mid button-text">Contact Us</BracketButton>
				<BracketButton href="/" class="text-mid button-text">Capabilities Statement</BracketButton>
			</div>
		</div>
	</div>

</ContentWidth>

<section class="w-full py-20 bg-mid" >
	<ContentWidth class="items-start">
		<div class="w-full aspect-[5/2] bg-light relative overflow-hidden">
			<img src={surgeonsVideoPlaceholder} alt="surgeons placeholder" class="w-full h-full absolute top-0 left-0 object-cover"/>
			<iframe 
					title="background video" 
					src={`https://player.vimeo.com/video/1019997302?background=1`}
					class="absolute w-full aspect-video top-0 left-0 contrast-[1.15]"
					frameborder="0"
					
				  ></iframe>
				  <h2 class="text-mid absolute -bottom-2 md:-bottom-[14px] left-0 leading-none">We'll Get You</h2>
		</div>
		<div class="mt-6 overflow-hidden" >
		<div class="mt-6 overflow-hidden" bind:this={weGetTrigger}>
			<div class="transition-transform duration-1000 ease-out -mb-[15%]" style={`transform:translateY(calc(-1/3 * 100% * ${weGetIndex}))`}>
				<h2 class="text-dark text-left transition duration-1000 ease-out mt-4 {weGetIndex===0 ? "":"opacity-25"}">Priority <br/> Access</h2>
				<h2 class="text-dark text-left transition duration-1000 ease-out mt-4 {weGetIndex===1 ? "":"opacity-25"}">contract <br/> expertise</h2>
				<h2 class="text-dark text-left transition duration-1000 ease-out mt-4 {weGetIndex===2 ? "":"opacity-25"}">Direct <br/> Results</h2>
			</div>
		<div class="bg-mid relative pt-4 w-full">
			<h5 class="text-dark mt-20 md:mt-36 mb-5">The End User In Mind</h5>
			<div class="text-dark w-80">MSOT makes medical care possible from the war fighter all the way to the retiree and all phases of service inbetween.</div>
		</div>
	</ContentWidth>
</section>
<section class="bg-light w-screen aspect-[5/2] relative">
	<img src={viewportWidth>768 ? timeline1 : timeline1_mobile} alt="timelines" class="w-full" />
</section>
<section class="bg-mid py-20" bind:this={painTrigger}>
	<ContentWidth class="flex flex-col md:flex-row relative">
		{#if !isPainActive}
			<div class="absolute top-0 left-0 h-[2px] bg-gradient-to-r transition-all from-dark to-transparent  w-full" transition:fade={{duration:6000}} />
		{/if}
	
		{#if isPainActive}
			<div class="absolute top-0 left-0 h-[2px] bg-gradient-to-r transition-all from-transparent to-dark  w-full" transition:fade={{duration:6000}} />
		{/if}
		<div class="md:w-1/2 mt-6 transition-opacity duration-1000 ease-out {isPainActive?"":"opacity-0"}">
			<div class="duration-1000 ease-out {isPainActive?"opacity-25 delay-[2800ms]":""}">
				<h4 class="text-dark mb-20 duration-1000 ease-out {isPainActive?"opacity-100":""}">We Know Your Pain </h4>
				<h3 class="text-dark duration-1000 ease-out  {isPainActive?"opacity-100":"opacity-0"}">government <br/> contracts are</h3>
				<h3 class="text-dark duration-1000 ease-out mt-6  {isPainActive?"opacity-100 delay-700":"opacity-0"}">opaque</h3>
				<h3 class="text-dark duration-1000 ease-out  {isPainActive?"opacity-100 delay-[1400ms]":"opacity-0"}">confusing</h3>
				<h3 class="text-dark duration-1000 ease-out  {isPainActive?"opacity-100 delay-[2100ms]":"opacity-0"}">inaccessible</h3>
			</div>
		</div>
		<div class="md:w-1/2 mt-6">
			<h4 class="text-dark mb-20  duration-1000 ease-out {isPainActive?"opacity-100 delay-[3500ms]":"opacity-0"}">We Know What To Do</h4>
			<h3 class="text-dark duration-1000 ease-out  {isPainActive?"opacity-100 delay-[3500ms]":"opacity-0"}">with us <br/> You’ll get</h3>
			<h3 class="text-dark duration-1000 ease-out mt-6 {isPainActive?"opacity-100 delay-[4200ms]":"opacity-0"}">transparency</h3>
			<h3 class="text-dark duration-1000 ease-out {isPainActive?"opacity-100 delay-[4900ms] ":"opacity-0"}">understanding</h3>
			<h3 class="text-dark duration-1000 ease-out {isPainActive?"opacity-100  delay-[5600ms]  ":"opacity-0"}">access</h3>
		</div>
		
	</ContentWidth>
</section>
<section class="bg-mid flex flex-col items-center justify-center gap-10 py-32">
	<h4 class="text-dark">We’re here to help</h4>
	<p class="text-dark text-center">Take the headache and confusion out of dealing <br /> with government healthcare </p>
</section>

<section class="bg-light w-screen aspect-[5/2] relative">
	<img src={timeline2} alt="timelines" class="w-full" />
</section>
<section class="bg-mid py-32">
	<ContentWidth>
	<div class="w-full flex justify-center items-center">
		<div class="w-full py-32 sm:py-32 lg:px-40 border-[#998B6A] border-b-[6px] border-x-[6px] relative flex flex-col items-center justify-center gap-10 mb-12">
			<div class="absolute top-0 left-0 w-6 sm:w-1/6 md:w-1/4 lg:w-1/3 h-0 border-[#998B6A] border-t-[6px]" />
			<div class="absolute top-0 right-0 w-6 sm:w-1/6 md:w-1/4 lg:w-1/3 h-0 border-[#998B6A] border-t-[6px]" />
			<h4 class="text-dark absolute top-0 left-1/2 text-nowrap" style="transform:translate(-50%, calc(-50% + 3px))">Our Partners</h4>

				
				<img src={revogenLogo} alt="service disabled veteran owned small business logo" class="h-32"/>
				
			
			<p class="text-dark text-center text-[24px]">MSOT made the process of getting our product into the DoD system easier than we ever thought possible. They're an invaluable partnership and wealth of knowledge when it comes to selling to the DoD and VA hospital systems.</p>
			
		</div>
	</div>

</ContentWidth>
</section>
<section class="bg-mid py-20" bind:this={threeStepTrigger}>
	<ContentWidth>
		<h2 class="text-dark text-left w-full">Getting started</h2>
		<h2 class="text-dark text-left w-full">is simple with msot</h2>
		<div class="w-full my-24 flex flex-col md:flex-row justify-between gap-8">
			<div class="w-full relative transition-opacity duration-1000 ease-out {isthreeStepActive?"bg-opacity-100":"opacity-0"}">
				<div class="absolute top-0 left-0 h-[2px] bg-gradient-to-r transition-all from-dark to-transparent  w-full" />
				<h4 class="text-dark mt-4">01</h4>
				<h3 class="text-dark mt-8">establish <br/>	goals</h3>
			</div>
			<div class="w-full relative transition-opacity duration-1000 ease-out {isthreeStepActive?"bg-opacity-100 delay-[800ms]":"opacity-0"}">
				<div class="absolute top-0 left-0 h-[2px] bg-gradient-to-r transition-all from-dark to-transparent  w-full" />
				<h4 class="text-dark mt-4">02</h4>
				<h3 class="text-dark mt-8">Find Your <br/> access points</h3>
			</div>
			<div class="w-full relative transition-opacity duration-1000 ease-out {isthreeStepActive?"bg-opacity-100 delay-[1800ms]":"opacity-0"}">
				<div class="absolute top-0 left-0 h-[2px] bg-gradient-to-r transition-all from-dark to-transparent  w-full" />
				<h4 class="text-dark mt-4">03</h4>
				<h3 class="text-dark mt-8">Set pricing <br/>direct invoicing</h3>

			</div>
		</div>
		<BracketButton class="text-dark mb-12" href="/about">Learn More</BracketButton>
	</ContentWidth>
</section>
<section class="bg-light w-screen aspect-[5/2] relative">
	<img src={timeline3} alt="timelines" class="w-full" />
	
</section>
<ScreenWidthImage src={ctaImage} class="flex flex-col items-start justify-end py-32" darken>
	<div class="h-44 overflow-hidden relative w-full">
	
			<h1 class=" text-mid add-outline absolute bottom-0 left-0 opacity-40">let’s get started</h1>
			<h1 class="outlined absolute bottom-0 left-0 transition-opacity duration-1000 {isCtaActive ? "opacity-100  delay-700" : "opacity-0"}">let’s get started</h1>
			<h1 class=" text-mid add-outline absolute bottom-0 left-0 transition-opacity duration-1000   {isCtaActive ? "opacity-100 delay-[1400ms]" : "opacity-0"}">let’s get started</h1>
		
	</div>
	<div class="flex flex-row gap-6 ml-2" bind:this={ctaTrigger}>
		<BracketButton class="text-mid" href="/">Contact Us</BracketButton>
		<BracketButton class="text-mid" href="/">Learn More</BracketButton>
	</div>
</ScreenWidthImage>