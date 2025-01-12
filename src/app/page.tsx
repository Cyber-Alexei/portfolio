import { lazy } from "react";
const Section1 = lazy(() => import("../components/section1/section1"));
const Section2 = lazy(() => import("../components/section2/section2"));
const Section3 = lazy(() => import("../components/section3/section3"));
const Section4 = lazy(() => import("../components/section4/section4"));

export default function Home() {
  return (
    <main className="overflow-hidden mx-auto">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}
