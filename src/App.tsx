import deepWatersBob from "/survivors-cosmetics/yun-jin/S25_Head01_01.webp";
import midnightBob from "/survivors-cosmetics/yun-jin/S25_Head01_02.webp";
import clementineBob from "/survivors-cosmetics/yun-jin/S25_Head001_03.webp";
import lollipopLongHairdo from "/survivors-cosmetics/yun-jin/S25_Head02.webp";
import candyPopLongHair from "/survivors-cosmetics/yun-jin/S25_Head002_01.webp";
import neonBob from "/survivors-cosmetics/yun-jin/S25_Head007.webp";
import highBunAndSideBang from "/survivors-cosmetics/yun-jin/S25_Head009.webp";
import fauxRelaxedBun from "/survivors-cosmetics/yun-jin/S25_Head011.webp";
import chicBeret from "/survivors-cosmetics/yun-jin/S25_Head013.webp";

import murkyAndPuffyCoat from "/survivors-cosmetics/yun-jin/S25_Torso01_CV01.webp";
import bloomingPuffyCoat from "/survivors-cosmetics/yun-jin/S25_Torso01_CV02.webp";
import sapphirePuffyCoat from "/survivors-cosmetics/yun-jin/S25_Torso01_CV03.webp";
import grassyPuffyCoat from "/survivors-cosmetics/yun-jin/S25_Torso01_CV04.webp";
import fauxFurCollaredCoat from "/survivors-cosmetics/yun-jin/S25_Torso01_01.webp";
import fauxLeopardCoat from "/survivors-cosmetics/yun-jin/S25_Torso01_02.webp";
import fauxSnowFoxCoat from "/survivors-cosmetics/yun-jin/S25_Torso01_03.webp";
import serenitySilkBlouse from "/survivors-cosmetics/yun-jin/S25_Torso02.webp";
import salvationSilkBlouse from "/survivors-cosmetics/yun-jin/S25_Torso02_01.webp";
import patternedJacket from "/survivors-cosmetics/yun-jin/S25_Torso007.webp";
import lunarHanbok from "/survivors-cosmetics/yun-jin/S25_Torso009.webp";
import holidaySilkBlouse from "/survivors-cosmetics/yun-jin/S25_Torso011.webp";
import commandingEpaulets from "/survivors-cosmetics/yun-jin/S25_Torso013.webp";

import silveryAndslickSkirt from "/survivors-cosmetics/yun-jin/S25_Legs01_CV01.webp";
import plumSlickSkirt from "/survivors-cosmetics/yun-jin/S25_Legs01_CV02.webp";
import fierySlickSkirt from "/survivors-cosmetics/yun-jin/S25_Legs01_CV03.webp";
import mochaSlickSkirt from "/survivors-cosmetics/yun-jin/S25_Legs01_CV04.webp";
import zigZagPencilSkirt from "/survivors-cosmetics/yun-jin/S25_Legs01_01.webp";
import velourPencilSkirt from "/survivors-cosmetics/yun-jin/S25_Legs01_02.webp";
import plaidPencilSkirt from "/survivors-cosmetics/yun-jin/S25_Legs01_03.webp";
import graveSuitPants from "/survivors-cosmetics/yun-jin/S25_Legs02.webp";
import midnightSuitPants from "/survivors-cosmetics/yun-jin/S25_Legs02_01.webp";
import magnumOpusDenims from "/survivors-cosmetics/yun-jin/S25_Legs007.webp";
import redHeels from "/survivors-cosmetics/yun-jin/S25_Legs009.webp";
import smoothPantsAndSlippers from "/survivors-cosmetics/yun-jin/S25_Legs011.webp";
import authorityPants from "/survivors-cosmetics/yun-jin/S25_Legs013.webp";

import { useState } from "react";

const head = [
  deepWatersBob,
  midnightBob,
  clementineBob,
  lollipopLongHairdo,
  candyPopLongHair,
  neonBob,
  highBunAndSideBang,
  fauxRelaxedBun,
  chicBeret,
];
const torso = [
  murkyAndPuffyCoat,
  bloomingPuffyCoat,
  sapphirePuffyCoat,
  grassyPuffyCoat,
  fauxFurCollaredCoat,
  fauxLeopardCoat,
  fauxSnowFoxCoat,
  serenitySilkBlouse,
  salvationSilkBlouse,
  patternedJacket,
  lunarHanbok,
  holidaySilkBlouse,
  commandingEpaulets,
];
const legs = [
  silveryAndslickSkirt,
  plumSlickSkirt,
  fierySlickSkirt,
  mochaSlickSkirt,
  zigZagPencilSkirt,
  velourPencilSkirt,
  plaidPencilSkirt,
  graveSuitPants,
  midnightSuitPants,
  magnumOpusDenims,
  redHeels,
  smoothPantsAndSlippers,
  authorityPants,
];

function App() {
  const [headIndex, setHeadIndex] = useState(0);
  const [torsoIndex, setTorsoIndex] = useState(0);
  const [legsIndex, setLegsIndex] = useState(0);

  const moveBackOneHead = () => {
    setHeadIndex((prev) => {
      if (prev <= 0) return head.length - 1;
      return prev - 1;
    });
  };

  const moveForwardOneHead = () => {
    setHeadIndex((prev) => {
      if (prev >= head.length - 1) return 0;
      return prev + 1;
    });
  };

  const moveBackOneTorso = () => {
    setTorsoIndex((prev) => {
      if (prev <= 0) return torso.length - 1;
      return prev - 1;
    });
  };

  const moveForwardOneTorso = () => {
    setTorsoIndex((prev) => {
      if (prev >= torso.length - 1) return 0;
      return prev + 1;
    });
  };

  const moveBackOneLegs = () => {
    setLegsIndex((prev) => {
      if (prev <= 0) return legs.length - 1;
      return prev - 1;
    });
  };

  const moveForwardOneLegs = () => {
    setLegsIndex((prev) => {
      if (prev >= legs.length - 1) return 0;
      return prev + 1;
    });
  };

  return (
    <>
      <div className="absolute -left-[10px] -top-[150px] right-0 m-auto">
        <div className="flex flex-row justify-center">
          <div className="z-[1] self-center">
            <button className="text-3xl" onClick={() => moveBackOneHead()}>
              &larr;
            </button>
          </div>
          <img
            className="pointer-events-none relative scale-[0.55] select-none"
            src={head[headIndex]}
            alt="deep waters bob"
          />
          <div className="z-[1] self-center">
            <button className="text-3xl" onClick={() => moveForwardOneHead()}>
              &rarr;
            </button>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 top-[95px] m-auto">
        <div className="flex flex-row justify-center">
          <div className="z-[1] self-center">
            <button className="text-3xl" onClick={() => moveBackOneTorso()}>
              &larr;
            </button>
          </div>
          <img
            className="pointer-events-none relative select-none"
            src={torso[torsoIndex]}
            alt="murky and puffy coat"
          />
          <div className="z-[1] self-center">
            <button className="text-3xl" onClick={() => moveForwardOneTorso()}>
              &rarr;
            </button>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 top-[335px] m-auto">
        <div className="flex flex-row justify-center">
          <div className="z-[1] self-center">
            <button className="text-3xl" onClick={() => moveBackOneLegs()}>
              &larr;
            </button>
          </div>
          <img
            className="pointer-events-none relative select-none"
            src={legs[legsIndex]}
            alt="silvery and slick skirt"
          />
          <div className="z-[1] self-center">
            <button className="text-3xl" onClick={() => moveForwardOneLegs()}>
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
