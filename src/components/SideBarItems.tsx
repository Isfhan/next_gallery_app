"use client";

// Import stuff from next
import Link from "next/link";
import { usePathname } from 'next/navigation';

// Import shadcn components
import { Button } from "@/components/ui/button";

// Import Icons
import { ImageIcon, Folder, Heart } from "lucide-react";


export function SideBarItems() {

    const pathname = usePathname();

    const NavData = [
        {
            href: '/',
            text: 'Gallery'
        },
        {
            href: '/albums',
            text: 'Albums'
        },
        {
            href: '/favorites',
            text: 'Favorites'
        }
    ]

    return (

        <>
            {
                NavData.map((item) => (

                    <Button key={item.href} variant={item.href == pathname ? "secondary" : "ghost"} className="w-full justify-start" asChild>
                        <Link href={item.href}>
                            <ImageIcon className="pr-2" />
                            {item.text}
                        </Link>
                    </Button>

                ))
            }
        </>

    )
}