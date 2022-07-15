import React from "react";
import Header from "./containers/header/Header";
import MainRoutes from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <MainRoutes />
    </div>
  );
}

export default App;
