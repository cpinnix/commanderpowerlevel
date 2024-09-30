# Commander Power Levels

## Philosophy and Approach

Commander is a complex game with many power levels and subgroups. Instead of relying on a small group to manage the format, this project offers an alternative: an open-source, community-driven tool for calculating power levels to enhance Rule Zero discussions.

**This project aims to equip Commander players with the tools and information needed for clearer, more productive Rule Zero conversations.**

This project uses crowd-sourced weights, paired with a simple web application, to provide quick insights into a deck’s power and gameplay experience. Power Level is calculated based on these weights.

Weights offer a more quantitative method for assessing power level by replacing subjective rules of thumb with measurable values. By assigning specific numerical weights to cards, players can analyze deck strength in a consistent, data-driven way. This reduces the ambiguity often associated with determining power level in the Rule Zero discussion and as a result, should improve the following gameplay experience.

Weights are maintained in CSV files and can be collaboratively modified in this repository. They're simply card names matched up with a number from 0 to 10. A weight's meaning depends on the level it pertains to; more details below.

Through the web application, players can copy and paste their Moxfield decklist and quickly get stats that others can easily interpret. While approximate, these stats should help playgroups assess pod balance.

## Values

#### Fun

Commander should be fun. The focus is on enjoying time with friends, fostering social interaction, and creating games that engage players with a healthy pace and dynamic interactions. Tools should help make games fun.

#### Flexibility

Commander is a highly adaptable format. Whether aiming for balanced competition, experimenting with creative builds, playing with custom rules, or exploring new gameplay styles, the possibilities are endless. Tools should be flexible enough to support the creativity of Commander.

#### Analysis

Commander’s complexity, with its vast card pool and constant updates, makes power assessment difficult. Analytical tools can assist players in gauging their deck’s power more accurately.

#### Rule Zero

A Rule Zero discussion sets the stage for an enjoyable game. Since players will spend significant time together, a brief conversation about deck power levels is essential. Technology can aid this process.

#### Open Source

Commander’s diversity calls for robust tools that cater to various player experiences. Open-source methods, proven in managing complex software systems, artificial intelligences, and encyclopedias, can help the community create amazing gameplay experiences.

## Power Level

The Power Level of an individual card reflects its general strength within the Commander format. Similarly, the Power Level of a deck represents how powerful the entire deck is. Some cards in Commander can be added to almost any deck to boost its overall power, while others, like basic lands, are considered weaker.

Power Level is a number between 0 and 10. Each card has a Power Weight between 0 and 10. 100 cards in a deck multiplied by all the weights divided by 100 will give the total Power Level for a deck.

### Guidelines

#### Power Level 9

Cards in Power Level 9 should represent some of the most competitively powerful options in the format. These cards typically:

1. Allow players to tutor for any card
2. Counter spells at no mana cost
3. Generate significant amounts of mana quickly
4. Enable combos with just two pieces

Examples:

- [Fierce Guardianship](https://scryfall.com/card/cmm/94/fierce-guardianship)
- [Jeweled Lotus](https://scryfall.com/card/cmm/396/jeweled-lotus)
- [Mana Crypt](https://scryfall.com/card/2xm/270/mana-crypt)
- [Thassa's Oracle](https://scryfall.com/card/thb/73/thassas-oracle)

#### Power Level 8

Cards in Power Level 8 should be slightly less powerful than nines but still strong and versatile. These cards typically:

1. Provide significant card advantage
2. Generate a moderate amount of mana over time
3. Enable combos that require three pieces

Examples:

- [Dockside Extortionist](https://scryfall.com/card/2x2/107/dockside-extortionist)
- [Smothering Tithe](https://scryfall.com/card/cmm/57/smothering-tithe)
- [Rhystic Study](https://scryfall.com/card/jmp/169/rhystic-study)

#### Power Level 7

Cards in Power Level 7 should be stronger than those found in a standard pre-constructed deck, offering solid power without being an immediate threat to the table. These cards typically:

1. Synergize well with various deck strategies
2. Fit comfortably in a balanced, higher-power deck
3. Typically land base upgrades

Example:

- [Fetch Lands](https://scryfall.com/search?q=is%3Afetchland&unique=cards&as=grid&order=name)
- [Shock Lands](https://scryfall.com/search?q=is%3Ashockland&unique=cards&as=grid&order=name)

#### Power Level 6

Cards in Power Level 6 are commonly found in standard pre-constructed decks and are generally solid choices. These would be considered Commander staples. These cards typically:

1. Perform well in any deck
2. Synergize with certain deck strategies, though not universally
3. Serve as staples for common play patterns

Example:

- [Lightning Greaves](https://scryfall.com/card/dsc/93/lightning-greaves)
- [Arcane Signet](https://scryfall.com/card/dsc/92/arcane-signet)
- [Cultivate](https://scryfall.com/card/dsc/174/cultivate)

#### Power Level 5

Cards in Power Level 5 are considered average and may be specific to certain Commanders or strategies. These cards typically:

1. Support the Commander but are less effective in other contexts
2. May have been included in pre-constructed decks but just missed the cut for better cards

Examples:

- [Caress of Phyrexia](https://scryfall.com/card/nph/53/caress-of-phyrexia)
- [Palani's Hatcher](https://scryfall.com/card/lci/237/palanis-hatcher)

#### Power Level 4

Cards in Power Level 4 are generally weaker and specific to certain Commanders, often appearing somewhat janky. These cards typically:

1. Are notably weak and tailored to a particular Commander
2. May be included for thematic reasons

#### Power Level 3

Cards in Power Level 3 are considered bulk cards that are not lands and lack special utility. These cards typically:

1. Include creatures, instants, and sorceries that are generally seen as bulk
2. May consist of weaker dual lands

#### Power Level 2

Cards in Power Level 2 are lands that are slightly better than basic lands. These cards typically:

1. Tap for one or more mana but are not classified as basic lands

Examples:

- [Snow Lands](https://scryfall.com/search?q=t%3Asnow+t%3Abasic&unique=cards&as=grid&order=name)

#### Power Level 1

Cards in Power Level 1 are essentially neutral to a deck. These cards are basic lands.

Examples:

- [Basic Lands](https://scryfall.com/search?q=-type%3Asnow+%28type%3Aland+type%3Abasic%29&unique=cards&as=grid&order=name)

## Feature Requests

1. A card weighing form or game that allows community members to easily weigh in on cards.
1. And analysis table that will allow you to turn things on and off and hide things to see how your scores change.
1. A score card that you can save and show people during the rule zero discussion.
