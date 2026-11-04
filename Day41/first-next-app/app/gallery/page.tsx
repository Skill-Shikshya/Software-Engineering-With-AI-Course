import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ImageType {
  id: string;
  name: string;
  src: string;
  photographer: string;
  location: string;
}

export const Images: ImageType[] = [
  {
    id: "1",
    name: "Great Wall of China",
    src: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=600&fit=crop&q=60",
    photographer: "Photo by Max van den Oetelaar on Unsplash",
    location: "China",
  },
  {
    id: "2",
    name: "Petra",
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=600&fit=crop&q=60",
    photographer: "Photo by Spencer Davis on Unsplash",
    location: "Jordan",
  },
  {
    id: "3",
    name: "Christ the Redeemer",
    src: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=400&h=600&fit=crop&q=60",
    photographer: "Photo by Andrea Reggers on Unsplash",
    location: "Brazil",
  },
  {
    id: "4",
    name: "Colosseum",
    src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=600&fit=crop&q=60",
    photographer: "Photo by Andrea Ferreyra on Unsplash",
    location: "Italy",
  },
  {
    id: "5",
    name: "Machu Picchu",
    src: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=600&fit=crop&q=60",
    photographer: "Photo by Willian Justen de Vasconcellos on Unsplash",
    location: "Peru",
  },
];

function page() {
  return (
    <>
      <h1>The Photo Gallery</h1>
      <div className="flex">
        {Images.map((p) => (
          <Link key={p.id} href={"/gallery/" + p.id}>
            <Image src={p.src} alt={p.name} height={400} width={500} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default page;
