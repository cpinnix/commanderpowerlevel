"use client";

import { useState, useEffect } from "react";
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
import { v4 } from "uuid";
import PowerWeights from "@/weights/power.csv";
import { difference } from "lodash-es";
import { ReloadIcon } from "@radix-ui/react-icons";

const cardNames = PowerWeights.map(({ name }) => name);

const userIdKey = "user.id";
const weightHistoryKey = "user.weight.history";

export default function FormWeight() {
  const [submitting, setSubmitting] = useState(false);

  const [weight, setWeight] = useState(5);

  const [name, setName] = useState("");

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const weightHistory = localStorage.getItem(weightHistoryKey);
      const notWeighted = difference(cardNames, weightHistory);
      const randomNotWeightedName =
        notWeighted[Math.floor(Math.random() * notWeighted.length)];

      setName(randomNotWeightedName);
    }
  }, []);

  const [type, setType] = useState("power");

  return (
    <div
      {...{
        className: cn(`grid`, `gap-4`),
      }}
    >
      <Card>
        <CardContent
          {...{
            className: cn(`flex`, `justify-center`, `items-center`),
          }}
        >
          <div
            {...{
              className: cn(`text-6xl`, `font-bold`, `mt-6`),
            }}
          >
            ⚡
          </div>
        </CardContent>
      </Card>
      <Card
        {...{
          className: cn(`max-w-96`),
        }}
      >
        <CardHeader>
          <CardTitle className="text-gray-400">
            How <span className="text-yellow-600">Powerful</span> is{" "}
            <a
              {...{
                href: `https://scryfall.com/search?q=` + name,
                target: "_blank",
                className: cn(`underline`, `underline-offset-4`, `text-black`),
              }}
            >
              {name}?
            </a>
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
          {!submitting ? (
            <Button
              {...{
                disabled: !name,
                async onClick() {
                  setSubmitting(true);

                  let userId = localStorage.getItem(userIdKey);

                  if (!userId) {
                    userId = v4();

                    localStorage.setItem("user.id", userId);
                  }

                  let weightHistory = localStorage.getItem(weightHistoryKey);

                  if (!weightHistory) {
                    weightHistory = [];
                  } else {
                    weightHistory = JSON.parse(weightHistory);
                  }

                  if (process.env.NODE_ENV !== "development") {
                    await fetch("api/weight/write", {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ name, type, weight, userId }),
                    });
                  }

                  weightHistory.push(name);

                  const maxHistoryLength = 100;

                  if (weightHistory.length > maxHistoryLength) {
                    weightHistory = weightHistory.slice(-maxHistoryLength);
                  }

                  localStorage.setItem(
                    weightHistoryKey,
                    JSON.stringify(weightHistory)
                  );

                  const notWeighted = difference(cardNames, weightHistory);
                  const randomNotWeightedName =
                    notWeighted[Math.floor(Math.random() * notWeighted.length)];

                  await new Promise((resolve) => setTimeout(resolve, 1000));

                  setName(randomNotWeightedName);
                  setWeight(5);

                  setSubmitting(false);
                },
              }}
            >
              Submit
            </Button>
          ) : (
            <Button disabled>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
