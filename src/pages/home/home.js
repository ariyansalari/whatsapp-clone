import { useSelector } from "react-redux";

export const HomeScreen = () => {
    const {user}=useSelector((state)=>state.user)
  
  return <div className="flex flex-col">hello baby i want to logout you</div>;
};
