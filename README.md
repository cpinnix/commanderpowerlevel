# Commander Power Levels

## Philosophy and Approach

Commander is a complex game with many power levels and subgroups. Instead of relying on a small group to manage the format, this project offers an alternative: an open-source, community-driven tool for calculating power levels to enhance Rule Zero discussions.

**This project aims to equip Commander players with the tools and information needed for clearer, more productive Rule Zero conversations.**

This project uses crowd-sourced weights, paired with a simple web application, to provide quick insights into a deck’s power and gameplay experience. Three key metrics — Commander, Power, and Pepper — are calculated based on these weights.

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

## Commander Level

The Commander Level serves as a rough measure of a deck’s synergy and power potential, using the deck’s commander as a proxy for its overall strength.

This level ranges from 0 to 10, with 10 representing an unbeatable, god-like commander — something akin to a commander with an eminence ability that wins the game at the start of your first upkeep.

### Guidelines

#### Commander Level 9

Commanders in Commander Level 9 should be considered top-tier within the format. These commanders typically:

1. Rank among the top tier in competitive Commander play.
2. Enable game-winning interactions, often before turn 4.

Examples:

- [Kinnan, Bonder Prodigy](https://scryfall.com/card/iko/192/kinnan-bonder-prodigy)

#### Commander Level 8

Commanders in Commander Level 8 should enable strong competitive builds, though they may not be top-tier in competitive rankings. These commanders typically:

1. Rank in the middle of competitive Commander rankings.
2. Facilitate game-winning interactions, usually before turn 6.

Examples:

- [Kaalia of the Vast](https://scryfall.com/card/mh3/290/kaalia-of-the-vast)

#### Commander Level 7

Commanders at Commander Level 7 should represent the peak of casual builds. These commanders typically:

1. Are powerful but not too intimidating in unoptimized pods.
2. Facilitate game-winning interactions, usually before turn 8.

Examples:

- [Slimefoot and Squee](https://scryfall.com/card/moc/447/slimefoot-and-squee)

#### Commander Level 6

Commanders in Commander Level 6 should be experimental and unoptimized, but still capable of winning. These commanders typically:

1. Are not competitive enough to match Level 8 Commanders.
2. Can win the game, though not quickly or efficiently.

Examples:

- [Archelos, Lagoon Mystic](https://scryfall.com/card/dmc/140/archelos-lagoon-mystic)

#### Commander Level 5

Commanders at Commander Level 5 are highly janky and experimental. These commanders typically:

1. Explore unique or unconventional mechanics.
2. Do not have consistent or frequent wins.

Examples:

- [Fynn, the Fangbearer](https://scryfall.com/card/khm/170/fynn-the-fangbearer)

#### Commander Level 4 or less

Commanders in Commander Level 4 or under are not doing much in the Command Zone.

Examples:

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

## Pepper Level

Pepper Level measures how fun or friendly a card is. It reflects the excitement players feel when facing that card. A card that is perceived as particularly frustrating or unfun to play against will have a low Pepper Level.

### Guidelines

#### Pepper Level 9

Cards in Pepper Level 9 are the most enjoyable in Commander. These are the cards that bring smiles and excitement to the battlefield, as players are eager to engage with their mechanics.

#### Pepper Level 8

Cards in Pepper Level 8 are highly enjoyable for the table, though they may asymmetrically affect one or two players, either positively or negatively.

Examples:

- [Descent into Avernus](https://scryfall.com/card/clb/169/descent-into-avernus)

#### Pepper Level 7

Cards in Pepper Level 7 are enjoyable for one or two players and generate interesting interactions.

Examples:

- [Wedding Ring](https://scryfall.com/card/voc/32/wedding-ring)

#### Pepper Level 6

Cards in Pepper Level 6 are mostly enjoyable for one player, while the rest of the table appreciates the card and is happy to see it played.

Examples:

- [Concordant Crossroads](https://scryfall.com/card/2x2/141/concordant-crossroads)

#### Pepper Level 5

Cards in Pepper Level 5 are emotionally neutral for the table.

#### Pepper Level 4

Cards in Pepper Level 4 are annoying for one player and the table generally agrees.

Examples:

- [Fierce Guardianship](https://scryfall.com/card/cmm/94/fierce-guardianship)

#### Pepper Level 3

Cards in Pepper Level 3 are irritating for multiple players and significantly diminish the enjoyment of the game.

Examples:

- [Rhystic Study](https://scryfall.com/card/jmp/169/rhystic-study)

#### Pepper Level 2

Cards in Pepper Level 2 tend to frustrate the table significantly, causing players to feel salty and negatively impacting the overall mood of the game.

Examples:

- [Tergrid, God of Fright](https://scryfall.com/card/khm/112/tergrid-god-of-fright-tergrids-lantern)

#### Pepper Level 1

Cards in Pepper Level 1 elicit audible groans from players, who may choose to concede rather than engage with the card. Playing against these cards is generally considered very unfun.

Examples:

- [Stasis](https://scryfall.com/card/me4/64/stasis)
- [Winter Orb](https://scryfall.com/card/ema/234/winter-orb)
- [Nadu, Winged Wisdom](https://scryfall.com/card/mh3/193/nadu-winged-wisdom)
- [Vorinclex, Voice of Hunger](https://scryfall.com/card/ima/189/vorinclex-voice-of-hunger)
- [Armageddon](https://scryfall.com/card/a25/5/armageddon)
