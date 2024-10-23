<script lang='ts'>
    import ScreenWidthImage from "$lib/components/ScreenWidth/ScreenWidthImage.svelte";
    import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";

    import hero from "$lib/assets/images/process/processHero.jpg"
</script>
<svelte:head><title>About | MSOT </title></svelte:head>

<ScreenWidthImage class="fixed -z-10" src={hero}  darken backdrop />
<div class="w-screen h-[20vh] fixed left-0 top-0 -z-10 bg-gradient-to-b from-[#140F09] via-[#140F09] to-transparent opacity-55" />
<div class="w-screen h-screen fixed left-0 top-0 -z-10 bg-[#140F09] opacity-45" />

<div class="w-full h-screen">
    <ContentWidth class="h-full flex flex-row justify-between items-center py-32 relative">
        <h1 class="text-mid  mb-12 opacity-60 w-fit">Our</h1>
        <h1 class="text-mid  mb-12 opacity-60 w-fit">Process</h1>
    </ContentWidth> 
</div>

<ContentWidth>
	<div class="w-full flex justify-center items-center mt-52 mb-40" >
		<div class="w-full p-8 lg:pt-48 lg:pb-32 border-mid border-b-[6px] border-x-[6px] relative flex flex-col items-center justify-center gap-10 mb-12">
			<div class="absolute top-0 left-0 w-6 sm:w-1/6 md:w-1/4 lg:w-1/3 h-0 border-mid border-t-[6px]" />
			<div class="absolute top-0 right-0 w-6 sm:w-1/6 md:w-1/4 lg:w-1/3 h-0 border-mid border-t-[6px]" />
			<h4 class="text-mid absolute top-0 left-1/2 text-nowrap" style="transform:translate(-50%, calc(-50% + 3px))">Simplifying Complexity</h4>
            <p class="text-white text-center mt-12">Government Contracting is Complex...</p>

			<div class="text-white text-center leading-normal md:text-[24px] max-w-screen-lg">
                …and often feels like continuously slamming your head into a wall. We know, we’ve been there. You find your access is expired. Late payments, inability to collect a PO, supply chain delays or mismanagement. You’re always “almost there” to get that next contract, but never quite get across the finish line. This isn’t the way things should be.
            </div>

		</div>
	</div>
    <div class="w-full flex justify-center items-center mb-40">
		<div class="w-full p-6 sm:p-12  lg:px-40 relative flex flex-col items-center justify-center gap-10 mb-12">
			
            <p class="text-white text-center">Let’s Simplify It…</p>

			<div class="text-white text-center leading-normal md:text-[24px] max-w-screen-lg">
                ...and make things work. We’ve done this for years, with many, partners and many situations and will help get you where you need to be. With experience comes procedure, with procedure comes consistency, efficiency, and results.   
            </div>

		</div>
	</div>

</ContentWidth>