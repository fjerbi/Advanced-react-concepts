import React from "react";
import { StandardList } from "./components/lists/Standard";
import { authors } from "./data/authors";
import { SmallAuthorListItem } from "./components/authors/SmallListItems";
import { LargeAuthorListItem } from "./components/authors/LargeListItems";
import { books } from "./data/books";
import { SmallBookListItem } from "./components/books/SmallListItems";
import { LargeBookListItem } from "./components/books/LargeListItems";
import { NumberedList } from "./components/lists/Numbered";
import { Modal } from "./components/Modal";

function App2() {
  return (
    <>
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>
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
      <NumberedList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
      <StandardList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallBookListItem}
      />
      <StandardList
        items={books}
        sourceName={"book"}
        ItemComponent={LargeBookListItem}
      />
    </>
  );
}
export default App2;
