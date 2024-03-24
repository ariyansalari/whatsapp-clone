import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { open_create_conversation } from "system";

export const ConversationItem = ({ convo }) => {
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>state.user)
  const {token}=user
  const values={
    receiver_id:'',
    token
  }
  const openConversation=()=>{
dispatch(open_create_conversation(values))
  }
  return (
    <li
    onClick={()=>openConversation()}
    className="list-none h-[32px] w-full dark:bg-dark_bg_1 hover:dark:bg-dark_bg_2 cursor-pointer dark:text-dark_text_1 ">
      <div className="relative w-full flex items-center justify-between py-[10px]">
        <div className="flex items-center gap-x-3">
          <div className="relative min-w-[50px] max-w-[50px] h-[50x] rounded-full overflow-hidden">
            <img
              src={convo.picture}
              alt={convo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex flex-col ">
            <h1 className="font-bold flex items-center gap-x-2 ">
              {convo.name}
            </h1>
            <div className="flex items-center gap-x-1 dark:text-dark_text_2">
                <div className=" flex-1 items-center gap-x-1 dark:text-dark_text_2">
                    <p>{convo.latesetMessage?.message}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-16 border-b dark:border-b-dark_border_1"></div>
    </li>
  );
};
