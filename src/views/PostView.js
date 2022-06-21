import { useState } from "react";
import { postApi } from "../services/operations";
import { data } from "../services/data";
import Button from "../components/Button";
import ResponseContent from "../components/ResponseContent";

export default function PostView({ addOperation }) {
  const [response, setResponse] = useState(null);

  const handleGetClick = () => {
    let tmpUrl = null;
    postApi(data)
      .then((res) => {
        tmpUrl = res.url;
        setResponse(JSON.stringify(res));
      })
      .then(() =>
        addOperation({
          date: new Date(),
          url: tmpUrl,
        })
      );
  };

  return (
    <>
      <Button text="Post" handleClick={handleGetClick} />
      {response && <ResponseContent text={response} />}
    </>
  );
}
