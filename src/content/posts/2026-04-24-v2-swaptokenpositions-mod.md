---
title: "v2 SwapTokenPositions Mod"
summary: "Version 2 of the SwapTokenPositions Roll20 mod, featuring enhanced token swapping with staged FX pipelines, presets, and an instant-swap path."
date: 2026-04-24
category: "SwapTokenPositions"
tags: ["Roll20 API Mod", "Feature Release"]
---

Version 2.0.0 of SwapTokenPositions has now been released, introducing a new staged FX pipeline with explicit origin, travel, and destination phases; new FX and timing flags for granular control; a preset system for common swap styles; an instant-swap option; and a refactored modular architecture for improved maintainability and extensibility.

Discussions on the additions, changes and fixes can be found on the Roll20 forums: [https://app.roll20.net/forum/post/12727681/new-swaptokenpositions](https://app.roll20.net/forum/post/12727681/new-swaptokenpositions).

## Change Log

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


## Where to install the mod from?

- Roll20 One-Click Installer - Coming soon.
- [Roll20 API GitHub master branch](https://github.com/Roll20/roll20-api-scripts/tree/master/SwapTokenPositions).
- [Download and install manually from Dropbox](https://www.dropbox.com/scl/fi/jcplg8p3wi45moa806e0m/SwapTokenPositions_v2.0.0.zip?rlkey=vo5ha2ca9dl1lk960vnimc2om&dl=0).

---

The mod API is offered under the MIT License, and it allows users to freely use, copy, modify, merge, publish, distribute, sublicense, and sell the software, provided the original copyright and license notice are included.

