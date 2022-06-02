import react, { useEffect, useState, useReducer } from "react";
import Image from "next/image";
import marsImg from "../public/mars/image-mars.png";
import { createClient } from "pexels";

// TODO: Bug-1 Al cargar la pantalla se carga primero la imagen marsImg

export default function CardRoverImg({ roverPictures }) {
  const [imgFound, setImgFound] = useState(false);
  const [imgCounter, setImgCounter] = useState(0);
  const [imageDisplayed, setImageDisplayed] = useState(marsImg);

  const incrementCounter = () => {
    imgCounter >= roverPictures.length - 1
      ? setImgCounter(0)
      : setImgCounter(imgCounter + 1);
  };
  const decrementCounter = () => {
    imgCounter <= 0 ? setImgCounter(0) : setImgCounter(imgCounter - 1);
  };
  /*
  const client = createClient(
    "563492ad6f917000010000015a1bea3c3ee54089b4ae8b602c4a91b4"
  );
  const pixelPhotoLoader = async (per_page) => {
    let pixelResponse = await client.photos.curated({ per_page });
    let curatedPhotos = pixelResponse.photos;
    let imageToDisplay = curatedPhotos[0].src.original;
    setImageDisplayed(imageToDisplay);
  };
  */

  const handlerImageSource = () => {
    if (!roverPictures.length) {
      setImgFound(false);
      setImageDisplayed(marsImg);
      // pixelPhotoLoader(1);
    } else {
      setImgFound(true);
      const img_src = roverPictures[imgCounter].img_src;
      setImageDisplayed(img_src);
    }
  };

  useEffect(() => {
    handlerImageSource();
    console.log(imageDisplayed);
    console.log("length rovers: ", roverPictures.length);
    console.log(imgCounter);
  }, [imgCounter]);

  useEffect(() => {
    handlerImageSource();
  }, [roverPictures]);

  return (
    <article className="w-full h-4/5 bg-slate-600 mx-auto mt-12 border-solid p-12">
      <header className="p-4 text-center h-2/10">
        {imgFound ? (
          <h2>Photos Found: {roverPictures.length}</h2>
        ) : (
          <h2>Rover Image not Found</h2>
        )}
      </header>
      <div className="relative min-h-6/10 mx-auto mt-8">
        <Image
          src={imageDisplayed}
          alt={`Image of the planet Mars`}
          layout="fill"
          className="object-contain"
        />
      </div>

      <div className="flex justify-center gap-x-16 h-2/10 mt-8">
        <button className="p-4 bg-red-500" onClick={incrementCounter}>
          Next
        </button>
        <button className="p-4 bg-red-500" onClick={decrementCounter}>
          Back
        </button>
      </div>
      <div className="p-4"> Count: {imgCounter}</div>
    </article>
  );
}
/**
 * <Image
          src={img_src}
          alt={`Image of the planet Mars`}
          layout="fill"
          className="object-cover"
        />
 * 
 */
