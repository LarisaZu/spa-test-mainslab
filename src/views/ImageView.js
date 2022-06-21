import { useState } from "react";
import { imagesApi } from "../services/operations";
import Button from "../components/Button";
import Gallery from "../components/Gallery";

const formats = ["jpeg", "png", "webp"];
const BASE_URL_IMAGE = "https://httpbin.org/image";

export default function ImageView({ addOperation }) {
  const [images, setImages] = useState([]);

  const handleGetClick = () => {
    imagesApi(formats)
      .then((data) => {
        setImages(data);
      })
      .then(() =>
        addOperation({
          date: new Date(),
          url: BASE_URL_IMAGE,
        })
      );
  };

  return (
    <>
      <Button text="Images" handleClick={handleGetClick} />
      {images && <Gallery list={images} />}
    </>
  );
}
