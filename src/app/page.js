import Image from "next/image";
import Hero from "./(components)/Hero/Hero";
import Repo from "./(components)/Repo/Repo";
import Footer from "./(components)/Footer/Footer";
import HeadComponent from "./(components)/Header/Header";

export default function Home() {
  return (
    <div className="">
      <HeadComponent/>
      <Hero />
      <Repo />
      <Footer />
    </div>
  );
}
