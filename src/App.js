import Login from "./components/Login";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShowSub from "./pages/ShowSub";
import HomePage from "./pages/HomePage";

function App() {
  const isLoggedIn = useSelector((state) => state.log.isLoggedIn);

  return (
    <div className="">
      <BrowserRouter>
        {}

        <Routes>
          <Route path="/" element={!isLoggedIn && <Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route exact path="/post/:postId" element={<ShowSub />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
