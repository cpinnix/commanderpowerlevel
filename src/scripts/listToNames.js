const setRegExp = new RegExp(/(?<=\()(.*?)(?=\))/);
const CardNameRegExp = new RegExp(/(?<=[0-9] )(.*?)(?= \()/);
const countRegExp = new RegExp();

const deckListInput = `1 Marwyn, the Nurturer (DOM) 172
1 Allosaurus Shepherd (2X2) 132
1 Arbor Elf (M13) 160
1 Asceticism (PLST) SOM-110
1 Beast Whisperer (GRN) 123
1 Beast Within (NPH) 103
1 Boreal Druid (CSP) 105
1 Castle Garenbrig (ELD) 388
1 Chord of Calling (M15) 172
1 Circle of Dreams Druid (PAFR) 176p
1 Collective Resistance (MH3) 147
1 Copperhorn Scout (CNS) 160
1 Craterhoof Behemoth (AVR) 172
1 Crop Rotation (2XM) 161
1 Dwynen's Elite (ORI) 173
1 Eladamri, Korvecdal (MH3) 149
1 Elven Ambush (KHM) 391
1 Elvish Archdruid (JMP) 391
1 Elvish Champion (DPA) 60
1 Elvish Harbinger (LRW) 207
1 Elvish Mystic (M15) 173
1 Elvish Visionary (SLD) 763 *F*
1 Elvish Warmaster (KHM) 167
1 Emerald Medallion (TMP) 283
1 Eternal Witness (DDJ) 55
1 Ezuri, Renegade Leader (SOM) 119
1 Ezuri's Predation (C15) 36
1 Fauna Shaman (M11) 172
1 Fierce Empath (SCG) 119
1 Finale of Devastation (WAR) 160
1 For the Ancestors (CMM) 740
23 Forest (JMP) 77
1 Fyndhorn Elves (ICE) 244
1 Gala Greeters (SNC) 456 *F*
1 Ghost Quarter (ISD) 240
1 Growing Rites of Itlimoc // Itlimoc, Cradle of the Sun (XLN) 191
1 Guardian Project (RNA) 130
1 Heritage Druid (EMA) 171
1 Heroic Intervention (M21) 188
1 Imperious Perfect (LRW) 220
1 Joraga Treespeaker (ROE) 190
1 Joraga Warcaller (WWK) 106
1 Kenrith's Transformation (ELD) 164
1 Krosan Grip (C20) 181
1 Lead the Stampede (IKO) 163
1 Leaf-Crowned Visionary (DMU) 167
1 Llanowar Elves (7ED) 253
1 Lys Alana Huntmaster (LRW) 229
1 Nullmage Shepherd (RAV) 174
1 Nykthos, Shrine to Nyx (THS) 223
1 Oakhame Adversary (ELD) 167
1 Oran-Rief, the Vastwood (CMA) 263
1 Overwhelming Stampede (CMA) 131
1 Priest of Titania (USG) 270
1 Quirion Ranger (VIS) 117
1 Realmwalker (KHM) 399 *F*
1 Reclamation Sage (2XM) 178
1 Return of the Wildspeaker (ELD) 172
1 Rishkar, Peema Renegade (AER) 122
1 Scavenger Grounds (C20) 306
1 Seeker of Skybreak (TMP) 254
1 Skyshroud Poacher (NEM) 119
1 Sol Ring (C20) 252
1 Song of the Dryads (C14) 47
1 Soul of the Harvest (AVR) 195
1 Staff of Domination (CMR) 343
1 Timberwatch Elf (SLD) 780 *F*
1 Umbral Mantle (SHM) 267
1 Vanquisher's Banner (XLN) 251
1 Veil of Summer (M20) 198
1 Wellwisher (PLST) CMA-166
1 Wildest Dreams (KLD) 174
1 Winding Way (OTC) 213
1 Wirewood Lodge (PLST) DD1-26
1 Wirewood Symbiote (EMA) 192
1 Wood Elves (9ED) 283
1 Yavimaya, Cradle of Growth (MH2) 261
1 Yeva, Nature's Herald (M13) 197`;

const deckList = deckListInput.split("\n").map((raw) => {
  return {
    count: parseInt(raw.split(" ")[0]),
    name: raw
      .split(" ")
      .slice(1)
      .join(" ")
      .match(new RegExp(/(.*?)(?= \()/)),
  };
});

deckList.forEach((card) => console.log(card.name));
