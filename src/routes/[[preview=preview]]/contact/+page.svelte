<script lang='ts'>
  import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";
import Footer from "$lib/components/Footer.svelte";
  import ContactForm from "$lib/components/FullWidth/ContactForm.svelte";

</script>

<section class="bg-light pt-64 pb-32">
    <ContentWidth>
        <h2 class="text-dark w-full text-left">CONTACT US </h2>
        <div class="w-full h-[2px] bg-dark mt-4" />
        <div class="w-full flex flex-col-reverse lg:flex-row justify-between py-16">
            <div class="mt-12 lg:mt-0 w-full lg:w-1/2 flex flex-col gap-8 text-dark text-[24px] leading-normal">
                <div>We’d love to hear from you.</div>
                <div>
                    1583 Thousand Oaks Dr. <br/> San Antonio, TX 78232
                </div>
                <div> 
                    Phone: 210.744.9686 <br/>
                    Fax: 210.758.5466 <br/>
                    info@MedicalSolutionsofTX.com
                </div>

            </div>
            <div class="w-full lg:w-1/2">
                <ContactForm />
            </div>
        </div>
        
    </ContentWidth>
</section>
<Footer/>