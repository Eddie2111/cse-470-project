'use client';
import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

interface IitemProps {
  data: {
    title: string;
    img: string;
    price: string;
  };
}
 /*
 * CustomCard component
 * used in choices page
 */
export default function CustomCard({data}: IitemProps): JSX.Element {
  const { title, img, price } = data;
  return (
        <Card shadow="sm" isPressable className="w-[350px]">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={title}
              className="w-full object-cover h-[300px]"
              src={img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{title}</b>
            <b> Age: 27 </b>
            <p className="text-default-500">Location: Dhaka</p>
          </CardFooter>
        </Card>
  );
}
