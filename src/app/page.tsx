import { Banner } from "@/components/banner/banner";
import { Spotlight } from "@/components/spotlight/spotlight";
import { Technologies } from "@/components/technologies/technologies";
import { About } from "@/components/about/about";
import { Certifications } from "@/components/certifications/certifications";
import { Projects } from "@/components/projects/projects";

export default function Home() {
  return (
    <>
      <Banner />
      <Certifications />
      <Spotlight />
      <Projects />
      <About />
      <Technologies />
    </>
  );
}
