import axios from "axios";
import { BookInfo } from "../components/book-info";
import { DataSource } from "../components/data-source";
import { DataSourceWithRender } from "../components/data-source-with-render";
import { UserInfo } from "../components/user-info";
function App() {
  const getDataFromLocalStorage = (key) => () => {
    return localStorage.getItem(key);
  };

  const Message = ({ msg }) => <h1>{msg}</h1>;
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

      <DataSource
        getData={() => getDataFromLocalStorage("product")}
        resourceName={"msg"}
      >
        <Message />
      </DataSource>

      {/* hybrid approach */}
      <DataSourceWithRender
        getData={async () => {
          try {
            const response = await axios.get("/books/3");
            localStorage.setItem("books", JSON.stringify(response.data));
            return response.data;
          } catch (err) {
            // fallback
            const localData = localStorage.getItem("books");
            return localData ? JSON.parse(localData) : [];
          }
        }}
        render={(resource) => <BookInfo book={resource} />}
      />
    </>
  );
}
export default App;
