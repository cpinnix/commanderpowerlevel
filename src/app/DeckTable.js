"use client";

import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CaretSortIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { orderBy } from "lodash-es";
import useStore from "./store";

export default function DeckTable() {
  const deckListInput = useStore((store) => store.deckListInput);
  const powerWeights = useStore((store) => store.powerWeights);
  const historyWeights = useStore((store) => store.historyWeights);
  const tableSort = useStore((store) => store.tableSort);
  const onChangeTableSort = useStore((store) => store.onChangeTableSort);

  const data = useMemo(() => {
    let data = deckListInput
      .split("\n")
      .map((raw) => raw.split(" "))
      .map((parts) => {
        const count = parseInt(parts[0]);
        const name = parts
          .slice(1)
          .join(" ")
          .match(new RegExp(/(.*?)(?= \()/))[0];

        let powerWeight = powerWeights?.find(
          (weight) => weight.name === name
        )?.weight;

        if (powerWeight) {
          powerWeight = parseFloat(powerWeight);
        }

        const historyWeight = historyWeights?.find(
          (weight) => weight.name === name
        )?.weight;

        let weight = powerWeight || historyWeight || 5;

        const overridden = Boolean(historyWeight);

        return {
          count,
          name,
          weight,
          overridden,
        };
      });

    const sort = tableSort;

    data = orderBy(
      data,
      sort.map(({ id }) => id),
      sort.map(({ direction }) => direction)
    );

    return data;
  }, [tableSort, deckListInput, powerWeights, historyWeights]);

  return (
    data.length > 0 && (
      <Card>
        <CardHeader>
          <CardTitle>Cards</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>
                  <Button
                    {...{
                      variant: "ghost",
                      className: cn(`-ml-3.5`),
                      onClick() {
                        const targetId = "name";

                        let sort = [...tableSort];

                        let currentDirection = sort.find(
                          ({ id }) => id === targetId
                        )?.direction;

                        sort = sort.filter(({ id }) => id !== targetId);

                        let newDirection;

                        if (currentDirection === "desc") {
                          newDirection = "asc";
                        } else {
                          newDirection = "desc";
                        }

                        sort = [
                          {
                            id: targetId,
                            direction: newDirection,
                          },
                          ...sort,
                        ];

                        onChangeTableSort(sort);
                      },
                    }}
                  >
                    Name
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    {...{
                      variant: "ghost",
                      className: cn(`-ml-3.5`),
                      onClick() {
                        const targetId = "weight";

                        let sort = [...tableSort];

                        let currentDirection = sort.find(
                          ({ id }) => id === targetId
                        )?.direction;

                        sort = sort.filter(({ id }) => id !== targetId);

                        let newDirection;

                        if (currentDirection === "desc") {
                          newDirection = "asc";
                        } else {
                          newDirection = "desc";
                        }

                        sort = [
                          {
                            id: targetId,
                            direction: newDirection,
                          },
                          ...sort,
                        ];

                        onChangeTableSort(sort);
                      },
                    }}
                  >
                    Power Level
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map(({ count, name, weight, overridden }, index) => (
                <TableRow key={index}>
                  <TableCell>{count}</TableCell>
                  <TableCell>
                    <a
                      {...{
                        href: `https://scryfall.com/search?q=` + name,
                        target: "_blank",
                        className: cn(
                          `underline`,
                          `underline-offset-4`,
                          `text-black`
                        ),
                      }}
                    >
                      {name}
                    </a>
                  </TableCell>
                  <TableCell>
                    {overridden ? (
                      <div
                        {...{
                          className: cn(
                            `flex`,
                            `inline-flex items-center justify-center h-9 px-4 py-2`,
                            `border`,
                            `rounded-md`,
                            `border-gray-100`
                          ),
                        }}
                      >
                        <LightningBoltIcon
                          {...{
                            className: cn("mr-1 h-3.5 w-3.5 text-yellow-500"),
                          }}
                        />
                        {weight}
                      </div>
                    ) : (
                      <Button
                        {...{
                          variant: "outline",
                          onClick() {
                            useStore
                              .getState()
                              .onChangePowerLevelVoteName(name);
                          },
                        }}
                      >
                        <LightningBoltIcon
                          {...{
                            className: cn("mr-1 h-3.5 w-3.5 text-yellow-500"),
                          }}
                        />
                        {weight}
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    )
  );
}
