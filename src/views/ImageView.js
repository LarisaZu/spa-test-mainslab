import { useState } from "react";
import { imagesApi } from "../services/operations";
import Button from "../components/Button";
import Gallery from "../components/Gallery";

const formats = ["jpeg", "png", "webp"];

export default function ImageView() {
  const [images, setImages] = useState([]);

  const handleGetClick = () => {
    imagesApi(formats).then((data) => {
      setImages(data);
    });
  };

  return (
    <>
      <Button text="Images" handleClick={handleGetClick} />
      {images && <Gallery list={images} />}
    </>
  );
}
