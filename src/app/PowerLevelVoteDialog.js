import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { LightningBoltIcon, ReloadIcon } from "@radix-ui/react-icons";
import { differenceInHours } from "date-fns";
import useStore from "./store";

const userIdKey = "user.id";

export default function PowerLevelVoteDialog() {
  const powerLevelVoteName = useStore((store) => store.powerLevelVoteName); // prettier-ignore
  const onChangePowerLevelVoteName = useStore(store => store.onChangePowerLevelVoteName); // prettier-ignore

  const [submitting, setSubmitting] = useState(false);
  const [weight, setWeight] = useState(5);

  return (
    powerLevelVoteName && (
      <Dialog
        {...{
          open: true,
          onOpenChange() {
            onChangePowerLevelVoteName(null);
          },
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Power Level Vote</DialogTitle>
            <DialogDescription>
              How <span className="text-yellow-600">Powerful</span> is{" "}
              <a
                {...{
                  href: `https://scryfall.com/search?q=` + powerLevelVoteName,
                  target: "_blank",
                  className: cn(
                    `underline`,
                    `underline-offset-4`,
                    `text-black`
                  ),
                }}
              >
                {powerLevelVoteName}
              </a>
              ?
            </DialogDescription>
          </DialogHeader>
          <div
            {...{
              className: cn(`mb-8`),
            }}
          >
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
            <br />
            <p className="text-sm text-muted-foreground">
              Submitting this form casts your power level vote into the
              crowd-sourced power level for this card. Refer to{" "}
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
            </p>
          </div>
          <DialogFooter>
            {!submitting ? (
              <Button
                {...{
                  async onClick() {
                    const name = powerLevelVoteName;

                    setSubmitting(true);

                    let userId = localStorage.getItem(userIdKey);

                    if (!userId) {
                      userId = v4();

                      localStorage.setItem("user.id", userId);
                    }

                    let historyWeights = useStore.getState().historyWeights;

                    if (!historyWeights) {
                      historyWeights = [];
                    }

                    if (process.env.NODE_ENV !== "development") {
                      const type = "power";

                      await fetch("api/weight/write", {
                        method: "POST",
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ name, type, weight, userId }),
                      });
                    }

                    historyWeights = [
                      ...historyWeights,
                      {
                        name,
                        weight,
                        timestamp: Date.now(),
                      },
                    ];

                    historyWeights = historyWeights.filter(
                      ({ timestamp }) =>
                        differenceInHours(new Date(), new Date(timestamp)) < 1
                    );

                    const maxHistoryLength = 100;

                    if (historyWeights.length > maxHistoryLength) {
                      historyWeights = historyWeights.slice(-maxHistoryLength);
                    }

                    useStore.getState().onChangeHistoryWeights(historyWeights);

                    await new Promise((resolve) => setTimeout(resolve, 1000));

                    setSubmitting(false);

                    onChangePowerLevelVoteName(null);
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
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  );
}
