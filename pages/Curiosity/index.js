import Layout from "../../components/layout";
import marsImg from "../../public/mars/image-mars.png";
import CardRoverImg from "../../components/CardRoverImg";

import Image from "next/image";
import react, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import moment from "moment";
import { createClient } from "pexels";

export default function Curiosity() {
  /**
   * In order to create default value for today momentJS library was used, with the format method the input comes yyyy-mm-ddT(currentTime)
   * Split the returned value using the T for time to split the array and made it a default value for the earthDate for the search
   */

  // useEffect(() => {
  //   curatedPhotoLoader(5);
  // }, []);

  const [roverPictures, setRoverPictures] = useState([]);
  // const [imgFound, setImgFound] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      earth_date: moment().format().split("T")[0],
    },
  });

  /**
   * This function takes in a url as a parameter, fetches the data from the url, and then sets the
   * state of the image displayed to the first image in the array of images returned from the url
   * @param urlRover - the url that will be used to fetch the data from the API
   */
  const fetchRoverImage = async (urlRover) => {
    const response = await fetch(urlRover);
    const roverImageData = await response.json();
    const picturesOfRover = roverImageData.photos;
    if (!picturesOfRover.length) {
      setRoverPictures([]);
      // curatedPhotoLoader(1);
      // setImgFound(false);
    } else {
      setRoverPictures(picturesOfRover);
      // let newPicture = picturesOfRover[0].img_src;
      // setRoverPictures(newPicture);
      // setImgFound(true);
    }
  };

  const myLoader = (formData) => {
    const url = new URL(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos"
    );
    url.search = new URLSearchParams({
      earth_date: formData.earth_date,
      camera: formData.camera,
      api_key: "x4sjVH1ZvyIIt9IXlo173TgHnFxTYmPvPi7YjKWk",
    });
    return url.toString();
  };

  /**
   * A function that takes in a parameter of per_page and returns a response from the Pexels API.
   * @param per_page - The number of photos you want to display.
   */

  /*
  const curatedPhotoLoader = async (per_page) => {
    let pixelResponse = await client.photos.curated({ per_page });
    let curatedPhotos = pixelResponse.photos;
    let imageToDisplay = curatedPhotos[0].src.original;
    setRoverPictures(imageToDisplay);
  };

  const client = createClient(
    "563492ad6f917000010000015a1bea3c3ee54089b4ae8b602c4a91b4"
  );

*/

  const onSubmit = (data) => {
    const finalUrl = myLoader(data);
    fetchRoverImage(finalUrl);
    console.log(
      "🚀 ~ file: index.js ~ line 23 ~ Curiosity ~ roverPictures",
      roverPictures
    );
  };

  const cameraOptions = [
    { id: "mast", description: "Mast Camera" },
    { id: "fhaz", description: "Front Hazard Avoidance Camera	" },
    { id: "rhaz", description: "Rear Hazard Avoidance Camera	" },
    { id: "chemcam", description: "Chemistry and Camera Complex" },
    { id: "mahli", description: "Mars Hand Lens Imager	" },
    { id: "mardi", description: "Mars Descent Imager	" },
    { id: "navcam", description: "Navigation Camera	" },
  ];

  const createCameraInputs = react.Children.toArray(
    cameraOptions.map((cam) => {
      return (
        <option className="bg-slate-800" value={cam.id}>
          {cam.description}
        </option>
      );
    })
  );

  return (
    <section className="ml-40 mt-10 text-white">
      <h2 className="text-sub-h1 font-barlow text-white">
        <span className="font-bold mr-2">01</span>
        See a photo from the Mars Rovers (Curiosity Rover)
      </h2>
      <div className="flex w-auto h-screen">
        <div className="w-1/2 pl-16 pt-8 flex items-center justify-center">
          <div className="relative w-full h-full">
            <CardRoverImg roverPictures={roverPictures}></CardRoverImg>
          </div>
        </div>
        <div className="w-1/2 flex items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-col flex w-9/12 m-auto gap-8"
          >
            <input
              {...register("earth_date", {
                required: "Earth date is required",
              })}
              type="date"
              className="bg-transparent w-100 relative"
            />
            <select {...register("camera")} className="bg-transparent">
              {createCameraInputs}
            </select>
            <input type={"submit"} className="bg-slate-900 py-4 mt-2" />
          </form>
        </div>
      </div>
      <style jsx>{`
      input[type="date"]::-webkit-calendar-picker-indicator{
        background: transparent;
        bottom: 0;
        color: transparent;
        cursor: pointer;
        height: auto;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: auto;
      }}`}</style>
    </section>
  );
}

Curiosity.getLayout = function getLayout(page) {
  return <Layout bg={"bg-mars"}>{page}</Layout>;
};

/**
 * <Image
              src={roverPictures}
              alt={`Image of the planet Mars`}
              layout="fill"
              className="object-cover"
            ></Image>
 */
