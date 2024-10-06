import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import PowerWeights from "@/weights/power.csv";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import useStore from "./store";

export default function PowerLevelCard() {
  const deckListInput = useStore((store) => store.deckListInput);

  return (
    deckListInput && (
      <Card>
        <CardHeader>
          <CardTitle>Power Score</CardTitle>
        </CardHeader>
        <CardContent>
          {(() => {
            try {
              const deckList = deckListInput.split("\n").map((raw) => {
                return {
                  count: parseInt(raw.split(" ")[0]),
                  name: raw
                    .split(" ")
                    .slice(1)
                    .join(" ")
                    .match(new RegExp(/(.*?)(?= \()/))[0],
                };
              });

              const cardCount = deckList.length;

              let score =
                deckList.reduce((score, card) => {
                  const { name, count } = card;

                  let weight = PowerWeights.find(
                    (row) => row.name === name
                  )?.weight;

                  if (!weight) {
                    weight = 5;
                  }

                  return score + weight * count;
                }, 0) / cardCount;

              score = Math.round(score * 100) / 100;

              return (
                <p
                  {...{
                    className: cn(`text-6xl`, `font-bold`),
                  }}
                >
                  <LightningBoltIcon
                    {...{
                      width: 48,
                      height: 48,
                      className: cn(`mb-3`, `text-yellow-500`, `inline`),
                    }}
                  />{" "}
                  {score}
                </p>
              );
            } catch (error) {
              return <p>Doh! There was an issue.</p>;
            }
          })()}
        </CardContent>
      </Card>
    )
  );
}
