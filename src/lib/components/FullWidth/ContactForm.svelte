<script lang="ts">
    import StyledSingleSelect from "./StyledSingleSelect.svelte";
    import DefaultButton from "../Buttons/DefaultButton.svelte";
  import BracketButton from "../Buttons/BracketButton.svelte";


    export let PRODUCTS = ["VA Contracts", "DoD Contracts", "Both"]

    let submit = () => form.submit();
    let form:HTMLFormElement;


    let selectValue="";

</script>


<form class="w-full flex flex-col gap-4" name="contact" method="post" bind:this={form} netlify netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />

        <div class="flex flex-col md:flex-row text-light items-center justify-center w-full">
            <div class="flex flex-col gap-4 md:flex-row justify-between w-full">
                <input class=" w-full md:w-[calc(50%-15px)] border-[1px] rounded-[3px] text-dark border-light h-10 pl-4 pt-[2.5px]" name="email" placeholder="Email" type="email"/>
                <input class="w-full md:w-[calc(50%-15px)] border-[1px] rounded-[3px] text-dark border-light h-10 pl-4 pt-[2.5px]" name="name" placeholder="Your Name / Company" type="email"/>
            </div>
        </div>
        <StyledSingleSelect placeholder="Select Interest" items={PRODUCTS} bind:value={selectValue}/>
        <input name="select" type="select" bind:value={selectValue} hidden />

        <textarea class="border-[1px] rounded-[3px] text-dark border-light h-48 pl-4 pt-2" placeholder="Your Message" name="message" />

        <div class="w-16">
            <BracketButton click={submit} class="text-dark">Submit</BracketButton>
        </div>
        
</form>
