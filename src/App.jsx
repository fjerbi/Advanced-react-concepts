import axios from "axios";
import { DataSource } from "./components/data-source";
import { UserInfo } from "./components/user-info";
function App() {
  return (
    <>
      <DataSource
        getData={async () => {
          const response = await axios.get("/users/3");
          return response.data;
        }}
        resourceName={"user"}
      >
        <UserInfo />
      </DataSource>
    </>
  );
}
export default App;
