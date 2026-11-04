import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { findImage, IdParams } from "@/app/gallery/[id]/page";
import { Images } from "@/app/gallery/page";
import Image from "next/image";

export default async function page({ params }: IdParams) {
  const { id } = await params;
  const image: findImage = Images.find((e) => e.id == id);

  return (
    <Dialog defaultOpen={true}>
      {/* <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} /> */}
      <DialogContent className="w-fit">
        {image ? (
          <>
            <h1>{image.name}</h1>
            <Image
              key={image.id}
              src={image.src}
              alt={image.name}
              height={200}
              width={200}
            />
          </>
        ) : (
          "Image  Not Found"
        )}
      </DialogContent>
    </Dialog>
  );
}
