"use client";

import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import CommanderWeights from "@/weights/commander.csv";
import PowerWeights from "@/weights/power.csv";
import PepperWeights from "@/weights/pepper.csv";

const CardNameRegExp = new RegExp(/(?<=[0-9] )(.*?)(?= \()/);

export default function PowerLevelForm() {
  const [deckListInput, setDeckListInput] =
    useState(`1 Atraxa, Praetors' Voice (2XM) 190
1 Abundant Growth (AFC) 150
1 Adrix and Nev, Twincasters (MKC) 198
1 Anointed Procession (AKH) 2
1 Aura Shards (PLST) INV-233
1 Awakening Zone (2XM) 153
1 Bastion of Remembrance (IKO) 73
1 Bennie Bracks, Zoologist (NCC) 86
1 Blood Artist (2X2) 70
1 Boseiju, Who Endures (NEO) 266
1 Bountiful Promenade (CLB) 348
1 Breeding Pool (RNA) 246
1 Brokers Ascendancy (SNC) 170
1 Command Tower (CC2) 8
1 Crawlspace (DMR) 217
1 Cultivate (LCC) 235
1 Deathspore Thallid (TSR) 109
1 Demonic Tutor (UMA) 93
1 Doubling Season (CMM) 283
1 Elvish Farmer (FEM) 66
1 Esper Sentinel (MH2) 12
1 Farseek (LCC) 242
1 Fertilid (IKO) 152
1 Fierce Guardianship (CMM) 94
1 Flooded Strand (MH3) 220
4 Forest (IKO) 272
1 Fungal Rebirth (M21) 182
1 Ghostly Prison (CHK) 10
1 Godless Shrine (RNA) 248
1 Hallowed Fountain (SLD) 123
1 Indatha Triome (IKO) 248
2 Island (IKO) 263
1 Kodama's Reach (MOC) 306
1 Llanowar Elves (EMA) 175
1 Malakir Rebirth // Malakir Mire (ZNR) 111
1 Marsh Flats (MH2) 248
1 Maze of Ith (DMR) 250
1 Mirkwood Bats (LTR) 95
1 Misty Rainforest (MH2) 250
1 Moldervine Reclamation (M20) 214
1 Mondrak, Glory Dominus (ONE) 23
1 Morphic Pool (CLB) 357
1 Mycologist (TSR) 29
1 Mystical Tutor (DMR) 60
1 No Mercy (DMR) 95
1 Overgrown Tomb (GRN) 253
1 Parallel Lives (P22) 3 *F*
1 Pitiless Plunderer (RIX) 81
3 Plains (IKO) 260
1 Polluted Delta (MH3) 224
1 Propaganda (TMP) 80
1 Raffine's Tower (SNC) 254
1 Rampant Growth (CMR) 432
1 Rejuvenating Springs (CMR) 354
1 Resourceful Defense (NCC) 19
1 Rhystic Study (JMP) 169
1 Rogue's Passage (C21) 312
1 Sakura-Tribe Elder (CLB) 832
1 Sea of Clouds (BBD) 84
1 Skullclamp (DST) 140
1 Smothering Tithe (P22) 5 *F*
1 Sol Ring (CMM) 410
1 Spara's Headquarters (SNC) 257
1 Sprout Swarm (FUT) 138
2 Swamp (IKO) 266
1 Syr Konrad, the Grim (ELD) 107
1 Teferi's Protection (2X2) 32
1 Temple Garden (GRN) 258
1 Tendershoot Dryad (RIX) 147
1 Thallid (MMA) 167
1 Thallid Shell-Dweller (TSR) 237
1 The One Ring (LTR) 246
1 The Ozolith (IKO) 237
1 Three Visits (CMR) 261
1 Undergrowth Stadium (CMR) 359
1 Urborg, Tomb of Yawgmoth (TSR) 287
1 Utopia Mycon (TSR) 244
1 Vampiric Tutor (CMR) 156
1 Vault of Champions (CMR) 360
1 Verdant Catacombs (MH2) 260
1 Verdant Embrace (AFC) 173
1 Verdant Force (DOM) 187
1 Vitaspore Thallid (PLC) 143
1 Vraska, Betrayal's Sting (ONE) 115
1 Watery Grave (GRN) 259
1 Welcoming Vampire (VOW) 46
1 Wild Growth (DMR) 184
1 Windswept Heath (MH3) 235
1 Worldly Tutor (DMR) 185
1 Xavier Sal, Infested Captain (LCC) 14
1 Yavimaya, Cradle of Growth (MH2) 261
1 Zagoth Triome (IKO) 259
1 Zulaport Cutthroat (A25) 117`);

  return (
    <div>
      <main
        {...{
          className: cn(`py-8`, `space-y-4`),
        }}
      >
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
                  onChange: (e) => setDeckListInput(e.target.value),
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
        <div
          {...{
            className: cn(`grid`, `lg:grid-cols-4`, `gap-4`),
          }}
        >
          {/* <Card>
            <CardHeader>
              <CardTitle>Commander Score</CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                try {
                  const deckList = deckListInput.split("\n").map((raw) => {
                    return {
                      count: parseInt(raw.split(" ")[0]),
                      name: CardNameRegExp.exec(raw)[0],
                    };
                  });

                  const commanderCard = deckList[0];

                  const { name } = commanderCard;

                  const weight =
                    CommanderWeights.find((row) => row.name === name)?.weight ||
                    500;

                  const commanderScore = weight;

                  return (
                    <p
                      {...{
                        className: cn(`text-6xl`, `font-bold`),
                      }}
                    >
                      {commanderScore}
                    </p>
                  );
                } catch (error) {
                  return <p>Doh! There was an issue.</p>;
                }
              })()}
            </CardContent>
          </Card> */}
          <Card>
            <CardHeader>
              <div
                {...{
                  className: cn(`text-6xl`),
                }}
              >
                ⚡
              </div>
              <CardTitle>Power Score</CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                try {
                  const deckList = deckListInput.split("\n").map((raw) => {
                    return {
                      count: parseInt(raw.split(" ")[0]),
                      name: CardNameRegExp.exec(raw)[0],
                    };
                  });

                  const cardCount = deckList.length;

                  let score =
                    deckList.reduce((score, card) => {
                      const { name, count } = card;

                      const weight =
                        PowerWeights.find((row) => row.name === name)?.weight ||
                        5;

                      return score + weight * count;
                    }, 0) / cardCount;

                  score = Math.round(score * 100) / 100;

                  return (
                    <p
                      {...{
                        className: cn(`text-6xl`, `font-bold`),
                      }}
                    >
                      {score}
                    </p>
                  );
                } catch (error) {
                  return <p>Doh! There was an issue.</p>;
                }
              })()}
            </CardContent>
          </Card>
          {/* <Card>
            <CardHeader>
              <CardTitle>Pepper Score</CardTitle>
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

                  const cardCount = deckList.length;

                  let score =
                    deckList.reduce((score, card) => {
                      const { name, count } = card;

                      const weight =
                        PepperWeights.find((row) => row.name === name)
                          ?.weight || 5;

                      return score + weight * count;
                    }, 0) / cardCount;

                  score = Math.round(score * 100) / 100;

                  return (
                    <p
                      {...{
                        className: cn(`text-6xl`, `font-bold`),
                      }}
                    >
                      {score}
                    </p>
                  );
                } catch (error) {
                  return <p>Doh! There was an issue.</p>;
                }
              })()}
            </CardContent>
          </Card> */}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
