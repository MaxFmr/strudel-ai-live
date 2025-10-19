/* PATTERN_START */
stack(
  // --- MÉLODIE : Korobeiniki (thème A) en style chiptune ---
  note("e5 b4 c5 d5  c5 b4 a4 a4  c5 e5 d5 c5  b4 c5 d5 e5  c5 a4 a4")
    .s("square")
    .gain(0.55)
    .shape(0.2)   // légère saturation "8-bit"
    .slow(2),

  // --- ACCOMPAGNEMENT : arpèges très simples (A min / G / C / E) ---
  note("a3 c4 e4 a3  g3 b3 d4 g3  c4 e4 g4 c4  e3 g3 b3 e3")
    .s("square")
    .gain(0.28)
    .slow(2),

  // --- BASSE : ostinato qui ancre la tonalité ---
  note("a2 ~ e2 ~  a2 ~ e2 ~  a2 ~ e2 ~  a2 ~ e2 ~")
    .s("triangle")
    .gain(0.35),

  // --- DRUMS : petit beat pour tenir le groove (optionnel) ---
  s("bd*4").gain(0.9).shape(0.25),          // kick droit
  s("~ cp ~ cp").gain(0.6).hcutoff(1800),   // clap sur 2 & 4
  s("hh*8").gain(0.22).hcutoff(7000)        // hats en croches
).cpm(25)
/* PATTERN_END */
