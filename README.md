# News Image — Saturday 21 November 2026

[![make.fun](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Hantone-liu/makefun-news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Hantone-liu/makefun-news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

An entry for [make.fun's "Sum up 21 November's world news in one image"](https://make.fun/bounty/news-image-20261121) bounty. The program (`main.ts`, Node 22, standard library only) copies `entry.png` to `/output/entry.png` — no network at run time, and both runs write identical bytes.

The image sums up Saturday 21 November 2026 in one picture: Russia's overnight missile and drone barrage on Kyiv, with missiles landing in Poland, under the masthead "WORLD NEWS — SATURDAY 21 NOVEMBER 2026", with four short chips for the rest of the day — the AI stock sell-off pushing markets into correction, the magnitude 6.8 Peru quake, the COP31 talks running past their deadline, and the pancreatic-cancer pill trial.

Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
