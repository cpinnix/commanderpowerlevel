# Commander Power Level

## Mission

**Provide an open source commander deck power level tool to aid the rule zero discussion.**

### Values

#### Fun

Commander should be fun. The idea is to get together with your friends and have a good time. Players should feel like they're socializing. Games should draw players into participation with a healthy rate of play and interesting interactions.

#### Flexibility

Commander is a flexible format. A commander game can range from low powered explorations to high powered competitions. Players may want to: play an evenly matched game, experiment with janky builds, play with more than 4 players, invent new rules, start the game with Descent into Avernus, play out of cubes. There are a near endless amount of possibilities for a commander game.

#### Rule Zero

Before playing, having a rule zero discussion is the solution for curating the experience players are looking for. Players are going to sit down with one another for 30 minutes or more, the least they should do is talk about how powerful their decks are.

#### Open Source

Given the flexibility of commander and the range of experiences players are looking for, the goal is to provide a powerful suite of tools to allow players to craft the experience they are looking for. Open source techniques are a well established way of maintaining complex systems from 3D editing software, to encyclopedias, to artificial intelligences. Open source can help the commander community and its parts craft amazing player experiences.

## Purpose

Provide the ability to quickly gauge the power level of any commander deck using crowdsourced weights.

There are three weights used to generate three scores:

- Commander Weights to generate a Commander Score
- Power Weights to generate a Power Score
- Pepper Weights to generate a Pepper Score

These weights are maintained in CSV files and can be collaboratively modified in this repository.

## Scores

### Commander Score

The Commander Score is a rough indicator of whole deck synergy power potential. To avoid having a complicated technical system to analyze the power of synergies within a given commander deck, the deck's commander is used as a proxy for a deck's power potential through card interactions.

The Commander Score is a number between 0 and 1000. 1000 being a mythical god commander that can never be beat; it'd probably have an eminence ability that says you win the game at the beginning of your first upkeep or something.

#### Guidelines

##### 9

Commanders scored in the nines should be top tier within the format. These commanders should:

- Be among the top tier in competitive commander rankings.
- Usually facilitate interactions that can win the game before turn 4.

Example: [Kinnan, Bonder Prodigy](https://scryfall.com/card/iko/192/kinnan-bonder-prodigy)

##### 8

Commanders scored in the eights should enable powerful competitive builds but are not necessarily top tier in competitive rankings. These commanders should:

- Be among the middle in the competitive commander rankings.
- Usually facilitate interactions that can win the game before turn 6.

Example: [Kaalia of the Vast](https://scryfall.com/card/mh3/290/kaalia-of-the-vast)

##### 7

Commanders scored in the sevens should be the top of casual builds. These commanders should:

- Be powerful but not overly scary in unoptimized pods.
- Usually facilitate interactions that can win the game before turn 8.

Example:

##### 6

Commanders scored in the sixes should be experimental, unoptimized, but still able to win the game. These commanders should:

- Be unable to hang with eights.
- Can win the game eventually.

Example:

##### 5

Commanders scored in the fives are highly janky and experimental. These commanders should:

- Be playing around with mechanic or play patterns.
- Not winning like crazy.

Example:

##### 4 or less

Commanders scored in the fours or under are not doing much in the commander zone. These commanders should:

- Be obviously not doing anything much.

Example:

### Power Score

The Power Score for an individual card indicates how generically powerful it is within the commander format. The Power Score for a deck indicates how generically powerful a deck is within the commander format. There are cards in commander that can be placed in pretty much any deck and increase the power level of the deck. There are also cards that are generically weak like basic lands.

The Power Score is a number between 0 and 1000. Each card has a Power Weight between 0 and 10. 100 cards in a deck multiplied by all the weights will give the total Power Score for a deck.

#### Guidelines

##### 9

Example:

##### 8

Example:

##### 7

Example:

##### 6

Example:

##### 5

Example:

##### 4

Example:

##### 3

Example:

##### 2

Example:

##### 1

Example:

### Pepper Score

The Pepper Score indicates how generically fun or friendly a card is. The Pepper Score for a card indicates how excited players are to play against it. The Pepper Score is the opposite of a Salt score.

#### Guidelines

##### 9

##### 8

##### 7

##### 6

##### 5

##### 4

##### 3

##### 2

##### 1
