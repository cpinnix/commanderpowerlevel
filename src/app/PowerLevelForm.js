"use client";

import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import CommanderWeights from "@/weights/commander.csv";
import PowerWeights from "@/weights/power.csv";
import SaltWeights from "@/weights/salt.csv";

export default function PowerLevelForm() {
  const [deckListInput, setDeckListInput] = useState(``);

  return (
    <div>
      <header
        {...{
          className: cn(`container`, `mx-auto`),
        }}
      >
        <h1
          {...{
            className: cn(`my-4`),
          }}
        >
          Commander Power Level
        </h1>
        <Separator />
      </header>
      <main
        {...{
          className: cn(`container`, `mx-auto`, `py-8`, `space-y-4`),
        }}
      >
        <div
          {...{
            className: cn(`grid`, `grid-cols-3`, `gap-4`),
          }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Commander Score</CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                try {
                  const deckList = deckListInput
                    .split("\n")
                    .map((raw) => raw.split(" "))
                    .map((parts) => ({
                      count: parseInt(parts[0]),
                      name: parts.slice(1, -2).join(" "),
                    }));

                  const commanderCard = deckList[0];

                  const { name } = commanderCard;

                  const weight =
                    CommanderWeights.find((row) => row.name === name)?.weight ||
                    500;

                  const commanderScore = weight;

                  return commanderScore;
                } catch (error) {
                  return <p>Doh! There was an issue.</p>;
                }
              })()}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Power Score</CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                try {
                  const deckList = deckListInput
                    .split("\n")
                    .map((raw) => raw.split(" "))
                    .map((parts) => ({
                      count: parseInt(parts[0]),
                      name: parts.slice(1, -2).join(" "),
                    }));

                  const score = deckList.reduce((score, card) => {
                    const { name, count } = card;

                    const weight =
                      PowerWeights.find((row) => row.name === name)?.weight ||
                      5;

                    return score + weight * count;
                  }, 0);

                  return score;
                } catch (error) {
                  return <p>Doh! There was an issue.</p>;
                }
              })()}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Salt Score</CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                try {
                  const deckList = deckListInput
                    .split("\n")
                    .map((raw) => raw.split(" "))
                    .map((parts) => ({
                      count: parseInt(parts[0]),
                      name: parts.slice(1, -2).join(" "),
                    }));

                  const score = deckList.reduce((score, card) => {
                    const { name, count } = card;

                    const weight =
                      SaltWeights.find((row) => row.name === name)?.weight || 5;

                    return score + weight * count;
                  }, 0);

                  return score;
                } catch (error) {
                  return <p>Doh! There was an issue.</p>;
                }
              })()}
            </CardContent>
          </Card>
        </div>
        <p>Paste Moxfield list below:</p>
        <Textarea
          {...{
            value: deckListInput,
            onChange: (e) => setDeckListInput(e.target.value),
            className: cn(`h-[300px]`),
          }}
        />
        <div>
          {(() => {
            try {
              const deckList = deckListInput
                .split("\n")
                .map((raw) => raw.split(" "))
                .map((parts) => ({
                  count: parseInt(parts[0]),
                  name: parts.slice(1, -2).join(" "),
                }));

              const cardCount = deckList.reduce(
                (count, card) => count + card.count,
                0
              );

              const commanderCard = deckList[0];

              return (
                <p>
                  There are {cardCount} cards in this deck. {commanderCard.name}{" "}
                  is the commander.
                </p>
              );
            } catch (error) {
              return <p>Doh! There was an issue.</p>;
            }
          })()}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
