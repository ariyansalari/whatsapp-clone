import { HeaderSideBar, NotificationSideBar } from "./partials"

export const SideBar = () => {
  return (
    <div className="w-[40%] h-full select-none ">
<HeaderSideBar/>
<NotificationSideBar/>
    </div>
  )
}
