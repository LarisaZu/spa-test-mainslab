import { useState } from "react";
import { getApi, addOperation } from "../services/operations";
import Button from "../components/Button";
import ResponseContent from "../components/ResponseContent";

export default function GetView() {
  const [response, setResponse] = useState(null);

  const handleGetClick = () => {
    getApi().then((data) => {
      setResponse(data)});
  };

  return (
    <>
      <Button text="Get" handleClick={handleGetClick} />
      {response && <ResponseContent text={response} />}
    </>
  );
}
