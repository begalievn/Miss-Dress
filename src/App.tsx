import React from "react";

import Header from "./containers/header/Header";
import { MainRoutes } from "./pages";

// import Footer from "./containers/footer/Footer";
// import AdminPageMain from "./pages/adminPage/AdminPageMain";

import Footer from "./containers/footer/Footer";
import AdminPageMain from "./pages/adminPage/AdminPageMain";
import { useExcept } from "./utils/helpers/headerExceptions";
import { useLocation } from "react-router-dom";
import { parseJwt } from "./utils/helpers/authorization";

function App() {
  const location = useLocation();
  const isExcept = useExcept(location.pathname);
  return (
    <div className="App">
      {isExcept && <Header />}
      <MainRoutes />
      {/* <Footer /> */}
      {isExcept && <Footer />}
    </div>
  );
}

export default App;
