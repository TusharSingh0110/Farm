import { ImageUpload } from "./home";
import { PredictionPage } from "./crop";
import { Route, Routes } from "react-router-dom";

function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<ImageUpload />} />
      <Route path="/crop" element={<PredictionPage />} />
    </Routes>
    </>
  )
}

export default App;
