import { ArrowIcon, CloseIcon, NotificationIcon } from "assets"

export const NotificationSideBar = () => {
  return (
    <div className="h-[90px] dark:bg-dark_bg_3 flex items-center p-[13px]">
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-x-4">
                <div className="cursor-pointer">
                <NotificationIcon className='dark:fill-blue_1 '/>

                </div>
                <div className="flex flex-col ">
                    <span className="textPrimary ">Get notified of new messages</span>
                    <span className="textSecondary mt-0.5 flex items-center gap-0.5">Turn on desktop NotificationSideBar
                    <ArrowIcon className='dark:fill-dark_svg_2 mt-1'/>
                    </span>

                </div>
            </div>
            <div className="cursor-pointer">
                <CloseIcon className='dark:fill-dark_svg_2'/>
            </div>
        </div>
    </div>
  )
}
