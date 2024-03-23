import { ChatIcon, CommunityIcon, DotsIcon, StoryIcon } from "assets"
import { useState } from "react"
import { useSelector } from "react-redux"
import { MenuSideBar } from "./partials"

export const HeaderSideBar = () => {
    const {user}=useSelector((state)=>state.user)
    const [showMenu,setShowMenu]=useState(false)
  return (
    <div className="h-[50px] dark:bg-dark_bg_2 flex items-center justify-center p16">
<div className="w-full flex items-center justify-between">
    <button className="btn">
        <img className="w-full h-full rounded-full object-cover" src={user.picture} alt="profileImage"/>
    </button>
    <ul className="flex items-center gap-x-2 ">
<li>
    <button className="btn">
        <CommunityIcon  className='dark:fill-dark_svg_1'/>
    </button>
</li>
<li>
    <button className="btn">
        <StoryIcon  className='dark:fill-dark_svg_1'/>
    </button>
</li>
<li>
    <button className="btn">
        <ChatIcon  className='dark:fill-dark_svg_1'/>
    </button>
</li>
<li className="relative" onClick={()=>setShowMenu(prev=>!prev)}>
    <button className={`btn ${showMenu?"bg-dark_hover_1":""}`}>
        <DotsIcon  className='dark:fill-dark_svg_1'/>
    </button>
    {showMenu?<MenuSideBar/>:null}
</li>
    </ul>
</div>
    </div>
  )
}
