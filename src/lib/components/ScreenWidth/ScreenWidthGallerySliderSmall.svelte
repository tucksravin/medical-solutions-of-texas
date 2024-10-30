<script lang='ts'>
    import { onMount } from "svelte";
    import { swipe } from "svelte-gestures";
    import placeholder from "../../assets/images/background_placeholder.svg";
    import ContentWidth from "../ContentWidth/ContentWidth.svelte";
    import FourByThreeImage from "../FullWidth/FourByThreeImage.svelte";
    import chevronLeft from "$lib/assets/icons/chevron-left.svg"
    import chevronRight from "$lib/assets/icons/chevron-right.svg"

      
      export let imageArray = [placeholder, placeholder, placeholder, placeholder];
      export let altText = "background image"

      
  
      const SLIDER_TRANSITION_FUNCTION="cubic-bezier(.5,0,0,1)";
      const SLIDER_TRANSITION_LENGTH_IN_MS=2000;
      const SLIDER_INTERVAL_IN_MS = 5000;
  
      let sliderIndex = imageArray.length-1;
      
      let isSlideAnimated = true;

      const resetSliderToStart = () => {
          setTimeout(()=>isSlideAnimated=false, SLIDER_TRANSITION_LENGTH_IN_MS)
          setTimeout(()=> sliderIndex=0, SLIDER_TRANSITION_LENGTH_IN_MS+20)
          setTimeout(()=>isSlideAnimated=true,SLIDER_TRANSITION_LENGTH_IN_MS+40)
      }

      const resetSliderToEnd = () => {
          setTimeout(()=>isSlideAnimated=false, SLIDER_TRANSITION_LENGTH_IN_MS)
          setTimeout(()=> sliderIndex=imageArray.length-1, SLIDER_TRANSITION_LENGTH_IN_MS+20)
          setTimeout(()=>isSlideAnimated=true,SLIDER_TRANSITION_LENGTH_IN_MS+40)
      }
  
      const slideRight = () => {
          sliderIndex++;
          clearInterval(sliderInterval);
	        sliderInterval = setInterval(()=>slideRight(), SLIDER_INTERVAL_IN_MS);
          if(sliderIndex==imageArray.length)
              resetSliderToStart();
          
          console.log(sliderIndex)
      }
      const slideLeft = () => {
          sliderIndex--;
          clearInterval(sliderInterval);
	    sliderInterval = setInterval(()=>slideLeft(), SLIDER_INTERVAL_IN_MS);
          if(sliderIndex<0)
              resetSliderToEnd();
      }
  
      const setSliderIndex = (index:number) => {
          sliderIndex=index;
          clearInterval(sliderInterval);
          sliderInterval = setInterval(()=>slideLeft(), SLIDER_INTERVAL_IN_MS);
      }
  
      let sliderInterval:NodeJS.Timeout;
  
      const handleSwipe = (e:CustomEvent<{ direction: "left" | "top" | "right" | "bottom"; target: EventTarget; }>) => {
        if(e.detail.direction==="left") 
          slideRight();
  
          if(e.detail.direction==="right") 
          slideLeft();
      }

      let progressPosistion = 0;
      let progressWrapForwardPosition = -100;
      let progressWrapBackwardPosition = imageArray.length*100

      $: {
        progressPosistion= (sliderIndex)*100;
        if(sliderIndex==imageArray.length)
            progressWrapForwardPosition=0;
        else
        progressWrapForwardPosition = 100;
        
        if(sliderIndex==-1)
            progressWrapBackwardPosition=imageArray.length*100-100;
        else
            progressWrapBackwardPosition = imageArray.length*100;

            console.log(sliderIndex)
      }
  
      onMount(()=>{
         sliderInterval = setInterval(()=>slideLeft(), SLIDER_INTERVAL_IN_MS);
      });
  
      const tripledImages = imageArray.concat(imageArray).concat(imageArray)
  </script>
      
  <section class="pb-32 {$$props.class || ''}">
      <div use:swipe on:swipe={handleSwipe} class="h-[320px] py-2 relative" >
      <div  class="h-full flex flex-row flex-nowrap {isSlideAnimated ? 'transition-transform duration-[2000ms]': ''}"
      style= "width:{352*tripledImages.length}px; margin-left:calc(50vw - 176px); transform:translateX({-(sliderIndex+imageArray.length)*352}px); ">
          
          
          {#each tripledImages as image }
          <div class="w-[360px] h-full mx-4">
              <FourByThreeImage alt={altText} src={image} class="h-full object-cover -z-10"/>
          </div>
          {/each}
          
          
      </div>
      <div class="absolute flex justify-center w-full top-0 left-0">
        
 

          <button on:click={slideLeft} class="absolute left-0 h-[320px] bg-gradient-to-r from-white via-[#ffffffe0] to-transparent w-12 md:w-24 flex align-middle justify-center items-center cursor-pointer transition-all duration-500 bump">
            <i class="fa-sharp fa-chevron-left fa-xl text-dark" />
          </button>
          <button on:click={slideRight} class="absolute right-0 h-[320px] w-12 md:w-24 flex bg-gradient-to-l from-white via-[#ffffffe0] to-transparent align-middle cursor-pointer transition-all duration-500 justify-center items-center   bump">
            <i class="fa-sharp fa-chevron-right fa-xl text-dark" />
          </button>
      
          
      </div>
  </div>
  </section>