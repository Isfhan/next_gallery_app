"use client"

// Import stuff from react
import { useState, useTransition } from "react";

// Import stuff from next-cloudinary
import { CldImage, type CldImageProps } from "next-cloudinary"

// Import server action
import {
  addImageAsFavoriteAction,
  removeImageAsFavoriteAction
} from "@/app/actions";

// Import Icons
import { Heart, Loader } from "lucide-react";
import { useRouter } from "next/navigation";



export default function CloudinaryImage(props: CldImageProps & { tags: string[] }) {

  // Initialize state to track whether the image is marked as a favorite
  const [isImageFavorite, setImageFavorite] = useState<boolean>(props.tags.includes("favorite"));

  // Initialize a transition to handle asynchronous state updates
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const handleHeart = async (public_id: string, addImageAsFavorite: boolean) => {

    // Check favorite/unfavorite 
    if (addImageAsFavorite) {

      startTransition(async () => {

        // Start a transition to add the image as a favorite tag
        await addImageAsFavoriteAction(public_id);

        // Set the image as a favorite
        setImageFavorite(true);

      });

      router.refresh();

    } else {


      startTransition(async () => {

        // Start a transition to remove the image from favorites tag
        await removeImageAsFavoriteAction(public_id);

        // Set the image as a unfavorite
        setImageFavorite(false);

      });

      router.refresh();
    }

  };


  const RenderHeart = () => {

    // Render the heart icon based on whether the image is a favorite
    return isImageFavorite ? (
      <Heart
        width="30"
        height="30"
        className="absolute top-2 right-2 cursor-pointer hover:fill-white hover:text-white fill-red-500 text-red-500"
        onClick={() => handleHeart(props.src, false)}
      />

    ) : (
      <Heart
        width="30"
        height="30"
        className="absolute top-2 right-2 cursor-pointer hover:fill-red-500 hover:text-red-500  fill-white text-white"
        onClick={() => handleHeart(props.src, true)}
      />
    )

  }


  return (

    <div className="relative">

      {/* Render the Cloudinary image */}
      <CldImage{...props} />

      {
        !isPending ? (

          // Render the heart icon if the operation is not pending
          <RenderHeart />

        ) : (

          // Render a loader icon if the operation is pending
          <Loader
            width="30"
            height="30"
            className="absolute top-2 right-2 animate-spin fill-white text-white"
          />

        )
      }

    </div>
  )

}