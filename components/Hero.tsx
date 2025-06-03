"use client";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Hash, Globe } from "lucide-react";
import { Particles } from "./ui/Particles";
import {
  Bungee_Hairline, //decent
  Fascinate, //get try + -
  Stalinist_One, //try +
  Plaster, //try  +
  Chokokutai, //give -
  Julius_Sans_One,//for decent one
  Syncopate,//decent
  Hachi_Maru_Pop,//cute one 2nd
  Limelight, //best  +  for wadhane
  MuseoModerno,//decent
  Sankofa_Display, //best -
  Nova_Square,//2nd 
  Ruslan_Display, //best  +
  Megrim, //best -1    ==wadhane
  Saira_Stencil_One, // -
  Kablammo, //can try  cat vala
} from "next/font/google";
import { GoArrowUpRight } from "react-icons/go";


const roboto = Ruslan_Display({
  weight: "400",
  subsets: ["latin"],
});
const grp = Syncopate({
  weight: "400",
  subsets: ["latin"],
});
const butt = Hachi_Maru_Pop({
  weight: "400",
  subsets: ["latin"],
});
const butt1 = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});
const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Enhanced Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/mountain_landscape9_generated.jpg"
          alt="Mountain background"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d1b69]/60 via-[#1a103f]/40 to-transparent"></div>
      </div>
      {/* Particles Effect */}
      {/* <Particles /> */}
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="relative inline-block">
          <h1 className={`${roboto.className} tracking-widest  text-6xl md:text-9xl  font-bold text-selectedtxt mt-17 [text-shadow:_0_1px_0_rgb(46,53,82)]`}>
            ᔕᑎᗴᕼᗩᒪ
            {/* Snehal */}
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "100%",
              width: "100%",
              textAlign: "center",
              letterSpacing: "4.0rem", // Increased letter spacing
              left: "1.3rem", // Adjust this value to move it to the right
            }}
            className={`${grp.className} text-center text-1xl md:text-2xl tracking-tight -translate-y-4 sm:text-xs font-bold mt-0 text-selectedtxt text-white/90 mb-8 [text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]`}
          >
            ŴΔĐĦΔŇ€
          </h1>


        </div>
        <div className="flex items-center justify-center flex-col space-y-9 space-x-8 mt-5"> {/* Adjusted margin-top */}
          <p
            className={`${butt.className} animate-text  text-center bg-gradient-to-r from-pickled-bluewood via-[#665085] to-black bg-clip-text text-transparent text-3xl md:text-4xl font-bold font-blacktracking-tighter`}
          >
            Developer
          </p>

          {/* <Link
            href="#about"
            className="group relative inline-flex items-center mt-0 justify-center px-3 py-2 font-semibold text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="absolute inset-0 w-full h-full rounded-xl  opacity-80 transition-all duration-300
                group-hover:opacity-100 justify-center items-center shadow-lg bg-gradient-to-r from-pickled-bluewood to-pickled-bluewood"></span>
            <span className={`${butt1.className} relative flex items-center text-selectedtxt`}>
              View My Work <GoArrowUpRight className="ml-1" />
            </span>
          </Link> */}
        </div>
      </div>
    </div>

  );
};



export default Hero;
