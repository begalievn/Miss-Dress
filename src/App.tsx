import React from "react";

import Header from "./containers/header/Header";
import { MainRoutes } from "./pages";
// import Footer from "./containers/footer/Footer";
// import AdminPageMain from "./pages/adminPage/AdminPageMain";

function App() {
  return (
    <div className="App">
      <Header />
      <MainRoutes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
