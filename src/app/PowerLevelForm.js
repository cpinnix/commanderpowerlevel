"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import DeckInput from "./DeckInput";
import DeckTable from "./DeckTable";
import PowerLevelCard from "./PowerLevelCard";
import PowerLevelVoteDialog from "./PowerLevelVoteDialog";

function ClientOnly({ children }) {
  const [timestamp, touch] = useState(null);

  useEffect(() => {
    touch(Date.now());
  }, []);

  return timestamp && children;
}

export default function PowerLevelForm() {
  return (
    <ClientOnly>
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
    </ClientOnly>
  );
}
