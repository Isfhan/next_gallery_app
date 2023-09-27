// Import shadcn components
import { Button } from "@/components/ui/button"

// Import Icons
import { ImageIcon, Folder, Heart } from "lucide-react"

// Import stuff from lib
import { cn } from "@/lib/utils"



export function SideBar({ className }: React.HTMLAttributes<HTMLDivElement>) {

  return (

    <div className={cn("pb-12 w-1/5", className)}>

      <div className="space-y-4 py-4">

        <div className="px-3 py-2">

          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>

          <div className="space-y-1">

            <Button variant="secondary" className="w-full justify-start">
              <ImageIcon className="pr-2" />
              Gallery
            </Button>

            <Button variant="ghost" className="w-full justify-start">
              <Folder className="pr-2" />
              Albums
            </Button>

            <Button variant="ghost" className="w-full justify-start">
              <Heart className="pr-2" />
              Favorites
            </Button>

          </div>

        </div>

      </div>

    </div>

  )
}