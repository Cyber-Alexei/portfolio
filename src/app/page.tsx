import { Banner } from "@/components/banner/banner";
import { Spotlight } from "@/components/spotlight/spotlight";
import { Technologies } from "@/components/technologies/technologies";
import { About } from "@/components/about/about";

export default function Home() {
  return (
    <>
      <Banner />
      <Spotlight />
      <Technologies />
      <About />
    </>
  );
}
