import Image from "next/image";
import Hero from "./components/Hero";
import ONama from "./components/ONama";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <main>
      <Hero ></Hero>
      <ONama />
      <Portfolio />

    </main>
  );
}
