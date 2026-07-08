import { Differentials } from "@/components/differentials";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HomeService } from "@/components/home-service";
import { Location } from "@/components/location";
import { Services } from "@/components/services";
import { WhatsAppFloatingButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HomeService />
        <Differentials />
        <Gallery />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
