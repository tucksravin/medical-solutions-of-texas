<script lang='ts'>
    import ScreenWidthImage from "$lib/components/ScreenWidth/ScreenWidthImage.svelte";
    import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";

    import hero from "$lib/assets/images/about/aboutHero.jpg"
</script>
<svelte:head><title>About | MSOT </title></svelte:head>

<ScreenWidthImage class="fixed -z-10" src={hero}  darken backdrop />
<div class="w-screen h-[20vh] fixed left-0 top-0 -z-10 bg-gradient-to-b from-[#140F09] via-[#140F09] to-transparent opacity-55" />
<div class="w-screen h-screen fixed left-0 top-0 -z-10 bg-[#140F09] opacity-45" />

<div class="w-full h-screen">
    <ContentWidth class="h-full flex flex-row justify-between items-center py-32 relative">
        <h1 class="text-mid  mb-12 opacity-60 w-fit">About</h1>
        <h1 class="text-mid  mb-12 opacity-60 w-fit">MSOT</h1>
    </ContentWidth> 
</div>

<ContentWidth>
	<div class="w-full flex justify-center items-center mt-52 mb-40">
		<div class="w-full p-6 sm:p-12  lg:px-40 border-mid border-b-[6px] border-x-[6px] relative flex flex-col items-center justify-center gap-10 mb-12">
			<div class="absolute top-0 left-0 w-6 sm:w-1/6 md:w-1/4 lg:w-1/3 h-0 border-mid border-t-[6px]" />
			<div class="absolute top-0 right-0 w-6 sm:w-1/6 md:w-1/4 lg:w-1/3 h-0 border-mid border-t-[6px]" />
			<h4 class="text-mid absolute top-0 left-1/2 text-nowrap" style="transform:translate(-50%, calc(-50% + 3px))">what differentiates us</h4>
            <p class="text-white text-center">​​We are defined by expertise and experience.</p>

			<div class="text-white text-center leading-normal md:text-[24px]">With 20 years worth of experience in Air Force logistics and nearly 50 years in medical device sales on our leadership team, we know the DoD & VA healthcare landscape better than anyone. We enable med-surg suppliers to find and access opportunities that they wouldn’t have been able to tap into alone.</div>

		</div>
	</div>

</ContentWidth>