import { useState } from "react";
import {
  ConversationsSideBar,
  HeaderSideBar,
  NotificationSideBar,
  SearchResultsSideBar,
  SearchSideBar,
} from "./partials";

export const SideBar = () => {
  const [searchResults, setSearchReasults] = useState([]);
  console.log(searchResults);
  return (
    <div className="w-[40%] h-full select-none ">
      <HeaderSideBar />
      <NotificationSideBar />
      <SearchSideBar
        searchLength={searchResults.length}
        setSearchReasults={setSearchReasults}
      />
      {searchResults.length >= 0 ? <SearchResultsSideBar searchResults={searchResults}/> : <ConversationsSideBar />}
    </div>
  );
};
