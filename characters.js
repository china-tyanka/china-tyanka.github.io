// Characters standing around the room.
//   img    - path to a cut-out PNG with transparency (put files in characters/). Leave empty for a
//            "texture not found" placeholder figure.
//   name   - shown above the quote
//   quote  - pops up when you hover / tap the character
//   angle  - where around you they stand, in degrees (0 = straight ahead at start, 90 = to the right)
//   dist   - how far away (room units, ~1 unit = 1 metre)
//   height - how tall the figure is (default 2.2)
window.CHARACTERS = [
  { img: 'characters/lain.png', name: 'lain', quote: 'why are u crying lain?', angle: -35, dist: 7, height: 2.4 },
  { img: 'characters/chi.png', name: 'chi', quote: "war means killing one another, right? why'd they do that?", angle: 40, dist: 8, height: 1.7 },
  { img: 'characters/milk.png', name: 'milk chan', quote: "i-i-i'm totally fine. it's just the cursed milk that won't leave me alone.", angle: 115, dist: 6, height: 1.9 },
  { img: 'characters/kyoko.png', name: 'kyoko sakura', quote: "if you live for yourself, you only answer to yourself. no debts to anyone, no regrets... think of it like that and living gets a whole lot easier.", angle: 180, dist: 9, height: 2.4 },
  { img: 'characters/neru.png', name: 'neru akita', quote: 'gocha gocha uruse', angle: -120, dist: 8, height: 2.4 },
];
