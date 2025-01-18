import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import WishList from "./pages/Wihslist";
import Add from "./pages/Add";
import Watches from "./pages/Watches";
import NotFound from "./pages/Notfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/wihslist" element={<WishList />} />
          <Route path="/add" element={<Add />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
