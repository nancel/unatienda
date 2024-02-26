import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import { MainProducts } from "app/components/home/MainProducts";

Description

export default function Home() {
  return (
    <main>
      <Hero/>
      <Description/>
      <MainProducts/>
    </main>
  );
}
