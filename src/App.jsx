import React from "react";
import { ControlledModal } from "./components/controlled-modal";
function App() {
  const [shouldDisplay, setShouldDisplay] = React.useState(false);
  return (
    <>
      <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <h3>This is a Controlled Modal</h3>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? "Hide Modal" : "Show Modal"}
      </button>
    </>
  );
}

export default App;
