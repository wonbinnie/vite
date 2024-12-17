import React from "react";
import Poster from "./Components/24_12_17/Poster";
import FAQ from "./Components/24_12_17/FAQ";
import Reason from "./Components/Reason";
import LB from "./Components/24_12_17/LB";

const App = () => {
  return (
    <div>
      <main>
        <Poster />
        <Poster />
        <Reason />
        <FAQ />
        <LB />
      </main>
    </div>
  );
};

export default App;
