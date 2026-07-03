import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import vrImage from "../../images/mobile/image-interactive.jpg";
import deepEarthImage from "../../images/mobile/image-deep-earth.jpg";
import nightArcadeImage from "../../images/mobile/image-night-arcade.jpg";
import soccerTeamImage from "../../images/mobile/image-soccer-team.jpg";
import gridImage from "../../images/mobile/image-grid.jpg";
import fromAboveImage from "../../images/mobile/image-from-above.jpg";
import pocketBorealisImage from "../../images/mobile/image-pocket-borealis.jpg";
import curiosityImage from "../../images/mobile/image-curiosity.jpg";
import fisheyeImage from "../../images/mobile/image-fisheye.jpg";

export default function main() {
  return (
    <main className="py-20 px-6 text-center">
      <div>
        <img src={vrImage} alt="Interactive VR" />
        <h2 className="josefin-sans text-3xl uppercase font-light mt-8 mb-5 leading-8">
          The leader in interactive VR
        </h2>
        <p className="alata text-lg text-gray-500 leading-8 px-2">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>

      <div>
        <h2 className="josefin-sans text-3xl uppercase font-light mt-12 mb-5 leading-8">
          Our creations
        </h2>
        <div className="grid grid-cols-1 gap-5">
          <AspectRatio ratio={16 / 9} className="relative">
            <img src={deepEarthImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent text-white text-left text-2xl font-light p-6 flex flex-col justify-end items-start">
              <p className="text-2xl uppercase">
                Deep <br /> Earth
              </p>
            </div>
          </AspectRatio>

          <AspectRatio ratio={16 / 9} className="relative">
            <img src={nightArcadeImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent text-white text-left text-2xl font-light p-6 flex flex-col justify-end items-start">
              <p className="text-2xl uppercase">
                Night <br /> Arcade
              </p>
            </div>
          </AspectRatio>

          <AspectRatio ratio={16 / 9} className="relative">
            <img src={soccerTeamImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent text-white text-left text-2xl font-light p-6 flex flex-col justify-end items-start">
              <p className="text-2xl uppercase">
                Soccer <br /> Team Vr
              </p>
            </div>
          </AspectRatio>

          <AspectRatio ratio={16 / 9} className="relative">
            <img src={gridImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent text-white text-left text-2xl font-light p-6 flex flex-col justify-end items-start">
              <p className="text-2xl uppercase">
                The <br /> Grid
              </p>
            </div>
          </AspectRatio>

          <AspectRatio ratio={16 / 9} className="relative">
            <img src={fromAboveImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent text-white text-left text-2xl font-light p-6 flex flex-col justify-end items-start">
              <p className="text-2xl uppercase">
                From Up <br /> Above VR
              </p>
            </div>
          </AspectRatio>

          <AspectRatio ratio={16 / 9} className="relative">
            <img src={pocketBorealisImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent text-white text-left text-2xl font-light p-6 flex flex-col justify-end items-start">
              <p className="text-2xl uppercase">
                Pocket <br /> Borealis
              </p>
            </div>
          </AspectRatio>

          <AspectRatio ratio={16 / 9} className="relative">
            <img src={curiosityImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent text-white text-left text-2xl font-light p-6 flex flex-col justify-end items-start">
              <p className="text-2xl uppercase">
                The <br /> Curiosity
              </p>
            </div>
          </AspectRatio>

          <AspectRatio ratio={16 / 9} className="relative">
            <img src={fisheyeImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent text-white text-left text-2xl font-light p-6 flex flex-col justify-end items-start">
              <p className="text-2xl uppercase">
                Make it <br /> Fisheye
              </p>
            </div>
          </AspectRatio>

          <Button className="px-8 py-6 mt-8 h-10 border font-bold alata border-black rounded-none mx-auto bg-white text-black hover:bg-gray-800 hover:text-white transition-colors duration-300">
            <p className="uppercase text-lg font-light">See All</p>
          </Button>

        </div>
      </div>
    </main>
  );
}
