

<script>

    export let click = ()=>{};
    export let href="";


    let isActive=false;

</script>

{#if href}
<a 
    on:mouseenter={()=>isActive=true} 
    on:mouseleave={()=>isActive=false}
    on:click= {()=>{click();isActive=false;}}
    class="flex flex-row items-center text-center no-underline justify-center transition-all duration-300 active:-translate-y-2 {$$props.class || ''}" 
    {href}
>
 <div class=" transition-transform duration-300 text-xl {isActive ? "-translate-x-1":""}">[</div>
    <div class=" mx-1 uppercase no-underline translate-y-[2px] button-text"><slot/></div>
    <div class="  transition-transform duration-300 text-xl {isActive ? "translate-x-1":""}">]</div>
</a>
{:else}
<button 
    on:mouseenter={()=>isActive=true} 
    on:mouseleave={()=>isActive=false}
    on:click= {()=>{click();isActive=false;}}
    class="flex flex-row items-center text-center no-underline justify-center transition-all duration-300 active:-translate-y-2 {$$props.class || ''}" 
>
<div class=" transition-transform duration-300 text-xl {isActive ? "-translate-x-2":""}">[</div>
    <div class="mx-2 uppercase no-underline translate-y-[2px] button-text"><slot/></div>
    <div class=" transition-transform duration-300 text-xl {isActive ? "translate-x-2":""}">]</div>
</button>
{/if}