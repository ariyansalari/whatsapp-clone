import { FilterIcon, ReturnIcon, SearchIcon } from "assets";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

export const SearchSideBar = ({ searchLength ,setSearchReasults}) => {
  const [show, setShow] = useState(false);
  const {user}=useSelector((state)=>state.user)
  const {token}=user
  const handleSearch =async (e) => {
    if(e.target.value && e.key==="Enter"){
      try{
const {data}=await axios.get(`${process.env.REACT_APP_API_URL}/user?search=${e.target.value}`,{
  headers:{
    Authorization:`Bearer ${token}`
  }

})
setSearchReasults(data)
      }
      catch (error){
        console.log(error.response.statusText);
      }
    }else{
      setSearchReasults([])
    }
  };
  return (
    <div className="h-[40px] py-1.5">
      <div className="p-[10px]">
        <div className="flex items-center gap-x-2">
          <div className="flex w-full dark:bg-dark_bg_2 rounded-lg pl-2">
            {show || searchLength > 0 ? (
              <span onClick={()=>setSearchReasults([])} className="w-8 flex items-center justify-center rotateAnimation cursor-pointer">
                <ReturnIcon className={"fill-green_1 w-5"} />
              </span>
            ) : (
              <span className="w-8 flex items-center justify-center ">
                <SearchIcon className={"dark:fill-dark_svg_2 w-5"} />
              </span>
            )}
            <input
              type="text"
              placeholder="Search or start a new chat"
              className="input"
              onFocus={() => setShow(true)}
              onBlur={() => searchLength === 0 && setShow(false)}
              onKeyDown={(e) => handleSearch(e)}
            />
          </div>
          <button className="btn">
            <FilterIcon className={"dark:fill-dark_svg_2"} />
          </button>
        </div>
      </div>
    </div>
  );
};
