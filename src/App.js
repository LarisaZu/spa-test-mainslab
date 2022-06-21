import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { getTodayDateFormat } from "./services/date";
import Appbar from "./components/Appbar";
import Container from "./components/Container";
import Section from "./components/Section";
import Footer from "./components/Footer";
import ImageView from "./views/ImageView";
import GetView from "./views/GetView";
import PostView from "./views/PostView";
import DeleteView from "./views/DeleteView";

export default function App() {
  const [operations, setOperation] = useState(() => {
    return JSON.parse(window.localStorage.getItem("operations")) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem("operations", JSON.stringify(operations));
  }, [operations]);

  const addOperation = ({ date, url }) => {
    const operation = {
      id: uuidv4(),
      date: getTodayDateFormat(date),
      url,
    };
    setOperation([...operations, operation]);
  };

  return (
    <Container>
      <Appbar />

      <Section>
        <Routes>
          <Route
            exact
            path="/"
            element={<GetView addOperation={addOperation} />}
          ></Route>
          <Route
            exact
            path="/post"
            element={<PostView addOperation={addOperation} />}
          ></Route>
          <Route
            exact
            path="/delete"
            element={<DeleteView addOperation={addOperation} />}
          ></Route>
          <Route
            exact
            path="/image"
            element={<ImageView addOperation={addOperation} />}
          ></Route>
        </Routes>
      </Section>
      <Footer list={operations} />
    </Container>
  );
}
