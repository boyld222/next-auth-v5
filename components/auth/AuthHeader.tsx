import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600", "500"],
});

type Props = {
  label: string;
};

const AuthHeader = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>
        Auth Header
      </h1>
      <p className="text-muted-foreground text-sm">{props.label}</p>
    </div>
  );
};

export default AuthHeader;
