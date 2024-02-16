import Image from "next/image";
import Hero from "./components/Hero";
import ONama from "./components/ONama";
import Portfolio from "./components/Portfolio";
import Usluge from "./components/Usluge";

export default function Home() {
  return (
    <main>
      <Hero ></Hero>
      <ONama />
      <Usluge />
      <Portfolio />

    </main>
  );
}
