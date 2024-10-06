import PowerWeights from "@/weights/power.csv";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { differenceInHours } from "date-fns";
import deckSample from "./deckSample";

const weightHistoryKey = "user.weight.history.v2";
const deckInputKey = "user.deck";
const tableSortKey = "user.table.sort";

let historyWeights;
let deckListInput;
let tableSort;

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

  tableSort = localStorage.getItem(tableSortKey);

  if (!tableSort) {
    tableSort = [];
  } else {
    tableSort = JSON.parse(tableSort);
  }
}

const useStore = create(
  subscribeWithSelector((set) => ({
    deckListInput: deckListInput || deckSample,
    powerWeights: PowerWeights,
    historyWeights: historyWeights,
    deckList: [],
    tableSort: tableSort,
    onChangeHistoryWeights: (historyWeights) =>
      set({
        historyWeights,
      }),
    onChangeDecklistInput: (deckListInput) => {
      set({
        deckListInput,
      });
    },
    onChangeTableSort: (tableSort) =>
      set({
        tableSort,
      }),

    powerLevelVoteName: null,
    onChangePowerLevelVoteName: (powerLevelVoteName) =>
      set({ powerLevelVoteName }),
  }))
);

if (typeof localStorage !== "undefined") {
  useStore.subscribe(
    (store) => store.historyWeights,
    (json) => {
      localStorage.setItem(weightHistoryKey, JSON.stringify(json));
    }
  );

  useStore.subscribe(
    (store) => store.deckListInput,
    (value) => {
      localStorage.setItem(deckInputKey, value);
    }
  );

  useStore.subscribe(
    (store) => store.tableSort,
    (json) => {
      localStorage.setItem(tableSortKey, JSON.stringify(json));
    }
  );
}

export default useStore;
