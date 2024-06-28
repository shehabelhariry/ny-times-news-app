import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ArticleDetails from "./pages/ArticleDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="article/:id" element={<ArticleDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
