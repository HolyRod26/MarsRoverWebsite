import react, { useEffect, useState } from "react";
import Image from "next/image";
import marsImg from "../public/mars/image-mars.png";
import { createClient } from "pexels";

// TODO: Bug-1 Al cargar la pantalla se carga primero la imagen marsImg

export default function CardRoverImg({ roverPictures }) {
  const [imgFound, setImgFound] = useState(false);
  const [imgCounter, setImgCounter] = useState(0);
  const [imageDisplayed, setImageDisplayed] = useState(marsImg);

  const client = createClient(
    "563492ad6f917000010000015a1bea3c3ee54089b4ae8b602c4a91b4"
  );
  const pixelPhotoLoader = async (per_page) => {
    let pixelResponse = await client.photos.curated({ per_page });
    let curatedPhotos = pixelResponse.photos;
    let imageToDisplay = curatedPhotos[0].src.original;
    setImageDisplayed(imageToDisplay);
  };

  const handlerImageSource = () => {
    if (!roverPictures.length) {
      setImgFound(false);
      // pixelPhotoLoader(1);
    } else {
      setImgFound(true);
      const img_src = roverPictures[imgCounter].img_src;
      setImageDisplayed(img_src);
    }
  };

  useEffect(() => {
    // pixelPhotoLoader(1);
    console.log(imageDisplayed);
  }, []);

  return (
    <article className="w-full bg-slate-600 h-4/5 mx-auto my-24">
      <header className="p-4 text-center">
        {imgFound ? (
          <h2>Rover Image Found!!!</h2>
        ) : (
          <h2>Rover Image not Found</h2>
        )}
      </header>
      <div className="relative min-h-8/10 max-w-8/10 mx-auto">
        <Image
          src={imageDisplayed}
          alt={`Image of the planet Mars`}
          layout="fill"
          className="object-cover"
          priority={true}
        />
      </div>
      <div className="p-4">Description of the img</div>
      <div className="flex justify-center gap-x-16">
        <button>Next</button>
        <button>Back</button>
      </div>
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
