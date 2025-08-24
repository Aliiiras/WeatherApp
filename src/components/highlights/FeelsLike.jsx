import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar.jsx";
import React from "react";

function FeelsLike({ title }) {
  return (
    <>
      <Card className="grid grid-rows-3 place-items-center w-full h-[90%] bg-[#232323] text-white">
        <CardHeader className="flex flex-row items-center justify-center gap-2">
          <Avatar>
            <AvatarImage src="/" alt="" className="h-6 w-6" />
          </Avatar>
          <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl">
            Feels like
          </CardTitle>
        </CardHeader>

        <CardDescription className="flex items-center justify-center">
          <div className="text-white pt-4 pb-4">
            <span className="text-2xl font-bold">{title}</span>
            <span className="text-sm"> °C</span>
          </div>
        </CardDescription>

        <CardContent className="flex items-center justify-center">
          <div className="text-l text-white">6:49 Am</div>
        </CardContent>
      </Card>
    </>
  );
}

export default FeelsLike;
