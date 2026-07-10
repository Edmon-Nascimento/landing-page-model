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
import vrImageDesktop from "../../images/desktop/image-interactive.jpg";
import deepEarthImageDesktop from "../../images/desktop/image-deep-earth.jpg";
import nightArcadeImageDesktop from "../../images/desktop/image-night-arcade.jpg";
import soccerTeamImageDesktop from "../../images/desktop/image-soccer-team.jpg";
import gridImageDesktop from "../../images/desktop/image-grid.jpg";
import fromAboveImageDesktop from "../../images/desktop/image-from-above.jpg";
import pocketBorealisImageDesktop from "../../images/desktop/image-pocket-borealis.jpg";
import curiosityImageDesktop from "../../images/desktop/image-curiosity.jpg";
import fisheyeImageDesktop from "../../images/desktop/image-fisheye.jpg";

export default function main() {
  return (
    <main className="py-20 px-6 text-center lg:max-w-10/12 lg:mx-auto">
      <div className="flex flex-col items-center lg:flex-row lg:relative max-w-7xl justify-center lg:mx-auto">
        <picture className="lg:w-full flex justify-center">
          <source media="(min-width: 1024px)" srcSet={vrImageDesktop} />
          <img src={vrImage} alt="Interactive VR" className="w-10/12" />
        </picture>
        <div className="lg:bg-white lg:absolute lg:bottom-0 lg:right-0">
          <h2 className="josefin-sans text-3xl uppercase font-light mt-8 mb-5 leading-8">
            The leader in interactive VR
          </h2>
          <p className="alata text-lg text-gray-500 leading-8 px-2 max-w-2xl">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-baseline justify-between my-10 lg:mt-20">
          <h2 className="josefin-sans text-3xl uppercase font-light mt-12 mb-5 leading-8 lg:text-4xl w-full lg:w-fit">
            Our creations
          </h2>
          <Button className="px-8 py-6 h-10 border font-bold alata border-black rounded-none bg-white text-black hover:bg-gray-800 hover:text-white transition-colors duration-300 hidden lg:flex">
            <p className="uppercase text-lg font-light">See All</p>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 lg:gap-5 lg:h-300">
          <AspectRatio ratio={16 / 9} className="relative">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={deepEarthImageDesktop}
              />
              <img
                src={deepEarthImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent text-white text-left text-2xl font-light p-6 flex flex-col justify-end items-start">
              <p className="text-2xl uppercase lg:text-4xl lg:text-center">
                Deep <br /> Earth
              </p>
            </div>
          </AspectRatio>

          <AspectRatio ratio={16 / 9} className="relative">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={nightArcadeImageDesktop}
              />
              <img
                src={nightArcadeImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent text-white text-left text-2xl font-light p-6 flex flex-col justify-end items-start">
              <p className="text-2xl uppercase">
                Night <br /> Arcade
              </p>
            </div>
          </AspectRatio>

          <AspectRatio ratio={16 / 9} className="relative">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={soccerTeamImageDesktop}
              />
              <img
                src={soccerTeamImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent text-white text-left text-2xl font-light p-6 flex flex-col justify-end items-start">
              <p className="text-2xl uppercase">
                Soccer <br /> Team Vr
              </p>
            </div>
          </AspectRatio>

          <AspectRatio ratio={16 / 9} className="relative">
            <picture>
              <source media="(min-width: 1024px)" srcSet={gridImageDesktop} />
              <img
                src={gridImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent text-white text-left text-2xl font-light p-6 flex flex-col justify-end items-start">
              <p className="text-2xl uppercase">
                The <br /> Grid
              </p>
            </div>
          </AspectRatio>

          <AspectRatio ratio={16 / 9} className="relative">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={fromAboveImageDesktop}
              />
              <img
                src={fromAboveImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent text-white text-left text-2xl font-light p-6 flex flex-col justify-end items-start">
              <p className="text-2xl uppercase">
                From Up <br /> Above VR
              </p>
            </div>
          </AspectRatio>

          <AspectRatio ratio={16 / 9} className="relative">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={pocketBorealisImageDesktop}
              />
              <img
                src={pocketBorealisImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent text-white text-left text-2xl font-light p-6 flex flex-col justify-end items-start">
              <p className="text-2xl uppercase">
                Pocket <br /> Borealis
              </p>
            </div>
          </AspectRatio>

          <AspectRatio ratio={16 / 9} className="relative">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={curiosityImageDesktop}
              />
              <img
                src={curiosityImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent text-white text-left text-2xl font-light p-6 flex flex-col justify-end items-start">
              <p className="text-2xl uppercase">
                The <br /> Curiosity
              </p>
            </div>
          </AspectRatio>

          <AspectRatio ratio={16 / 9} className="relative">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={fisheyeImageDesktop}
              />
              <img
                src={fisheyeImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent text-white text-left text-2xl font-light p-6 flex flex-col justify-end items-start">
              <p className="text-2xl uppercase">
                Make it <br /> Fisheye
              </p>
            </div>
          </AspectRatio>

          <Button className="px-8 py-6 mt-8 h-10 border font-bold alata border-black rounded-none mx-auto bg-white text-black hover:bg-gray-800 hover:text-white transition-colors duration-300 lg:hidden">
            <p className="uppercase text-lg font-light">See All</p>
          </Button>
        </div>
      </div>
    </main>
  );
}
