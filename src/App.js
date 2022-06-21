import { Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Container from "./components/Container";
import GetView from "./views/GetView";
import PostView from "./views/PostView";
import DeleteView from "./views/DeleteView";
import ImageView from "./views/ImageView";
import Section from "./components/Section";

export default function App() {
  return (
    <Container>
      <Appbar />

      <Section>
        <Routes>
          <Route exact path="/" element={<GetView />}></Route>
          <Route exact path="/post" element={<PostView />}></Route>
          <Route exact path="/delete" element={<DeleteView />}></Route>
          <Route exact path="/image" element={<ImageView />}></Route>
        </Routes>
      </Section>
    </Container>
  );
}
