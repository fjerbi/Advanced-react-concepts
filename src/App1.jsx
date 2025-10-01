// App.jsx
import React from "react";
import { SplitScreen } from "./components/split-sceen";

function App1() {
  const LeftSideComp = ({title}) => (
    <div>
      <h2 style={{ backgroundColor: "red" }}>{title}</h2>
    </div>
  );

  const RightSideComp = ({title}) => (
    <div>
      <h2 style={{ backgroundColor: "brown" }}>{title}</h2>
    </div>
  );

  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComp title="Left Side" />
      <RightSideComp title="Right Side" />
    </SplitScreen>
  );
}

export default App1;
