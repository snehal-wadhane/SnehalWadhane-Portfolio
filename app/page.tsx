import About from "@/components/about_me";
import Hero from "@/components/Hero";
import Footer from "@/components/myfooter";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex flex-col overflow-hidden">
      <div className="flex-grow flex justify-center items-center">
        <Navbar></Navbar>
        <Hero />
        
      </div>
      <About></About>
     
      <Footer />
    </main>
  );
}
