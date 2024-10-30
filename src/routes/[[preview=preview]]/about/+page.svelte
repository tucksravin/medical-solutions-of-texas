<script lang='ts'>
    import ScreenWidthImage from "$lib/components/ScreenWidth/ScreenWidthImage.svelte";
    import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";

    import hero from "$lib/assets/images/about/aboutHero.jpg"
    import flagThumb from "$lib/assets/images/about/flagThumb.jpg"
    import dots from "$lib/assets/dots.svg"
    import patch from "$lib/assets/images/about/patch.jpg"
    import placeholder from "$lib/assets/images/profile_placeholder.png"
  import Accordian from "$lib/components/FullWidth/Accordian.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>



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

<section class="w-full py-20 bg-mid" >
	<ContentWidth class="items-start">
        <h5 class="text-dark mb-5" style="font-family:'barlow-condensed', sans-serif;">Track Record: Our Best Projects</h5>
		<div class="w-full aspect-[5/2] bg-light relative overflow-hidden">
            <img src={flagThumb} alt="surgeons placeholder" class="w-full h-full absolute top-0 left-0 object-cover"/>
			<iframe 
					title="background video" 
					src={`https://player.vimeo.com/video/1022236757?background=1`}
					class="absolute w-full aspect-video top-0 left-0 contrast-[1.3]"
					frameborder="0"
					
				  ></iframe>
				  <div class="w-full h-full absolute top-0 left-0 bg-mid mix-blend-multiply"/>
				  <h2 class="text-mid absolute -bottom-2 md:-bottom-[14px] left-0 leading-none">CIBOLO SPINE</h2>
		</div>
        <div class="mt-5 w-1/2 text-dark text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</div>
	
	</ContentWidth>
</section>
<section class="w-full py-32 bg-light">
    <ContentWidth>
        <h3 class="text-dark mb-8">What We Do For You</h3>
        <Accordian accordianProps={[
            {label:"Sign Dapas", content:"Distribution and pricing agreements allow you to set prices and gain direct access to the military market."},
            {label:"Get Listed in the E-CAT", content:"Distribution and pricing agreements allow you to set prices and gain direct access to the military market."},
            {label:"Win FSS Contracts", content:"Distribution and pricing agreements allow you to set prices and gain direct access to the military market."},
            {label:"Figure out where to start", content:"Distribution and pricing agreements allow you to set prices and gain direct access to the military market."}
        ]} />
    <div class="my-44 flex flex-col md:flex-row justify-start items-start w-full">
        <div class="relative w-full md:w-[40%] h-fit mr-12 xl:mr-[20%]">
            <img alt="dots" src={dots} class=" w-2/5 absolute -bottom-[10%] -right-[10%]" />
            <img alt="dots" src={dots} class=" w-2/5 absolute -bottom-[10%] right-[30%] translate-x-[-0.8px]" />
            <img alt="dots" src={dots} class=" w-2/5 absolute -bottom-[10%] right-[70%] translate-x-[-0.8px]" />
            <div class="w-2/5 absolute -bottom-[10%] bg-light h-full right-[90%] translate-x-[-0.8px]" />
            <img alt="pats" src={patch} class="w-full opacity-0" />
            <img alt="pats" src={patch} class="w-full absolute top-0" />
        </div>
        <div class="relative mt-20 md:mt-0 w-full md:w-1/2 xl:w-2/5 xl:pr-[10%] flex flex-col gap-5">
            <h5 class="text-dark">Who We Are</h5>
            <h3 class="text-dark">We have what you’re  looking for</h3>
            <div class="text-dark label">​​MSOT was founded by a team of medical sales experts in 2022. With a career running Air Force logistics on bases in the continental United States to forward deployment locations like [location 1] and [location 2], we have the experience to know how to work within the complex system of military contracts and procurement. 
                <br/> <br />
                We spent our careers grappling with the difficulties in getting and keeping VA hospitals and DoD bases equipped with med-surg supplies, from the side of a logistics officer and the side of the medical sales. And so we formed MSOT, pairing experts on both sides to build an organization uniquely suited to connect med-surg suppliers with VA and DoD contracts.</div>
        </div>
    </div>
    </ContentWidth>
</section>
<section class="bg-[#998B6A] py-20">
    <ContentWidth>
        <h4 class="text-light my-20">The Team </h4>
        <div class="w-full flex flex-col lg:flex-row gap-y-20 items-center justify-between">
            <div class="w-64 md:w-96 lg:w-72 xl:w-96">
                <div class="w-full aspect-square relative overflow-hidden">
                    <img alt="dots" src={dots} class="h-3/5 absolute top-0 right-0" />
                    <img alt="dots" src={dots} class="h-3/5 absolute bottom-0 left-0" />
                    <img alt="dots" src={dots} class="h-3/5 absolute bottom-0 right-0" />
                    <img alt="dots" src={dots} class="h-3/5 absolute top-0 left-0" />
                    <img alt="albert turgon" src={placeholder} class="w-full h-full object-cover absolute" />
                </div>
                <div class="w-full h-[2px] bg-light mt-6" />
                <h5 class="text-light mt-6">Chief Operating Officer</h5>
                <h3 class="text-white mt-6">Albert Turgon</h3>
                
            </div> 
            <div class="w-64 md:w-96 lg:w-72 xl:w-96">
                <div class="w-full aspect-square relative overflow-hidden">
                    <img alt="dots" src={dots} class="h-3/5 absolute top-0 right-0" />
                    <img alt="dots" src={dots} class="h-3/5 absolute bottom-0 left-0" />
                    <img alt="dots" src={dots} class="h-3/5 absolute bottom-0 right-0" />
                    <img alt="dots" src={dots} class="h-3/5 absolute top-0 left-0" />
                    <img alt="albert turgon" src={placeholder} class="w-full h-full object-cover absolute" />
                </div>
                <div class="w-full h-[2px] bg-light mt-6" />
                <h5 class="text-light mt-6">President</h5>
                <h3 class="text-white mt-6">Tim Watson</h3>
                
            </div> 
            <div class="w-64 md:w-96 lg:w-72 xl:w-96">
                <div class="w-full aspect-square relative overflow-hidden">
                    <img alt="dots" src={dots} class="h-3/5 absolute top-0 right-0" />
                    <img alt="dots" src={dots} class="h-3/5 absolute bottom-0 left-0" />
                    <img alt="dots" src={dots} class="h-3/5 absolute bottom-0 right-0" />
                    <img alt="dots" src={dots} class="h-3/5 absolute top-0 left-0" />
                    <img alt="albert turgon" src={placeholder} class="w-full h-full object-cover absolute" />
                </div>
                <div class="w-full h-[2px] bg-light mt-6" />
                <h5 class="text-light mt-6">holden caldon</h5>
                <h3 class="text-white mt-6">holden caldon</h3>
                
            </div> 
        </div>
    </ContentWidth>
</section>
<Footer />