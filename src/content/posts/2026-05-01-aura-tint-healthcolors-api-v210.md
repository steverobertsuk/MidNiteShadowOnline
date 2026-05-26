---
title: "Aura/Tint HealthColors API v2.1.0"
summary: "Version 2.1 of the HealthColors API that introduces a palette system for health colors and fixes aura visibility, settings menu behavior, and a few lingering stability issues."
date: 2026-05-01
category: "HealthColors"
tags: ["Roll20 API Mod", "Feature Release"]
---

Version 2.1 is an update focused on introducing a palette system for health colors and fixing critical bugs related to aura visibility thresholds, settings menu behavior, and stability issues.

## Change Log

### Added

- Added a palette system for health colors with `default` and `colorblind` options.
- Added `!aura palette ?{Palette|default|colorblind}` command and matching menu control (palette switching forces existing tokens to refresh immediately).

### Changed

- Switched health color mapping from a fixed red/green calculation to palette-based low/mid/high interpolation.
- Added an explicit `dead` color stop to each palette and mapped exactly 0% HP to black (`#000000`).
- Updated default `AuraSize` from `0.7` to `0.35` and aligned docs/menu wording to describe radius in feet from token edge.
- Updated menu/settings output to include the active palette.

### Fixed

- Fixed dead-state visuals at 0 HP so dead color behavior remains consistent.
- Fixed missed updates when tokens are resized by treating width/height changes as a visual refresh trigger.

## Where to install the mod from?

- Roll20 One-Click Installer.
- [Roll20 API GitHub master branch](https://github.com/Roll20/roll20-api-scripts/tree/master/HealthColors).
- [Download and install manually from Dropbox](https://www.dropbox.com/scl/fi/zeybiz7hiz5plldnphmi6/HealthColors_v2.1.0.zip?rlkey=2ws2werqedtsrmmin19fyrcbv&dl=0).

---

The mod API is offered under the MIT License, and it allows users to freely use, copy, modify, merge, publish, distribute, sublicense, and sell the software, provided the original copyright and license notice are included.
