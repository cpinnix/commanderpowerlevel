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
  const [deckListInput, setDeckListInput] =
    useState(`1 Orvar, the All-Form (KHM) 70
1 Ancient Tomb (TMP) 315
1 Arcane Signet (CMM) 367
1 Archaeomancer (UMA) 45
1 Archmage Emeritus (STX) 37
1 Archmage's Charm (MH1) 40
1 Argent Mutation (NPH) 27
1 Blightsteel Colossus (2XM) 235
1 Brainstorm (2XM) 44
1 Cerulean Wisps (SHM) 31
1 Chilling Trap (ZNR) 50
1 Clockspinning (TSP) 53
1 Commander's Plate (CMR) 305
1 Consecrated Sphinx (IMA) 47
1 Crystal Spray (INV) 50
1 Cyclonic Rift (CMM) 84
1 Defy Gravity (UMA) 48
1 Dizzy Spell (RAV) 43
1 Dream's Grip (MRD) 34
1 Dreamstone Hedron (CMR) 307
1 Enervate (ICE) 67
1 Fact or Fiction (EMA) 48
1 Flooded Strand (MH3) 220
1 Ghostly Flicker (CMM) 98
1 Glasspool Mimic // Glasspool Shore (ZNR) 60
1 Glen Elendra Archmage (UMA) 58
1 Grim Monolith (ULG) 126
1 Infuse (ICE) 80
27 Island (SLD) 386
1 Jeweled Lotus (CMR) 319
1 Jin-Gitaxias, Progress Tyrant (NEO) 59
1 Jinx (HML) 29
1 Jolt (MIR) 70
1 Lightning Greaves (2XM) 267
1 Lithoform Engine (ZNR) 245
1 Malevolent Hermit // Benevolent Geist (MID) 61
1 Meteor Golem (AFC) 210
1 Mind Games (STH) 38
1 Misty Rainforest (MH2) 250
1 Mizzium Skin (RTR) 45
1 Moonlace (TSP) 68
1 Muddle the Mixture (RAV) 60
1 Myr Battlesphere (2XM) 276
1 Mystic Sanctuary (ELD) 247
1 Otawara, Soaring City (NEO) 271
1 Palinchron (ULG) 38
1 Peregrine Drake (DMR) 65
1 Platinum Angel (SLD) 496
1 Platinum Emperion (UMA) 233
1 Polluted Delta (MH3) 224
1 Propaganda (TMP) 80
1 Roaming Throne (LCI) 258
1 Scalding Tarn (MH2) 254
1 Shimmering Mirage (APC) 30
1 Siren Stormtamer (CMR) 96
1 Slip Out the Back (SNC) 62
1 Sludge Monster (MID) 76
1 Sol Ring (CMM) 410
1 Solemn Simulacrum (M21) 239
1 Step Through (MH2) 66
1 Strip Mine (4ED) 363
1 Swarmyard (TSR) 284
1 The One Ring (LTR) 246
1 Thermal Flux (CSP) 49
1 Thirst for Discovery (VOW) 85
1 Thran Dynamo (CMM) 415
1 Trait Doctoring (DGM) 18
1 Twiddle (5ED) 130
1 Twitch (TMP) 99
1 Ulamog, the Ceaseless Hunger (CMM) 5
1 Urza's Saga (MH2) 259
1 Wandering Archaic // Explore the Vastlands (STX) 6
1 Whim of Volrath (TMP) 102
1 Wurmcoil Engine (2XM) 308`);

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
