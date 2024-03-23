import { SideBar } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConversations } from "system";

export const HomeScreen = () => {
  const dispatch=useDispatch()

const {user}=useSelector((state)=>state.user)

  useEffect(()=>{
if(user){
  dispatch(getConversations(user.token))
}

  },[user])
  return (
    <div className="h-screen dark:bg-dark_bg_1  flex items-center justify-center py-[19px] overflow-hidden">
    <div className="container h-screen flex">
      <SideBar/>
    </div>
    </div>
  );
};
