# Commander Power Level

## Purpose

General idea is to provide the ability to quickly gauge the power level of a commander deck using crowdsourced weights.

There are three weights used to generate three scores: Commander Weights, Power Weights, and Salt Weights. These weights are maintained in CSV files and can be collaborative modified in this repository.

## Scores

### Commander Score

The Commander Score is a rough indicator of whole deck synergy power potential. To avoid having a complicated technical system to analyze the power of synergies within a given commander deck, the deck's commander is used as a proxy for a deck's power potential through card interactions.

The Commander Score is a number between 0 and 1000. 1000 being a mythical god commander that can never be beat; it'd probably have an eminence ability that says you win the game at the beginning of your first upkeep or something.

#### Guidelines

##### 0 - 400

##### 400 - 600

##### 600

##### 700

##### 800

##### 900

### Power Score

The Power Score describes how powerful individual cards are on their own. The Power Score indicates how generically powerful a deck is. There are cards in commander that can be placed in pretty much any deck and increase the power level of the deck.

The Power Score is a number between 0 and 1000. Each card has a Power Weight between 0 and 10. 100 cards in a deck multiplied by all the weights will give the total Power Score for a deck.
