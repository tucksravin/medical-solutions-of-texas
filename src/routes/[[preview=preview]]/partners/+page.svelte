<script lang='ts'>
    import ScreenWidthImage from "$lib/components/ScreenWidth/ScreenWidthImage.svelte";
    import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";


    import hero from "$lib/assets/images/partners/partnersHero.jpg"
    import revogenLogo from "$lib/assets/icons/logos/revogenLogo.png"
    import revogenColor from "$lib/assets/images/partners/revogenColor.png"
    import edge from "$lib/assets/images/partners/edge.png"
    import ctl from "$lib/assets/images/partners/ctl.png"
    import fourWeb from "$lib/assets/images/partners/4web.jpg"
    import difusion from "$lib/assets/images/partners/difus.jpg"
    import metalogix from "$lib/assets/images/partners/metalogix.png"
    import expanding from "$lib/assets/images/partners/expanding.png"
  import ScreenWidthGallerySliderSmall from "$lib/components/ScreenWidth/ScreenWidthGallerySliderSmall.svelte";
  import Footer from "$lib/components/Footer.svelte";

  const imageArray = [edge, ctl, fourWeb, difusion, metalogix, expanding]

  
</script>
<svelte:head><title>MSOT | Partners </title></svelte:head>

<ScreenWidthImage class="fixed -z-10" src={hero}  darken backdrop />
<div class="w-screen h-[20vh] fixed left-0 top-0 -z-10 bg-gradient-to-b from-[#140F09] via-[#140F09] to-transparent opacity-55" />
<div class="w-screen h-screen fixed left-0 top-0 -z-10 bg-[#140F09] opacity-45" />

<div class="w-full h-screen">
    <ContentWidth class="h-full flex flex-row justify-between items-center py-32 relative">
        <h1 class="text-mid  mb-12 opacity-60 w-fit">Our</h1>
        <h1 class="text-mid  mb-12 opacity-60 w-fit">Partners</h1>
    </ContentWidth> 
</div>

<ContentWidth>
	<div class="w-full flex justify-center items-center mt-52 mb-40">
		<div class="w-full p-6 sm:p-12  lg:px-40 lg:pt-48 lg:pb-32 border-mid border-b-[6px] border-x-[6px] relative flex flex-col items-center justify-center gap-10 mb-12">
			<div class="absolute top-0 left-0 w-6 sm:w-1/6 md:w-1/4 lg:w-1/3 h-0 border-mid border-t-[6px]" />
			<div class="absolute top-0 right-0 w-6 sm:w-1/6 md:w-1/4 lg:w-1/3 h-0 border-mid border-t-[6px]" />
			<h4 class="text-mid absolute top-0 left-1/2 text-nowrap" style="transform:translate(-50%, calc(-50% + 3px))">working with the best</h4>
            <img src={revogenLogo} alt="revogen logo" class="w-64"/>

			<div class="text-white text-center leading-normal md:text-[24px] max-w-[900px]">
                MSOT made the process of getting our product into the DoD system easier than we ever thought possible. They're an invaluable partnership and wealth of knowledge when it comes to selling to the DoD and VA hospital systems.</div>

		</div>
	</div>

    <div class="w-full flex justify-center items-center mb-40">
		<div class="w-full p-6 sm:p-12  lg:px-40 relative flex flex-col items-center justify-center gap-10 mb-12">
			
            <p class="text-white text-center">What Successful Partnership Looks Like</p>

			<div class="text-white text-center leading-normal md:text-[24px] max-w-screen-lg">
                A statement about the type of clients MSOT works with. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
            </div>

		</div>
	</div>

</ContentWidth>

<section class="bg-white py-20">
    <ContentWidth>
        <h4 class="text-dark">Our Clients</h4>
        <div class="flex flex-col md:flex-row justify-evenly items-center w-full my-16">
            <h3 class="text-dark text-center">Cibolo <br/> Spine </h3>
            <img alt="revogen logo" src={revogenColor} class="w-1/5"/>
            <h3 class="text-dark text-center"> Partner <br/> Logo </h3>
        </div>
        <div class="h-0.5 bg-dark w-full"/>
    </ContentWidth>
    <ScreenWidthGallerySliderSmall {imageArray} />



</section>

<Footer />