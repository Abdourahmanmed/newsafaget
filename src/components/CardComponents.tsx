import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

interface cardProps {
  image: string;
}

const CardComponents: React.FC<cardProps> = ({ image }) => {
  return (
      <Card className="h-[200px] min-w-[200px] relative overflow-hidden cursor-pointer">
        <CardContent className="h-full w-full p-0">
          <Image
            src={image}
            alt="image de publication"
            fill
            className="object-cover"
          />
        </CardContent>
      </Card>
  );
};

export default CardComponents;
