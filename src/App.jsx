import React from "react";
import { StandardList } from "./components/lists/Standard";
import { authors } from "./data/authors";
import { SmallAuthorListItem } from "./components/authors/SmallListItems";
import { LargeAuthorListItem } from "./components/authors/LargeListItems";


function App() {
  return (
    <>
      <StandardList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
      <StandardList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
    </>
  );
}
export default App;