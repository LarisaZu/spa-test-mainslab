import { useState } from "react";
import { getApi } from "../services/operations";
import Button from "../components/Button";
import ResponseContent from "../components/ResponseContent";

export default function GetView({ addOperation }) {
  const [response, setResponse] = useState(null);

  const handleGetClick = async () => {
    let tmpUrl = null;
    await getApi()
      .then((data) => {
        tmpUrl = data.url;
        setResponse(JSON.stringify(data));
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
      <Button text="Get" handleClick={handleGetClick} />
      {response && <ResponseContent text={response} />}
    </>
  );
}
