---
title: 'New SwapTokenPositions Mod API'
summary: 'A Roll20 mod update for swapping selected tokens, with staged FX pipelines, presets, and an instant-swap path.'
date: 2026-04-23
category: 'SwapTokenPositions'
tags: ['Roll20 API Mod', 'SwapTokenPositions', 'Tabletop Tools']
---

SwapTokenPositions is a Roll20 Mod (API script) that allows GMs and players to quickly swap the positions of two selected tokens on the same page. It features customizable animation effects, persistent global settings, and clear chat feedback.

The full list of additions, changes and fixes can be found on the Roll20 forums: [https://app.roll20.net/forum/post/12727681/new-swaptokenpositions](https://app.roll20.net/forum/post/12727681/new-swaptokenpositions)

I've posted the new version to the Roll20 API Scripts GitHub repository, and I am awaiting its review and merge so it can be brought into Roll20's OneClick installers as version 1.0.0. The pull request is here: [https://github.com/Roll20/roll20-api-scripts/pull/2206](https://github.com/Roll20/roll20-api-scripts/pull/2206)

If you'd like to manually install this API, you can download it from Dropbox here: [https://www.dropbox.com/scl/fi/dljxit965zx62kphoh716/SwapTokenPositions_v1.0.0.zip?rlkey=lopi9woy3fvatk7u6xu5hh68z&dl=0](https://www.dropbox.com/scl/fi/dljxit965zx62kphoh716/SwapTokenPositions_v1.0.0.zip?rlkey=lopi9woy3fvatk7u6xu5hh68z&dl=0)

---

The mod API is offered under the MIT License, and it allows users to freely use, copy, modify, merge, publish, distribute, sublicense, and sell the software, provided the original copyright and license notice are included.

Music is "Fantasy" from alexshulgin and licensed via Envato.

---

## EDIT: Version 2 out with modular coderewrite and new FX pipelines

### Added

- New staged FX pipeline with explicit origin, travel, and destination phases.
- New FX flags: `--origin-fx`, `--travel-fx`, `--destination-fx`.
- New timing flags: `--origin-time`, `--travel-time`, `--destination-time`, `--swap-delay`, `--destination-delay`.
- New travel visibility flag: `--travel-mode` with values `normal` and `invisible`.
- Preset system with `portal`, `lightning`, `shadow`, `fire`, `magic`, `transport`, and `none`.
- `--instant` flag to force immediate swap.
- Backward-compatibility parsing for legacy flags with deprecation warnings.
- Modular multi-file source structure under `src/`.
- Local build tooling (`rollup`) to generate single-file artifacts for Roll20.
- Build banner metadata in generated output, including build timestamp.
- Explicit same-page validation for selected tokens before swap.
- Delayed pipeline safety checks that cancel gracefully if tokens disappear mid-sequence.

### Changed

- Refactored internal architecture from a monolithic file to source modules with a generated bundle.
- Replaced the v1 mode-centric flow (`--mode` + repeated beam cycle) with a staged pipeline (`origin -> travel -> swap -> destination`) driven by stage FX and timing flags.

### Deprecated

- `--mode` (mapped for compatibility: `beams` -> `--preset lightning`, `transport` -> `--preset transport`)
- `--duration` (replaced by `--swap-delay`)
- `--beam-fx` (replaced by `--travel-fx`)
- `--burst-fx` (replaced by `--destination-fx`)

The code can be viewed and downloaded from the [Roll20 GitHub pull request](https://github.com/Roll20/roll20-api-scripts/pull/2216) or via [Dropbox](https://www.dropbox.com/scl/fi/jcplg8p3wi45moa806e0m/SwapTokenPositions_v2.0.0.zip?rlkey=vo5ha2ca9dl1lk960vnimc2om&dl=0).

I'll post when versions 1 and 2 are added to the One-Click Installer.
