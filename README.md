# Commander Power Levels

## Philosophy and Approach

Commander is a complex game with many power levels and subgroups. Instead of relying on a small group to manage the format, this project offers an alternative: an open-source, community-driven tool for calculating power levels to enhance Rule Zero discussions.

**This project aims to equip Commander players with the tools and information needed for clearer, more productive Rule Zero conversations.**

This project uses crowd-sourced weights, paired with a simple web application, to provide quick insights into a deck’s power and gameplay experience. Three key metrics — Commander, Power, and Pepper — are calculated based on these weights.

Weights offer a more quantitative method for assessing power level by replacing subjective rules of thumb with measurable values. By assigning specific numerical weights to cards, players can analyze deck strength in a consistent, data-driven way. This reduces the ambiguity often associated with determining power level in the Rule Zero discussion and as a result, should improve the following gameplay experience.

Weights are maintained in CSV files and can be collaboratively modified in this repository. They're simply card names matched up with a number from 0 to 10. A weight's meaning depends on the level it pertains to; more details below.

Through the web application, players can copy and paste their Moxfield decklist and quickly get stats that others can easily interpret. While approximate, these stats should help playgroups assess pod balance.

### Values

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

## Levels

### Commander Level

The Commander Level serves as a rough measure of a deck’s synergy and power potential, using the deck’s commander as a proxy for its overall strength.

This level ranges from 0 to 10, with 10 representing an unbeatable, god-like commander — something akin to a commander with an eminence ability that wins the game at the start of your first upkeep.

#### Guidelines

##### 9

Commanders in the nines should be top tier within the format. These commanders should:

- Be among the top tier in competitive Commander rankings.
- Usually facilitate interactions that can win the game before turn 4.

Examples:

- [Kinnan, Bonder Prodigy](https://scryfall.com/card/iko/192/kinnan-bonder-prodigy)

##### 8

Commanders in the eights should enable powerful competitive builds but are not necessarily top tier in competitive rankings. These commanders should:

- Be among the middle in the competitive Commander rankings.
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

Commanders in the fours or under are not doing much in the Command Zone.

Examples:

### Power Level

The Power Level for an individual card indicates how generically powerful it is within the Commander format. The Power Level for a deck indicates how generically powerful a deck is within the Commander format. There are cards in Commander that can be placed in pretty much any deck and increase the power level of the deck. There are also cards that are generically weak like basic lands.

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

Cards in the sixes should be found in standard pre-cons but are still generically good. The would be your Commander staples. These cards should:

- Be generally good in any deck.
- Synergize well with some deck strategies, but not most.
- Staples for common play patterns.

Example:

- [Lightning Greaves](https://scryfall.com/card/dsc/93/lightning-greaves)
- [Arcane Signet](https://scryfall.com/card/dsc/92/arcane-signet)
- [Cultivate](https://scryfall.com/card/dsc/174/cultivate)

##### 5

Cards in the fives are average cards and might be Commander or strategy specific. These cards should:

- Support the Commander, but aren't too great outside.
- Might have come in the pre-con and just missed the cut.

Examples:

- [Caress of Phyrexia](https://scryfall.com/card/nph/53/caress-of-phyrexia)
- [Palani's Hatcher](https://scryfall.com/card/lci/237/palanis-hatcher)

##### 4

Cards in the fours are weaker cards specific to a Commander and might be a bit janky. Could only show up for thematic reasons. These cards should:

- Be quite weak and Commander specific.
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

The Pepper Level indicates how generically fun or friendly a card is. The Pepper Level for a card indicates how excited players are to play against it. A particularly salty card will have a low Pepper Level.

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
