import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Division } from "@/components/Divison";
import { Product } from "@/components/Product"
import { Project } from "@/components/Project"
import { About } from "@/components/About"
import { Contact } from "@/components/Contact"

export default function Home() {
  return (
    <Container>
      <Hero />

      <div id="about" className="py-10">
        <SectionTitle
          preTitle="About Us"
          title="Your Vision, Our Mission"
          >
          Kami hadir untuk mewujudkan ide dan impian Anda melalui kerja yang profesional dan dapat diandalkan.
        </SectionTitle>

        <About />  
      </div>

      <div id="division" className="py-10">
        <SectionTitle
          preTitle="Our Division"
          title="Diversity in Craft. Unity in Vision."
          >
          Dari furnitur, fashion, serta properti hingga makanan, setiap divisi Berkah Ciptha Nusa mencerminkan komitmen kami terhadap kualitas, inovasi, dan dampak positif.
        </SectionTitle>

        <Division />  
      </div>

      <div id="product" className="py-10">
        <SectionTitle
          preTitle="Product"
          title="Discover Our Collections"
          >
          Temukan berbagai produk terbaik kami mulai dari furniture hingga fashion & F&B.
        </SectionTitle>

        <Product />  
      </div>

      <div id="project" className="py-10">
        <SectionTitle
          preTitle="Project"
          title="Showcasing Our Signature Projects"
          >
          Beragam proyek unggulan dari setiap divisi yang mencerminkan kualitas dan komitmen Berkah Ciptha Nusa.
        </SectionTitle>

        <Project />  
      </div>

      <div id="contact" className="py-10">
        <SectionTitle
          preTitle="Contact"
          title="Let's Get In Touch"
          >
          Kami siap mendengar ide, pertanyaan, atau kolaborasi dari Anda. Jangan ragu untuk menghubungi kami melalui form di bawah ini.
        </SectionTitle>

        <Contact />  
      </div>

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials /> */}

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">

      </SectionTitle>

      <Faq />
      
    </Container>
  );
}
