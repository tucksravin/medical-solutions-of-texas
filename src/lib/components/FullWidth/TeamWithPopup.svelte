<script lang='ts'>
    import dots from "$lib/assets/dots_square.png"
    import placeholder from "$lib/assets/images/profile_placeholder.png"
    import { browser } from "$app/environment";
  import { fly } from "svelte/transition";
  import ContentWidth from "../ContentWidth/ContentWidth.svelte";

    let showOverlay = false;

    const toggleOverlay = () => {
        showOverlay = !showOverlay;
        if(showOverlay){
            disableScroll();
        }else{
            enableScroll();
        }
    }

    function disableScroll() {
        const y = window.scrollY;
        if (browser) 
                window.onscroll = ()=> window.scrollTo(0, y);
  }
            
        

    function enableScroll() {
        if (browser) {
            setTimeout( () => window.onscroll = () => {});
        }
    };

    export let name:string;
    export let title:string;
    export let headshot = placeholder; 
    export let bio = name+" is the "+ title + " at MSOT.";
    export let noclick = false;
</script>

<button class="w-64 md:w-96 lg:w-72 xl:w-96 opacity-90 hover:opacity-100 {noclick?"pointer-events-none":""}" on:click={toggleOverlay}>
    <div class="w-full aspect-square relative overflow-hidden">
        <img alt="dots" src={dots} class="w-full h-full absolute bottom-0 right-0" />
        <img alt="albert turgon" src={headshot} class="w-full h-full object-cover absolute" />
    </div>
    <div class="w-full h-[2px] bg-light mt-6" />
    <h5 class="text-light mt-4 text-left">{title}</h5>
    <h3 class="text-white mt-2 text-left text-nowrap">{name}</h3>
    
</button> 
{#if showOverlay}
    <div class="w-screen h-screen fixed bg-[#140F09] text-light left-0 top-0 flex items-center justify-between z-50" transition:fly={{x:"100%"}}>
        <ContentWidth class="flex flex-col justify-center items-center lg:items-start lg:flex-row lg:justify-between lg:aspect-video py-16 relative">
            <div class="w-64 md:w-96 lg:w-72 xl:w-96">
                <div class="w-full aspect-square relative overflow-hidden">
                    <img alt="dots" src={dots} class="w-full h-full absolute bottom-0 right-0" />
                    <img alt="albert turgon" src={headshot} class="w-full h-full object-cover absolute" />
                </div>
                <div class="w-full h-[2px] bg-light mt-6" />
                <h5 class="text-light mt-6 text-center lg:text-left">{title}</h5>
                <h3 class="text-white mt-6 text-nowrap text-center lg:text-left">{name}</h3>
            </div>
            <div class="w-full lg:w-2/3 mt-12 lg:mt-0 lg:px-8">
                {bio}
            </div>
            <button on:click={toggleOverlay} class="absolute top-0 right-0"><i class="fa-sharp fa-thin fa-close fa-2xl transition text-light hover:text-white"/></button>
        </ContentWidth>
    </div>
{/if}