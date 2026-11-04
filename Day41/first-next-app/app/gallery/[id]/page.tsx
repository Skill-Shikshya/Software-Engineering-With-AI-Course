import Image from "next/image";
import React from "react";
import { type ImageType, Images } from "../page";

export type findImage = ImageType | undefined;
export type IdParams = { params: Promise<{ id: string }> };

async function page({ params }: IdParams) {
  const { id } = await params;
  const image: findImage = Images.find((e) => e.id == id);

  if (!image) {
    return <h1>Image not found</h1>;
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl">This this image details page</h1>
        <div className="flex">
          <Image
            key={image.id}
            src={image.src}
            alt={image.name}
            height={200}
            width={200}
          />
          <div>
            <h2>Name: {image.name}</h2>
            <p>Location: {image.location}</p>
            <p>photographer: {image.photographer}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
