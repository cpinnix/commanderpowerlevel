"use client";

import { cn } from "@/lib/utils";
import DeckInput from "./DeckInput";
import DeckTable from "./DeckTable";
import PowerLevelCard from "./PowerLevelCard";
import PowerLevelVoteDialog from "./PowerLevelVoteDialog";

export default function PowerLevelForm() {
  return (
    <div>
      <main
        {...{
          className: cn(`py-8`, `space-y-4`),
        }}
      >
        <DeckInput />
        <PowerLevelCard />
        <DeckTable />
        <PowerLevelVoteDialog />
      </main>
      <footer></footer>
    </div>
  );
}
