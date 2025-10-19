/* PATTERN_START */
stack(
  s("bd*2 ~ bd ~ bd ~ ~ ~").gain(0.9),
  s("~ sn ~ sn").gain(0.8),
  s("[hh hh]*8").gain(0.4).speed(1.2),
  note("c2 c2 g1 c2").s("sawtooth").lpf(400).gain(0.6),
  note("e4 g4 e4 c4").s("square").lpf(2000).gain(0.3).delay(0.3)
).fast(1.4)
/* PATTERN_END */
