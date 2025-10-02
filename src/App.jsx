import React from "react";
import { CurrentUserLoader } from "./components/current-user-loader";
import { UserInfo } from "./components/user-info";
import { UserLoader } from "./components/user-loader";


function App() {
  return (
    <>
     <UserLoader userId={3}>
      <UserInfo />
     </UserLoader >
    </>
  );
}
export default App;
