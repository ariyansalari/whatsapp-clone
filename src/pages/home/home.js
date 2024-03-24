import { SideBar } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConversations } from "system";
import { WhatsappHome } from "./partials";

export const HomeScreen = () => {
  const dispatch=useDispatch()

const {user}=useSelector((state)=>state.user)
const {activeConversation}=useSelector((state)=>state.chat)
console.log(activeConversation);

  useEffect(()=>{
if(user){
  dispatch(getConversations(user.token))
}

  },[user])
  return (
    <div className="h-screen dark:bg-dark_bg_1  flex items-center justify-center py-[19px] overflow-hidden">
    <div className="container h-screen flex">
      <SideBar/>
      {activeConversation.length>0?'home':<WhatsappHome/>}
    </div>
    </div>
  );
};
