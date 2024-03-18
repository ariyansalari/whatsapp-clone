import React from "react";
import { useSelector } from "react-redux";
import { ConversationItem } from "./partials";

export const ConversationsSideBar = () => {
  const { conversations } = useSelector((state) => state.chat);

  return (
    <div className="convos scrollbar">
      <ul>
        {conversations &&
          conversations.map((convo, index) => (
            <ConversationItem key={convo._id} convo={convo} />
          ))}
      </ul>
    </div>
  );
};
