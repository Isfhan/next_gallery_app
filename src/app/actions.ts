'use server'

// Import stuff from cloudinary
import { v2 as cloudinary } from 'cloudinary';



export const addImageAsFavoriteAction = async (public_id: string) => {

  await cloudinary.uploader.add_tag("favorite", [public_id]);
  
}


export const removeImageAsFavoriteAction = async (public_id: string) => {

  await cloudinary.uploader.remove_tag("favorite", [public_id]);

}