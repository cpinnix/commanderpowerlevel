"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export default function FormWeight() {
  const [weight, setWeight] = useState(5);

  return (
    <Card
      {...{
        className: cn(`max-w-96`),
      }}
    >
      <CardHeader>
        <CardTitle className="text-gray-400">
          How Powerful is <span className="text-black">Sol Ring?</span>
        </CardTitle>
        <CardDescription>
          Refer to{" "}
          <a
            {...{
              href: "https://github.com/cpinnix/commanderpowerlevel/tree/main?tab=readme-ov-file#power-level",
              target: "_blank",
              className: cn(`underline`, `underline-offset-4`),
            }}
          >
            Power Level documentation
          </a>{" "}
          for leveling.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p
          {...{
            className: cn(`text-6xl`, `font-bold`),
          }}
        >
          {weight}
        </p>
        <br />
        <Slider
          {...{
            value: [weight],
            max: 10,
            step: 1,
            onValueChange([weight]) {
              setWeight(weight);
            },
          }}
        />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}
