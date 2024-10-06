import PowerWeights from "@/weights/power.csv";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { differenceInHours } from "date-fns";
import deckSample from "./deckSample";

const weightHistoryKey = "user.weight.history.v2";
const deckInputKey = "user.deck";

let historyWeights;
let deckListInput;

if (typeof localStorage !== "undefined") {
  historyWeights = localStorage.getItem(weightHistoryKey);

  if (!historyWeights) {
    historyWeights = [];
  } else {
    historyWeights = JSON.parse(historyWeights);
  }

  historyWeights = historyWeights.filter(
    ({ timestamp }) => differenceInHours(new Date(), new Date(timestamp)) < 1
  );

  deckListInput = localStorage.getItem(deckInputKey);
}

const useStore = create(
  subscribeWithSelector((set) => ({
    deckListInput: deckListInput || deckSample,
    powerWeights: PowerWeights,
    historyWeights: historyWeights,
    deckList: [],
    onChangeHistoryWeights: (historyWeights) =>
      set({
        historyWeights,
      }),
    onChangeDecklistInput: (deckListInput) => {
      set({
        deckListInput,
      });
    },

    powerLevelVoteName: null,
    onChangePowerLevelVoteName: (powerLevelVoteName) =>
      set({ powerLevelVoteName }),
  }))
);

if (typeof localStorage !== "undefined") {
  useStore.subscribe(
    (store) => store.historyWeights,
    (historyWeights) => {
      localStorage.setItem(weightHistoryKey, JSON.stringify(historyWeights));
    }
  );

  useStore.subscribe(
    (store) => store.deckListInput,
    (deckInput) => {
      localStorage.setItem(deckInputKey, deckInput);
    }
  );
}

export default useStore;
