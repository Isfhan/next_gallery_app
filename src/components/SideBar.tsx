// Import custom components
import { SideBarItems } from "./SideBarItems";

// Import stuff from lib
import { cn } from "@/lib/utils";




export function SideBar({ className }: React.HTMLAttributes<HTMLDivElement>) {

  return (

    <div className={cn("pb-12 w-1/5", className)}>

      <div className="space-y-4 py-4">

        <div className="px-3 py-2">

          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>

          <div className="space-y-1">

            <SideBarItems />

          </div>

        </div>

      </div>

    </div>

  )
}