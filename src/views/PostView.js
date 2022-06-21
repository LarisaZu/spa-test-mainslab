import { useState } from "react";
import { postApi } from "../services/operations";
import { data } from "../services/data";
import Button from "../components/Button";
import ResponseContent from "../components/ResponseContent";

export default function PostView() {
  const [response, setResponse] = useState(null);

  const handleGetClick = () => {
    postApi(data).then((res) => {
      setResponse(res);
    });
  };

  return (
    <>
      <Button text="Post" handleClick={handleGetClick} />
      {response && <ResponseContent text={response} />}
    </>
  );
}
