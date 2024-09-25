# Commander Power Levels

## Mission

**Provide an open source commander deck power level tool to aid the rule zero discussion.**

## Approach

Use crowdsourced weights in combination with a simple web application to calculate a decks levels. Commander, Power, and Pepper weights are used to calculate a decks respective levels. These weights are maintained in CSV files and can be collaboratively modified in this repository.

### Values

#### Fun

Commander should be fun. The idea is to get together with your friends and have a good time. Players should feel like they're socializing. Games should draw players into participation with a healthy rate of play and interesting interactions.

#### Flexibility

Commander is a flexible format. A commander game can range from low powered explorations to high powered competitions. Players may want to: play an evenly matched game, experiment with janky builds, play with more than 4 players, invent new rules, start the game with Descent into Avernus, play out of cubes. There are a near endless amount of possibilities for a commander game.

#### Analysis

Commander is complicated. There are countless potential interactions and new cards are printed constantly. We shouldn't expect a player to accurately gauge the power level of their deck without help from analysis tools.

#### Rule Zero

Before playing, having a Rule Zero discussion is the solution for curating the experience players are looking for. Players are going to sit down with one another for 30 minutes or more, the least they should do is talk about how powerful their decks are. Technological can help inform the Rule Zero discussion.

#### Open Source

Given the flexibility of commander and the range of experiences players are looking for, the goal is to provide a powerful suite of tools to allow players to craft the experience they are looking for. Open source techniques are a well established way of maintaining complex systems from 3D editing software, to encyclopedias, to artificial intelligences. Open source can help the commander community and its parts craft amazing player experiences.

## Levels

### Commander Level

The Commander Level is a rough indicator of whole deck synergy power potential. To avoid having a complicated technical system to analyze the power of synergies within a given commander deck, the deck's commander is used as a proxy for a deck's power potential through card interactions.

The Commander Level is a number between 0 and 10. 10 being a mythical god commander that can never be beat; it'd probably have an eminence ability that says you win the game at the beginning of your first upkeep or something.

#### Guidelines

##### 9

Commanders in the nines should be top tier within the format. These commanders should:

- Be among the top tier in competitive commander rankings.
- Usually facilitate interactions that can win the game before turn 4.

Examples:

- [Kinnan, Bonder Prodigy](https://scryfall.com/card/iko/192/kinnan-bonder-prodigy)

##### 8

Commanders in the eights should enable powerful competitive builds but are not necessarily top tier in competitive rankings. These commanders should:

- Be among the middle in the competitive commander rankings.
- Usually facilitate interactions that can win the game before turn 6.

Examples:

- [Kaalia of the Vast](https://scryfall.com/card/mh3/290/kaalia-of-the-vast)

##### 7

Commanders in the sevens should be the top of casual builds. These commanders should:

- Be powerful but not overly scary in unoptimized pods.
- Usually facilitate interactions that can win the game before turn 8.

Examples:

- [Slimefoot and Squee](https://scryfall.com/card/moc/447/slimefoot-and-squee)

##### 6

Commanders in the sixes should be experimental, unoptimized, but still able to win the game. These commanders should:

- Be unable to hang with eights.
- Can win the game eventually.

Examples:

- [Archelos, Lagoon Mystic](https://scryfall.com/card/dmc/140/archelos-lagoon-mystic)

##### 5

Commanders in the fives are highly janky and experimental. These commanders should:

- Be playing around with mechanics.
- Not winning like crazy.

Examples:

- [Fynn, the Fangbearer](https://scryfall.com/card/khm/170/fynn-the-fangbearer)

##### 4 or less

Commanders in the fours or under are not doing much in the command zone.

Examples:

### Power Level

The Power Level for an individual card indicates how generically powerful it is within the commander format. The Power Level for a deck indicates how generically powerful a deck is within the commander format. There are cards in commander that can be placed in pretty much any deck and increase the power level of the deck. There are also cards that are generically weak like basic lands.

The Power Level is a number between 0 and 10. Each card has a Power Weight between 0 and 10. 100 cards in a deck multiplied by all the weights divided by 100 will give the total Power Level for a deck.

#### Guidelines

##### 9

Cards in the nines should be the most generically powerful competitive cards in the format. These cards should:

- Allow the player to tutor anything
- Counter spells for zero cost
- Generate a lot of mana very quickly
- Combo off with 2 pieces

Examples:

- [Fierce Guardianship](https://scryfall.com/card/cmm/94/fierce-guardianship)
- [Jeweled Lotus](https://scryfall.com/card/cmm/396/jeweled-lotus)
- [Mana Crypt](https://scryfall.com/card/2xm/270/mana-crypt)
- [Thassa's Oracle](https://scryfall.com/card/thb/73/thassas-oracle)

##### 8

Cards in the eights should be a step down from nines, still generically powerful. These cards should:

- Give the player huge card advantage
- Generate medium amount of mana over time
- Combo off with 3 pieces

Examples:

- [Dockside Extortionist](https://scryfall.com/card/2x2/107/dockside-extortionist)
- [Smothering Tithe](https://scryfall.com/card/cmm/57/smothering-tithe)
- [Rhystic Study](https://scryfall.com/card/jmp/169/rhystic-study)

##### 7

Cards in the sevens should be upgrades on a standard pre-con. They should be powerful but when people see them played it's not an emergency for the table. These cards should:

- Synergize well with a range of deck strategies
- Generally be part of a healthy higher power deck
- Probably a decent place to put land upgrades

Example:

- [Fetch Lands](https://scryfall.com/search?q=is%3Afetchland&unique=cards&as=grid&order=name)
- [Shock Lands](https://scryfall.com/search?q=is%3Ashockland&unique=cards&as=grid&order=name)

##### 6

Cards in the sixes should be found in standard pre-cons but are still generically good. The would be your commander staples. These cards should:

- Be generally good in any deck.
- Synergize well with some deck strategies, but not most.
- Staples for common play patterns.

Example:

- [Lightning Greaves](https://scryfall.com/card/dsc/93/lightning-greaves)
- [Arcane Signet](https://scryfall.com/card/dsc/92/arcane-signet)
- [Cultivate](https://scryfall.com/card/dsc/174/cultivate)

##### 5

Cards in the fives are average cards and might be commander or strategy specific. These cards should:

- Support the commander, but aren't too great outside.
- Might have come in the pre-con and just missed the cut.

Examples:

- [Caress of Phyrexia](https://scryfall.com/card/nph/53/caress-of-phyrexia)
- [Palani's Hatcher](https://scryfall.com/card/lci/237/palanis-hatcher)

##### 4

Cards in the fours are weaker cards specific to a commander and might be a bit janky. Could only show up for thematic reasons. These cards should:

- Be quite weak and commander specific.
- Maybe are in the deck for thematic reasons.

Example:

##### 3

Cards in the threes are bulk cards that aren't lands but really don't do anything special. These cards should:

- Be creatures, instants, sorceries that are probably bulk.
- Some weaker dual lands.

Examples:

##### 2

Cards in the twos are lands that sit right about basic lands. These cards should:

- Tap for one or more lands but aren't basic.

Examples:

- [Snow Lands](https://scryfall.com/search?q=t%3Asnow+t%3Abasic&unique=cards&as=grid&order=name)

##### 1

Cards in the ones are essentially neutral to a deck. These cards are: basic lands.

Examples:

- [Basic Lands](https://scryfall.com/search?q=-type%3Asnow+%28type%3Aland+type%3Abasic%29&unique=cards&as=grid&order=name)

### Pepper Level

The Pepper Level indicates how generically fun or friendly a card is. The Pepper Level for a card indicates how excited players are to play against it. The Pepper Level is the opposite of a Salt level.

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
