import axios from "axios";
import { BookInfo } from "./components/book-info";
import { DataSourceWithRender } from "./components/data-source-with-render";
import { UserInfo } from "./components/user-info";
function App() {
  return (
    <>
      <DataSourceWithRender
        getData={async () => {
          const response = await axios.get("/users/3");
          return response.data;
        }}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceWithRender>
      <DataSourceWithRender
        getData={async () => {
          const response = await axios.get("/books/3");
          return response.data;
        }}
        render={(resource) => <BookInfo book={resource} />}
      />
    </>
  );
}
export default App;
