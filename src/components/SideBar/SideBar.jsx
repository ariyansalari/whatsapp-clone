import { useState } from "react"
import { ConversationsSideBar, HeaderSideBar, NotificationSideBar, SearchSideBar } from "./partials"

export const SideBar = () => {
  const [searchResults,setSearchReasults]=useState([])
  return (
    <div className="w-[40%] h-full select-none ">
<HeaderSideBar/>
<NotificationSideBar/>
<SearchSideBar searchLength={searchResults.length}/>
<ConversationsSideBar/>
    </div>
  )
}
