import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import useStore from "./store";

export default function DeckInput() {
  const deckListInput = useStore((store) => store.deckListInput);
  const onChangeDecklistInput = useStore(store => store.onChangeDecklistInput); // prettier-ignore

  return (
    <Card>
      <CardHeader>
        <CardTitle>Deck Entry</CardTitle>
        <CardDescription>Paste Moxfield list below.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-1.5">
          <Textarea
            {...{
              value: deckListInput,
              onChange: (e) => onChangeDecklistInput(e.target.value),
              className: cn(`h-[300px]`),
            }}
          />
          <p className="text-sm text-muted-foreground">
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
                  <span>
                    There are {cardCount} cards in this deck.{" "}
                    {commanderCard.name} is the commander.
                  </span>
                );
              } catch (error) {
                return <p>Doh! There was an issue.</p>;
              }
            })()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
